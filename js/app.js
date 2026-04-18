/**
 * MINDSET - CORE ENGINE v1.5
 * Lógica de HUD, Progressão Reversível e Streak Multiplicador
 */

// 1. GESTÃO DE DADOS (LocalStorage)
let rawData = localStorage.getItem('mindset_data');
let userData = rawData ? JSON.parse(rawData) : null;

// Inicialização de segurança para novos utilizadores ou dados incompletos
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
}

let currentSetup = null;
let currentViewDate = new Date(); // Controla a navegação do calendário

// 2. MOTOR DE PROGRESSÃO E STREAK

/**
 * Calcula o bónus diário baseado no Streak.
 * Quanto maior a sequência, maior o prémio (Crescimento Exponencial).
 */
function getStreakBonus(streak) {
    if (streak <= 0) return 0;
    // Tabela progressiva aproximada: 1d=100xp, 3d=300xp, 7d=1400xp, 15d=6000xp
    return Math.floor(100 * (streak * 0.5 + 0.5) * streak);
}

window.completeTask = (id, xp) => {
    const isAlreadyDone = userData.completedTodayIds.includes(id);
    const allHabits = Object.values(currentSetup.habitos).flat();
    const habit = allHabits.find(h => h.id === id);

    if (!isAlreadyDone) {
        // --- AÇÃO: CONCLUIR ---
        userData.completedTodayIds.push(id);
        userData.tasksDoneToday++;
        userData.xp += xp;

        // Bateu a meta de 3/3 (META DIÁRIA)
        if (userData.tasksDoneToday === 3) {
            userData.streak++;
            const bonus = getStreakBonus(userData.streak);
            userData.xp += bonus;
            
            if (!userData.completedDays.includes(userData.lastDate)) {
                userData.completedDays.push(userData.lastDate);
            }
            window.showModal("META ATINGIDA", `Sequência de ${userData.streak} dias! Recebeu +${bonus} XP de bónus.`);
        }
    } else {
        // --- AÇÃO: DESMARCAR (ROLLBACK) ---
        // Se ele tinha batido a meta e está a voltar atrás, removemos o bónus de streak
        if (userData.tasksDoneToday === 3) {
            const bonusRemover = getStreakBonus(userData.streak);
            userData.xp -= bonusRemover;
            userData.streak--;
            userData.completedDays = userData.completedDays.filter(d => d !== userData.lastDate);
        }

        userData.completedTodayIds = userData.completedTodayIds.filter(taskId => taskId !== id);
        userData.tasksDoneToday--;
        userData.xp -= xp;
    }

    handleLeveling();
    save();
    updateUI();
    renderTasks();
};

function handleLeveling() {
    let xpTarget = 1000 + (userData.level * 1000);

    // LEVEL UP
    if (userData.xp >= xpTarget && userData.level < 10) {
        userData.xp -= xpTarget;
        userData.level++;
        window.showModal("EVOLUÇÃO", `Nova Patente: ${currentSetup.ranks[userData.level-1]}`);
    } 
    // LEVEL DOWN (Por penalidade de falha ou estorno de pontos)
    else if (userData.xp < 0 && userData.level > 1) {
        userData.level--;
        let prevTarget = 1000 + (userData.level * 1000);
        userData.xp = prevTarget + userData.xp; // Transfere o débito para a barra anterior
        window.showModal("REGRESSÃO", "A sua patente desceu devido à falta de consistência ou estorno.");
    }
    
    if (userData.xp < 0) userData.xp = 0;
}

// 3. SINCRONIZAÇÃO DIÁRIA E PUNIÇÃO

