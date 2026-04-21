/**
 * MINDSET - CORE ENGINE v3.6
 * HUD, Calendário, Sync Cloud & OneSignal Integration (com Debounce)
 */

// 1. ESTADO GLOBAL
let userData = null;
let currentSetup = null;
let currentViewDate = new Date();
let debounceTimer; // Trava de segurança para o OneSignal

// 2. CARREGAMENTO E SEGURANÇA
function loadUserData() {
    try {
        const rawData = localStorage.getItem('mindset_data');
        if (rawData) {
            userData = JSON.parse(rawData);
            // Sanitização de campos obrigatórios
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
        } else {
            window.location.href = 'index.html';
        }
    } catch (e) {
        console.error("Erro Crítico LocalStorage:", e);
        window.location.href = 'index.html';
    }
}

// --- 3. MOTOR DE PROGRESSÃO ---
window.completeTask = (id, xp) => {
    const isAlreadyDone = userData.completedTodayIds.includes(id);
    
    if (!isAlreadyDone) {
        userData.completedTodayIds.push(id);
        userData.tasksDoneToday++;
        userData.xp += xp;
        if (userData.tasksDoneToday === 3) {
            userData.streak++;
            if (!userData.completedDays.includes(userData.lastDate)) {
                userData.completedDays.push(userData.lastDate);
            }
            window.showModal("META ATINGIDA", `Sequência de ${userData.streak} dias!`);
        }
    } else {
        if (userData.tasksDoneToday === 3) {
            userData.streak = Math.max(0, userData.streak - 1);
            userData.completedDays = userData.completedDays.filter(d => d !== userData.lastDate);
        }
        userData.completedTodayIds = userData.completedTodayIds.filter(taskId => taskId !== id);
        userData.tasksDoneToday--;
        userData.xp = Math.max(0, userData.xp - xp);
    }

    handleLeveling(); 
    save(); 
    updateUI(); 
    renderTasks(); 
    syncToFirebase();
    
    // --- LÓGICA DE DEBOUNCE (NOVO) ---
    // Aguarda 2 segundos de inatividade antes de enviar as tags para evitar erro de colisão
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        if (typeof sendOneSignalTags === "function") {
            console.log("🚀 Sincronizando estado consolidado com OneSignal...");
            sendOneSignalTags(userData);
        }
    }, 2000);
};

function handleLeveling() {
    let xpTarget = 1000 + (userData.level * 1000);
    if (userData.xp >= xpTarget && userData.level < 10) {
        userData.xp -= xpTarget; 
        userData.level++;
        window.showModal("EVOLUÇÃO", `Nova Patente: ${currentSetup.ranks[userData.level-1]}`);
        
        // Sincroniza novo nível
        if (typeof sendOneSignalTags === "function") {
            sendOneSignalTags(userData);
        }
    }
}

// --- 4. CALENDÁRIO & HISTÓRICO ---
window.changeMonth = (dir) => {
    currentViewDate.setMonth(currentViewDate.getMonth() + dir);
    renderCalendar();
};

function renderCalendar() {
    const container = document.getElementById('calendar-area');
    if (!container) return;

    const y = currentViewDate.getFullYear();
    const m = currentViewDate.getMonth();
    const meses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];

    container.innerHTML = `
        <div class="calendar-header">
            <button onclick="changeMonth(-1)">❮</button>
            <h4 id="calendar-month-year">${meses[m]} ${y}</h4>
            <button onclick="changeMonth(1)">❯</button>
        </div>
        <div class="calendar-weekdays">
            <div>D</div><div>S</div><div>T</div><div>Q</div><div>Q</div><div>S</div><div>S</div>
        </div>
        <div id="calendar-days" class="calendar-grid"></div>
    `;

    const grid = document.getElementById('calendar-days');
    const primeiroDia = new Date(y, m, 1).getDay();
    const ultimoDia = new Date(y, m + 1, 0).getDate();

    for (let i = 0; i < primeiroDia; i++) grid.innerHTML += `<div></div>`;

    for (let d = 1; d <= ultimoDia; d++) {
        const dStr = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const isDone = userData.completedDays.includes(dStr);
        const isToday = dStr === userData.lastDate;
        
        const el = document.createElement('div');
        el.className = `calendar-day clickable ${isDone ? 'completed' : ''} ${isToday ? 'today' : ''}`;
        el.innerText = d;
        el.onclick = () => showDayDetail(dStr);
        grid.appendChild(el);
    }
}

