/**
 * MINDSET - CORE ENGINE v2.5 FINAL (FIREBASE & ONESIGNAL SYNC)
 * HUD, Progressão, Menu Dinâmico, Histórico e Sincronização Cloud
 */

// 1. GESTÃO DE DADOS
let rawData = localStorage.getItem('mindset_data');
let userData = rawData ? JSON.parse(rawData) : null;

if (userData) {
    userData.level = Math.max(1, userData.level || 1);
    userData.xp = userData.xp || 0;
    userData.streak = userData.streak || 0;
    userData.tasksDoneToday = userData.tasksDoneToday || 0;
    userData.completedTodayIds = userData.completedTodayIds || [];
    userData.dailyTaskIds = userData.dailyTaskIds || [];
    userData.completedDays = userData.completedDays || [];
    userData.historyTasks = userData.historyTasks || {};
    userData.tomorrowTasks = userData.tomorrowTasks || [];
    userData.lastDate = userData.lastDate || "";
    userData.dailyQuote = userData.dailyQuote || "O sistema está pronto.";
}

let currentSetup = null;
let currentViewDate = new Date();

// --- FUNÇÃO DE SINCRONIZAÇÃO FIREBASE ---
async function syncToFirebase() {
    if (typeof db === 'undefined' || !userData || !userData.nome) return;
    const userId = userData.nome.toLowerCase().trim().replace(/\s/g, '_');
    try {
        await db.collection("usuarios").doc(userId).set({
            ...userData,
            ultimaSincronizacao: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log("MindSet Cloud: Sincronizado.");
    } catch (error) {
        console.error("Erro Cloud Sync:", error);
    }
}

// --- 2. MOTOR DE PROGRESSÃO ---
function getStreakBonus(streak) {
    if (streak <= 0) return 0;
    return Math.floor(100 * (streak * 0.5 + 0.5) * streak);
}

window.completeTask = (id, xp) => {
    const isAlreadyDone = userData.completedTodayIds.includes(id);
    if (!isAlreadyDone) {
        userData.completedTodayIds.push(id);
        userData.tasksDoneToday++;
        userData.xp += xp;
        if (userData.tasksDoneToday === 3) {
            userData.streak++;
            const bonus = getStreakBonus(userData.streak);
            userData.xp += bonus;
            if (!userData.completedDays.includes(userData.lastDate)) userData.completedDays.push(userData.lastDate);
            window.showModal("META ATINGIDA", `Sequência de ${userData.streak} dias! +${bonus} XP bônus.`);
        }
    } else {
        if (userData.tasksDoneToday === 3) {
            userData.xp -= getStreakBonus(userData.streak);
            userData.streak--;
            userData.completedDays = userData.completedDays.filter(d => d !== userData.lastDate);
        }
        userData.completedTodayIds = userData.completedTodayIds.filter(taskId => taskId !== id);
        userData.tasksDoneToday--;
        userData.xp -= xp;
    }
    handleLeveling(); save(); updateUI(); renderTasks(); syncToFirebase();
};

function handleLeveling() {
    let xpTarget = 1000 + (userData.level * 1000);
    if (userData.xp >= xpTarget && userData.level < 10) {
        userData.xp -= xpTarget; userData.level++;
        window.showModal("EVOLUÇÃO", `Nova Patente: ${currentSetup.ranks[userData.level-1]}`);
    } else if (userData.xp < 0 && userData.level > 1) {
        userData.level--;
        userData.xp = (1000 + (userData.level * 1000)) + userData.xp;
    }
    if (userData.xp < 0) userData.xp = 0;
}

// --- 3. SINCRONIZAÇÃO E TAREFAS ---
function forceDateSync() {
    const agora = new Date();
    const hojeStr = agora.getFullYear() + '-' + String(agora.getMonth() + 1).padStart(2, '0') + '-' + String(agora.getDate()).padStart(2, '0');
    if (userData.lastDate !== hojeStr) {
        if (userData.lastDate !== "") {
            userData.historyTasks[userData.lastDate] = { ids: [...userData.dailyTaskIds], done: [...userData.completedTodayIds] };
            if (userData.tasksDoneToday < 3 && userData.streak > 0) {
                let penalidade = Math.floor(userData.level * 250);
                userData.xp = Math.max(-500, userData.xp - penalidade);
                userData.streak = 0;
                window.showModal("SISTEMA RESETADO", `Falha detectada ontem. Streak zerado e -${penalidade} XP.`);
            }
        }
        userData.dailyTaskIds = userData.tomorrowTasks.length === 3 ? userData.tomorrowTasks : selectNewTasks();
        userData.tomorrowTasks = selectNewTasks();
        userData.dailyQuote = (currentSetup.quotes || ["Foco."])[Math.floor(Math.random() * (currentSetup.quotes || ["Foco."]).length)];
        userData.lastDate = hojeStr; userData.tasksDoneToday = 0; userData.completedTodayIds = [];
        handleLeveling(); save(); renderTasks(); updateUI(); syncToFirebase();
    }
}

function selectNewTasks() {
    let pool = [];
    const lvlLimit = Math.min(userData.level || 1, 10);
    for (let i = 1; i <= lvlLimit; i++) {
        const habits = currentSetup.habitos[`nivel${i}`];
        if (habits) pool = pool.concat(habits);
    }
    return [...pool].sort(() => 0.5 - Math.random()).slice(0, 3).map(t => t.id);
}

// --- 4. RENDERIZAÇÃO E UI ---
function renderTasks() {
    const list = document.getElementById('task-list'); if (!list) return;
    list.innerHTML = "";
    const allHabits = Object.values(currentSetup.habitos).flat();
    const todayHabits = allHabits.filter(h => userData.dailyTaskIds.includes(h.id));
    todayHabits.forEach(task => {
        const isDone = userData.completedTodayIds.includes(task.id);
        const div = document.createElement('div');
        div.className = `task-item ${isDone ? 'completed' : ''}`;
        div.innerHTML = `<div class="task-info"><strong>${task.task}</strong><br><small>${isDone ? 'CONCLUÍDO' : '+' + task.xp + ' XP'}</small></div>
            <button class="btn-check" onclick="window.completeTask('${task.id}', ${task.xp})">${isDone ? '✓' : ''}</button>`;
        list.appendChild(div);
    });
    if (document.getElementById('quote-text')) document.getElementById('quote-text').innerText = `"${userData.dailyQuote}"`;
}

window.showSection = (id) => {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${id}`).classList.add('active');
    document.querySelectorAll('.menu-links li').forEach(li => li.classList.remove('menu-active'));
    const activeBtn = Array.from(document.querySelectorAll('.menu-links li')).find(li => li.getAttribute('onclick')?.includes(id));
    if (activeBtn) activeBtn.classList.add('menu-active');
    if (id === 'history') window.renderCalendar();
    window.toggleMenu();
};

window.renderCalendar = () => {
    const grid = document.getElementById('calendar-days');
    const label = document.getElementById('calendar-month-year');
    if(!grid || !label) return;
    grid.innerHTML = "";
    const y = currentViewDate.getFullYear(), m = currentViewDate.getMonth();
    const meses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    label.innerText = `${meses[m]} ${y}`;
    const primeiroDia = new Date(y, m, 1).getDay();
    const ultimoDia = new Date(y, m + 1, 0).getDate();
    for (let i = 0; i < primeiroDia; i++) grid.innerHTML += `<div class="calendar-day"></div>`;
    for (let d = 1; d <= ultimoDia; d++) {
        const dStr = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const isDone = userData.completedDays.includes(dStr);
        const el = document.createElement('div');
        el.className = `calendar-day clickable ${isDone ? 'completed' : ''} ${dStr === userData.lastDate ? 'today' : ''}`;
        el.innerText = d; el.onclick = () => window.showDayDetail(dStr);
        grid.appendChild(el);
    }
};

window.showDayDetail = (dateStr) => {
    const cont = document.getElementById('day-detail-container'); if (!cont) return;
    const agora = new Date(); const hojeData = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
    const [y, m, d] = dateStr.split('-').map(Number); const clicadaData = new Date(y, m - 1, d);
    const amanha = new Date(hojeData); amanha.setDate(amanha.getDate() + 1);
    const amanhaStr = amanha.getFullYear() + '-' + String(amanha.getMonth() + 1).padStart(2, '0') + '-' + String(amanha.getDate()).padStart(2, '0');
    let html = `<h4 class="section-title">DETALHES: ${dateStr.split('-').reverse().join('/')}</h4>`;
    let tasks = [], done = [], statusType = "";
    if (dateStr === userData.lastDate) { tasks = userData.dailyTaskIds; done = userData.completedTodayIds; }
    else if (dateStr === amanhaStr) { tasks = userData.tomorrowTasks; statusType = "previsto"; }
    else if (userData.historyTasks[dateStr]) { tasks = userData.historyTasks[dateStr].ids; done = userData.historyTasks[dateStr].done; }
    const all = Object.values(currentSetup.habitos).flat();
    if (tasks.length) {
        tasks.forEach(id => {
            const h = all.find(x => x.id === id); const ok = done.includes(id);
            let label, cssClass;
            if (statusType === "previsto") { label = "PREVISTO"; cssClass = "status-previsto"; }
            else if (ok) { label = "CONCLUÍDO"; cssClass = "status-concluido"; }
            else { const ehFuturoOuHoje = clicadaData >= hojeData; label = ehFuturoOuHoje ? "PENDENTE" : "FALHOU"; cssClass = ehFuturoOuHoje ? "status-pendente" : "status-falhou"; }
            html += `<div class="history-task ${cssClass}"><span>${h ? h.task : 'Missão Antiga'}</span><small>${label}</small></div>`;
        });
    } else html += `<p style="font-size:0.8rem; opacity:0.4">${clicadaData > amanha ? 'Missões não geradas.' : 'Sem dados.'}</p>`;
    cont.innerHTML = html; cont.style.display = 'block'; cont.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// --- 5. UTILITÁRIOS & SINCRONIZAÇÃO MANUAL ---
window.copyPix = () => {
    const pixText = document.getElementById('pix-key').innerText;
    if (navigator.clipboard) navigator.clipboard.writeText(pixText).then(() => window.showModal("SUCESSO", "Chave copiada!"));
};
window.toggleMenu = () => document.getElementById('side-menu').classList.toggle('active');

// FUNÇÃO DE ATIVAÇÃO FINAL - FORÇA BRUTA DE TAGS
window.ativarNotificacoesManual = async () => {
    window.showModal("SISTEMA", "Forçando sincronização Cloud...");
    await syncToFirebase();
    
    if (!window.OneSignalDeferred) { window.showModal("ERRO", "OneSignal indisponível."); return; }

    OneSignalDeferred.push(async function(OneSignal) {
        try {
            const cleanId = userData.nome.toLowerCase().trim().replace(/\s/g, '_');
            const voice = mindsetVoices[userData.setup] || mindsetVoices['patriarca'];

            // 1) Solicitar Permissão
            await OneSignal.Notifications.requestPermission();

            // 2) Esperar Subscription ID (A chave do vínculo)
            let subId = null;
            for (let i = 0; i < 15; i++) {
                subId = OneSignal.User.PushSubscription.id;
                if (subId) break;
                await new Promise(r => setTimeout(r, 500));
            }

            if (!subId) throw new Error("Aguardando ativação do navegador. Recarregue a página e tente novamente.");

            // 3) Login de Identidade
            await OneSignal.login(cleanId);

            // 4) Envio forçado de Etiquetas (Tags) convertidas para String
            await OneSignal.User.addTags({
                "nome_usuario": String(userData.nome),
                "setup_ativo": String(userData.setup),
                "msg_morning": String(voice.morning),
                "msg_afternoon": String(voice.afternoon)
            });

            window.showModal("SUCESSO", "Dispositivo e Tags vinculados ao perfil: " + cleanId);
            console.log("Vínculo completo para:", cleanId);
        } catch (err) {
            console.error(err);
            window.showModal("SISTEMA", err.message);
        }
    });
};

window.showModal = (title, msg) => {
    const m = document.getElementById('modal-overlay'); if (!m) return;
    m.style.display = 'flex';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = msg;
    document.getElementById('modal-buttons').innerHTML = `<button class="btn-modal" onclick="window.closeModal()">OK</button>`;
};
window.closeModal = () => document.getElementById('modal-overlay').style.display = 'none';

function updateUI() {
    const lvl = userData.level; const req = 1000 + (lvl * 1000);
    document.getElementById('user-rank').innerText = (currentSetup.ranks[lvl-1] || "INICIANTE").toUpperCase();
    document.getElementById('level-display').innerText = `LVL ${lvl}`;
    document.getElementById('streak-count').innerText = userData.streak;
    document.getElementById('xp-fill').style.width = `${Math.min(100, (userData.xp / req) * 100)}%`;
}
function save() { localStorage.setItem('mindset_data', JSON.stringify(userData)); }
window.changeMonth = (dir) => { currentViewDate.setMonth(currentViewDate.getMonth() + dir); window.renderCalendar(); };

// --- 6. INICIALIZAÇÃO ---
const hexToRgb = hex => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
};

window.onload = () => {
    if (!userData) { window.location.href = 'index.html'; return; }
    setTimeout(() => {
        currentSetup = setupLibrary[userData.setup] || setupLibrary['patriarca'];
        const corHex = currentSetup.cor;
        document.documentElement.style.setProperty('--accent', corHex);
        document.documentElement.style.setProperty('--accent-rgb', hexToRgb(corHex));
        document.body.style.background = `radial-gradient(circle at top, ${corHex}22 0%, #000 100%)`;
        document.getElementById('user-name-display').innerText = userData.nome.toUpperCase();
        forceDateSync(); updateUI(); renderTasks(); syncToFirebase();
        window.dispatchEvent(new Event('hudReady'));
    }, 400);
};

const setupLibrary = {
    'patriarca': typeof patriarcaData !== 'undefined' ? patriarcaData : null,
    'matriarca': typeof matriarcaData !== 'undefined' ? matriarcaData : null,
    'cavalheiro': typeof cavalheiroData !== 'undefined' ? cavalheiroData : null,
    'dama': typeof damaData !== 'undefined' ? damaData : null,
    'devoto': typeof devotoData !== 'undefined' ? devotoData : null,
    'devota': typeof devotaData !== 'undefined' ? devotaData : null,
    'ceo_ele': typeof ceoEleData !== 'undefined' ? ceoEleData : null,
    'ceo_ela': typeof ceoElaData !== 'undefined' ? ceoElaData : null,
    'militar_ele': typeof militarEleData !== 'undefined' ? militarEleData : null,
    'militar_ela': typeof militarElaData !== 'undefined' ? militarElaData : null,
    'investidor': typeof investidorData !== 'undefined' ? investidorData : null,
    'investidora': typeof investidoraData !== 'undefined' ? investidoraData : null,
    'atleta_ele': typeof atletaEleData !== 'undefined' ? atletaEleData : null,
    'atleta_ela': typeof atletaElaData !== 'undefined' ? atletaElaData : null,
    'zen': typeof zenData !== 'undefined' ? zenData : null,
    'estrategista': typeof estrategistaData !== 'undefined' ? estrategistaData : null,
    'minimalista': typeof minimalistaData !== 'undefined' ? minimalistaData : null
};