function forceDateSync() {
    const agora = new Date();
    const hojeStr = agora.getFullYear() + '-' + String(agora.getMonth() + 1).padStart(2, '0') + '-' + String(agora.getDate()).padStart(2, '0');
    
    if (userData.lastDate !== hojeStr) {
        if (userData.lastDate !== "") {
            // Regista histórico do dia que passou
            userData.historyTasks[userData.lastDate] = {
                ids: [...userData.dailyTaskIds],
                done: [...userData.completedTodayIds]
            };

            // PENALIDADE POR QUEBRA DE STREAK
            if (userData.tasksDoneToday < 3) {
                if (userData.streak > 0) {
                    // Punição: Perde o streak e XP proporcional ao nível
                    let penalidade = Math.floor(userData.level * 250);
                    userData.xp = Math.max(-500, userData.xp - penalidade);
                    userData.streak = 0;
                    window.showModal("STREAK PERDIDO", `Falhou ontem. Sequência resetada e perdeu ${penalidade} XP.`);
                }
            }
        }

        // Rodagem de missões: Amanhã torna-se Hoje
        userData.dailyTaskIds = userData.tomorrowTasks.length === 3 ? userData.tomorrowTasks : selectNewTasks();
        userData.tomorrowTasks = selectNewTasks();
        
        const quotes = currentSetup.quotes || ["Foco no agora."];
        userData.dailyQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        userData.lastDate = hojeStr;
        userData.tasksDoneToday = 0;
        userData.completedTodayIds = [];
        
        handleLeveling(); // Verifica se a penalidade causou Level Down
        save();
        renderTasks();
        updateUI();
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

// 4. RENDERIZAÇÃO E UI

function renderTasks() {
    const list = document.getElementById('task-list');
    if (!list) return;
    list.innerHTML = "";
    
    const allHabits = Object.values(currentSetup.habitos).flat();
    const todayHabits = allHabits.filter(h => userData.dailyTaskIds.includes(h.id));

    todayHabits.forEach(task => {
        const isDone = userData.completedTodayIds.includes(task.id);
        const div = document.createElement('div');
        div.className = `task-item ${isDone ? 'completed' : ''}`;
        
        div.innerHTML = `
            <div class="task-info">
                <strong>${task.task}</strong><br>
                <small>${isDone ? 'CONCLUÍDO' : '+' + task.xp + ' XP'}</small>
            </div>
            <button class="btn-check" onclick="window.completeTask('${task.id}', ${task.xp})">
                ${isDone ? '✕' : '✓'}
            </button>
        `;
        list.appendChild(div);
    });
    
    const quoteEl = document.getElementById('quote-text');
    if (quoteEl) quoteEl.innerText = `"${userData.dailyQuote || ''}"`;
}

function updateUI() {
    const lvl = userData.level;
    const rankEl = document.getElementById('user-rank');
    const lvlEl = document.getElementById('level-display');
    const xpFill = document.getElementById('xp-fill');
    const streakEl = document.getElementById('streak-count');

    if (rankEl) rankEl.innerText = (currentSetup.ranks[lvl-1] || "INICIANTE").toUpperCase();
    if (lvlEl) lvlEl.innerText = `LVL ${lvl}`;
    if (streakEl) streakEl.innerText = userData.streak;
    
    if (xpFill) {
        const req = 1000 + (lvl * 1000);
        const percent = (userData.xp / req) * 100;
        xpFill.style.width = `${Math.max(0, Math.min(100, percent))}%`;
    }
}

// 5. CALENDÁRIO

window.changeMonth = (dir) => {
    currentViewDate.setMonth(currentViewDate.getMonth() + dir);
    window.renderCalendar();
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
        el.innerText = d;
        el.onclick = () => window.showDayDetail(dStr);
        grid.appendChild(el);
    }
};

window.showDayDetail = (dateStr) => {
    const cont = document.getElementById('day-detail-container');
    if (!cont) return;

    let html = `<h4 class="section-title">DETALHES: ${dateStr.split('-').reverse().join('/')}</h4>`;
    let tasks = [], done = [];

    if (dateStr === userData.lastDate) {
        tasks = userData.dailyTaskIds; done = userData.completedTodayIds;
    } else if (userData.historyTasks[dateStr]) {
        tasks = userData.historyTasks[dateStr].ids;
        done = userData.historyTasks[dateStr].done;
    }

    const all = Object.values(currentSetup.habitos).flat();
    if (tasks.length) {
        tasks.forEach(id => {
            const h = all.find(x => x.id === id);
            const ok = done.includes(id);
            let color = ok ? "#28a745" : "#dc3545";
            html += `<div class="history-task" style="border-left: 2px solid ${color}; padding-left:12px; margin-bottom:8px; font-size:0.9rem;">
                        <span style="color:${color}; font-weight:bold;">${ok ? '✓' : '✕'}</span> ${h ? h.task : 'Missão Antiga'}
                     </div>`;
        });
    } else {
        html += `<p style="font-size:0.8rem; opacity:0.4">Nenhum registo disponível.</p>`;
    }
    cont.innerHTML = html;
    cont.style.display = 'block';
};

// 6. UTILITÁRIOS E MENU

window.toggleMenu = () => document.getElementById('side-menu').classList.toggle('active');
window.closeModal = () => document.getElementById('modal-overlay').style.display = 'none';

window.showModal = (title, msg) => {
    const m = document.getElementById('modal-overlay');
    if(!m) return;
    m.style.display = 'flex';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = msg;
    document.getElementById('modal-buttons').innerHTML = `<button class="btn-modal" onclick="window.closeModal()">ENTENDIDO</button>`;
};

window.showSection = (id) => {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`section-${id}`);
    if (target) target.classList.add('active');
    
    if (id === 'history') window.renderCalendar();
    window.toggleMenu();
};

window.copyPix = () => {
    const key = document.getElementById('pix-key').innerText;
    navigator.clipboard.writeText(key).then(() => {
        window.showModal("COPIADO", "Chave PIX copiada para a área de transferência.");
    });
};

window.confirmReset = () => {
    window.showModal("REINICIAR SISTEMA?", "O seu nível, XP e histórico de vitórias serão apagados permanentemente.");
    document.getElementById('modal-buttons').innerHTML = `
        <button class="btn-modal" style="background:#ff3b3b; color:white;" onclick="localStorage.clear(); window.location.href='index.html'">REINICIAR TUDO</button>
        <button class="btn-modal" onclick="window.closeModal()" style="margin-top:10px; background:#222; color:#fff">CANCELAR</button>
    `;
};

function save() { localStorage.setItem('mindset_data', JSON.stringify(userData)); }

// 7. INICIALIZAÇÃO

window.onload = () => {
    if (!userData) { window.location.href = 'index.html'; return; }
    
    currentSetup = setupLibrary[userData.setup] || setupLibrary['patriarca'];

    document.documentElement.style.setProperty('--accent', currentSetup.cor);
    document.body.style.background = `radial-gradient(circle at top, ${currentSetup.cor}22 0%, #000 100%)`;
    
    const nameDisp = document.getElementById('user-name-display');
    if (nameDisp) nameDisp.innerText = userData.nome.toUpperCase();

    forceDateSync();
    updateUI();
    renderTasks();

    if (typeof initNotifications === "function") initNotifications();
};

// Biblioteca de Setups
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