function showDayDetail(dateStr) {
    const detailContainer = document.getElementById('day-detail-container');
    if (!detailContainer) return;
    detailContainer.style.display = 'block';
    
    const [y, m, d] = dateStr.split('-');
    detailContainer.innerHTML = `<h3 class="section-title">DETALHES: ${d}/${m}/${y}</h3>`;

    const allHabits = Object.values(currentSetup.habitos).flat();
    const hoje = new Date(userData.lastDate);
    hoje.setHours(0,0,0,0);
    const clicado = new Date(dateStr);
    clicado.setHours(0,0,0,0);

    if (dateStr === userData.lastDate) {
        userData.dailyTaskIds.forEach(id => {
            const task = allHabits.find(h => h.id === id);
            const done = userData.completedTodayIds.includes(id);
            detailContainer.innerHTML += renderHistoryItem(task.task, done ? 'concluido' : 'pendente');
        });
    } else if (clicado.getTime() === hoje.getTime() + 86400000) {
        detailContainer.innerHTML += `<p style="text-align:center; font-size:0.7rem; color:var(--accent); margin-bottom:10px;">SISTEMA PREVÊ PARA AMANHÃ:</p>`;
        userData.tomorrowTasks.forEach(id => {
            const task = allHabits.find(h => h.id === id);
            detailContainer.innerHTML += renderHistoryItem(task.task, 'previsto');
        });
    } else if (userData.historyTasks[dateStr]) {
        const dayData = userData.historyTasks[dateStr];
        dayData.ids.forEach(id => {
            const task = allHabits.find(h => h.id === id);
            const done = dayData.done.includes(id);
            detailContainer.innerHTML += renderHistoryItem(task.task, done ? 'concluido' : 'falhou');
        });
    } else {
        detailContainer.innerHTML += `<p style="text-align:center; opacity:0.5;">Sem registros no sistema.</p>`;
    }
}

function renderHistoryItem(name, status) {
    const labels = { 'concluido': 'CONCLUÍDA', 'falhou': 'FALHA NO DEVER', 'pendente': 'EM ANDAMENTO', 'previsto': 'PREVISTO' };
    return `<div class="history-task status-${status}"><span>${name}</span><small>${labels[status]}</small></div>`;
}

// --- 5. NAVEGAÇÃO & UI ---
window.toggleMenu = () => {
    const menu = document.getElementById('side-menu');
    if (menu) menu.classList.toggle('active');
};

window.showSection = (id) => {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`section-${id}`);
    if (target) target.classList.add('active');
    
    if (id === 'history') {
        renderCalendar();
        showDayDetail(userData.lastDate);
    }
    window.toggleMenu();
};

function renderTasks() {
    const list = document.getElementById('task-list');
    if (!list || !currentSetup) return;
    list.innerHTML = "";
    
    const allHabits = Object.values(currentSetup.habitos).flat();
    const todayHabits = allHabits.filter(h => userData.dailyTaskIds.includes(h.id));
    
    todayHabits.forEach(task => {
        const isDone = userData.completedTodayIds.includes(task.id);
        const div = document.createElement('div');
        div.className = `task-item ${isDone ? 'completed' : ''}`;
        div.innerHTML = `
            <div class="task-info"><strong>${task.task}</strong><br><small>${isDone ? 'CONCLUÍDO' : '+' + task.xp + ' XP'}</small></div>
            <button class="btn-check" onclick="completeTask('${task.id}', ${task.xp})">${isDone ? '✓' : ''}</button>
        `;
        list.appendChild(div);
    });
    const quoteEl = document.getElementById('quote-text');
    if(quoteEl) quoteEl.innerText = `"${userData.dailyQuote}"`;
}

function updateUI() {
    if (!userData || !currentSetup) return;
    const lvl = userData.level;
    document.getElementById('user-rank').innerText = (currentSetup.ranks[lvl-1] || "INICIANTE").toUpperCase();
    document.getElementById('user-name-display').innerText = userData.nome.toUpperCase();
    document.getElementById('level-display').innerText = `LVL ${lvl}`;
    document.getElementById('streak-count').innerText = userData.streak;
    
    const req = 1000 + (lvl * 1000);
    const xpFill = document.getElementById('xp-fill');
    if(xpFill) xpFill.style.width = `${Math.min(100, (userData.xp / req) * 100)}%`;
    
    document.documentElement.style.setProperty('--accent', currentSetup.cor || '#007bff');
}

// --- 6. UTILITÁRIOS & MODAIS ---
window.copyPix = () => {
    const pixElement = document.getElementById('pix-key');
    if (pixElement) {
        const pixText = pixElement.innerText.trim();
        navigator.clipboard.writeText(pixText).then(() => {
            window.showModal("SUCESSO", "Código PIX copiado!");
        });
    }
};

window.showModal = (title, msg) => {
    const m = document.getElementById('modal-overlay');
    if (!m) return;
    m.style.display = 'flex';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = msg;
    document.getElementById('modal-buttons').innerHTML = `<button class="btn-modal" onclick="window.closeModal()">OK</button>`;
};

window.closeModal = () => document.getElementById('modal-overlay').style.display = 'none';

window.confirmReset = () => {
    if (confirm("Resetar sistema? Isso apagará o progresso local.")) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
};

// --- 7. LÓGICA DE DATAS & SYNC ---
function save() { 
    localStorage.setItem('mindset_data', JSON.stringify(userData));
}

async function syncToFirebase() {
    if (typeof db === 'undefined' || !userData || !userData.nome) return;
    const userId = userData.nome.toLowerCase().trim().replace(/\s/g, '_');
    try {
        await db.collection("usuarios").doc(userId).set({ 
            ...userData, 
            ultimaSincronizacao: firebase.firestore.FieldValue.serverTimestamp() 
        }, { merge: true });
    } catch (e) { console.warn("Firebase Offline"); }
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

function forceDateSync() {
    const agora = new Date();
    const hojeStr = agora.getFullYear() + '-' + String(agora.getMonth() + 1).padStart(2, '0') + '-' + String(agora.getDate()).padStart(2, '0');
    
    if (userData.lastDate !== hojeStr) {
        if (userData.lastDate !== "") {
            userData.historyTasks[userData.lastDate] = {
                ids: [...userData.dailyTaskIds],
                done: [...userData.completedTodayIds]
            };
            if (userData.tasksDoneToday < 3) {
                userData.streak = 0;
                userData.xp = Math.max(0, userData.xp - 500);
            }
        }

        if (userData.tomorrowTasks && userData.tomorrowTasks.length === 3) {
            userData.dailyTaskIds = userData.tomorrowTasks;
        } else {
            userData.dailyTaskIds = selectNewTasks();
        }

        userData.tomorrowTasks = selectNewTasks();
        userData.dailyQuote = (currentSetup.quotes || ["Foco."])[Math.floor(Math.random() * (currentSetup.quotes || ["Foco."]).length)];
        userData.lastDate = hojeStr;
        userData.tasksDoneToday = 0;
        userData.completedTodayIds = [];
        
        save();

        if (typeof sendOneSignalTags === "function") {
            sendOneSignalTags(userData);
        }
    }
}

// --- 8. INICIALIZAÇÃO ---
window.onload = () => {
    loadUserData();
    if (!userData) return;

    setTimeout(() => {
        const setupLib = {
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

        currentSetup = setupLib[userData.setup] || setupLib['patriarca'];
        
        if (currentSetup) {
            forceDateSync();
            updateUI();
            renderTasks();
            syncToFirebase();

            if (typeof sendOneSignalTags === "function") {
                sendOneSignalTags(userData);
            }
        }
    }, 800);
};
