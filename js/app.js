/**
 * MINDSET - CORE ENGINE v1.2
 * Lógica de HUD, Progressão e Calendário Interativo
 */

// 1. GESTÃO DE DADOS (LocalStorage)
let rawData = localStorage.getItem('mindset_data');
let userData = rawData ? JSON.parse(rawData) : null;

// Inicialização de segurança e suporte a versões anteriores
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
let currentViewDate = new Date(); // Controla a navegação visual do calendário

// 2. INICIALIZAÇÃO DO APP
window.onload = () => {
    if (!userData) { 
        window.location.href = 'index.html'; 
        return; 
    }
    
    // Identifica o setup escolhido na biblioteca carregada no HTML
    currentSetup = setupLibrary[userData.setup] || setupLibrary['patriarca'];

    // Aplica a identidade visual (Cores dinâmicas)
    document.documentElement.style.setProperty('--accent', currentSetup.cor);
    document.body.style.background = `radial-gradient(circle at top, ${currentSetup.cor}22 0%, #000 100%)`;
    document.getElementById('user-name-display').innerText = userData.nome.toUpperCase();

    // Sincroniza o dia e renderiza a interface
    forceDateSync();
    updateUI();
    renderTasks();

    // INICIALIZA O MOTOR DE NOTIFICAÇÕES (Função que reside no notifications.js)
    if (typeof initNotifications === "function") {
        initNotifications();
    }
};

// 3. MOTOR DE MISSÕES E DATAS
function forceDateSync() {
    const agora = new Date();
    const hojeStr = agora.getFullYear() + '-' + String(agora.getMonth() + 1).padStart(2, '0') + '-' + String(agora.getDate()).padStart(2, '0');
    
    // Se mudou o dia (ou primeira vez abrindo hoje)
    if (userData.lastDate !== hojeStr) {
        if (userData.lastDate !== "") {
            // Guarda o que foi feito ontem no histórico
            userData.historyTasks[userData.lastDate] = {
                ids: [...userData.dailyTaskIds],
                done: [...userData.completedTodayIds]
            };
            // Se falhou a meta de 3 tarefas, perde o fogo (streak)
            if (userData.tasksDoneToday < 3) userData.streak = 0;
        }

        // Promove as missões de amanhã para hoje ou sorteia novas
        userData.dailyTaskIds = userData.tomorrowTasks.length === 3 ? userData.tomorrowTasks : selectNewTasks();
        userData.tomorrowTasks = selectNewTasks(); // Prepara o próximo dia
        
        // Sorteia uma frase motivacional do setup
        const quotes = currentSetup.quotes || ["Foco no progresso."];
        userData.dailyQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        userData.lastDate = hojeStr;
        userData.tasksDoneToday = 0;
        userData.completedTodayIds = [];
        
        save();
        renderTasks();
        updateUI();
    }
}

function selectNewTasks() {
    let pool = [];
    const lvlLimit = Math.min(userData.level || 1, 10);
    // Cria um conjunto de hábitos baseado no nível atual do usuário
    for (let i = 1; i <= lvlLimit; i++) {
        const habits = currentSetup.habitos[`nivel${i}`];
        if (habits) pool = pool.concat(habits);
    }
    // Embaralha e seleciona 3
    return [...pool].sort(() => 0.5 - Math.random()).slice(0, 3).map(t => t.id);
}

// 4. RENDERIZAÇÃO E INTERAÇÃO
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
            <div>
                <strong>${task.task}</strong><br>
                <small>+${task.xp} XP</small>
            </div>
            <button class="btn-check" onclick="window.completeTask('${task.id}', ${task.xp})"></button>
        `;
        list.appendChild(div);
    });
    document.getElementById('quote-text').innerText = `"${userData.dailyQuote || ''}"`;
}

window.completeTask = (id, xp) => {
    if (userData.completedTodayIds.includes(id)) return;
    
    userData.completedTodayIds.push(id);
    userData.tasksDoneToday++;
    userData.xp += xp;

    // Lógica de Meta Batida
    if (userData.tasksDoneToday === 3) {
        userData.streak++;
        userData.xp += 100; // Bônus de consistência
        if (!userData.completedDays.includes(userData.lastDate)) {
            userData.completedDays.push(userData.lastDate);
        }
        window.showModal("MISSÃO CUMPRIDA", "Meta diária atingida com sucesso!");
    }

    // Lógica de Level Up (Sobe a cada 1000 XP + multiplicador de nível)
    const xpReq = 1000 + (userData.level * 1000);
    if (userData.xp >= xpReq && userData.level < 10) {
        userData.xp -= xpReq;
        userData.level++;
        window.showModal("EVOLUÇÃO", "Subiste de patente! Novo nível: " + userData.level);
    }
    
    save(); 
    updateUI(); 
    renderTasks();
};

function updateUI() {
    const lvl = userData.level;
    const rankNome = (currentSetup.ranks && currentSetup.ranks[lvl-1]) ? currentSetup.ranks[lvl-1] : "INICIANTE";
    
    document.getElementById('user-rank').innerText = rankNome.toUpperCase();
    document.getElementById('level-display').innerText = `LVL ${lvl}`;
    
    const req = 1000 + (lvl * 1000);
    const perc = Math.min(100, (userData.xp / req) * 100);
    document.getElementById('xp-fill').style.width = `${perc}%`;
    document.getElementById('streak-count').innerText = userData.streak;
}

// 5. UTILITÁRIOS E NAVEGAÇÃO
window.toggleMenu = () => document.getElementById('side-menu').classList.toggle('active');
window.closeModal = () => document.getElementById('modal-overlay').style.display = 'none';

window.showSection = (id) => {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`section-${id}`);
    if (target) target.classList.add('active');
    
    if (id === 'history') window.renderCalendar();
    window.toggleMenu();
};

window.confirmReset = () => {
    window.showModal("REINICIAR SISTEMA?", "O teu nível, XP e histórico serão apagados permanentemente.");
    document.getElementById('modal-buttons').innerHTML = `
        <button class="btn-modal" style="background:#ff3b3b; color:white;" onclick="localStorage.clear(); window.location.href='index.html'">REINICIAR TUDO</button>
        <button class="btn-modal" onclick="window.closeModal()" style="margin-top:10px; background:#222;">CANCELAR</button>
    `;
};

window.copyPix = () => {
    const key = document.getElementById('pix-key').innerText;
    navigator.clipboard.writeText(key).then(() => {
        window.showModal("COPIADO", "Chave PIX copiada para a área de transferência.");
    });
};

// 6. LÓGICA DO CALENDÁRIO
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
    
    const primeiroDiaNum = new Date(y, m, 1).getDay();
    const ultimoDiaNum = new Date(y, m + 1, 0).getDate();

    // Espaços vazios no início do mês
    for (let i = 0; i < primeiroDiaNum; i++) grid.innerHTML += `<div class="calendar-day"></div>`;

    // Dias do mês
    for (let d = 1; d <= ultimoDiaNum; d++) {
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
            html += `<div class="history-task" style="border-left: 2px solid ${ok ? '#28a745' : '#dc3545'}; padding-left:10px; margin-bottom:5px;">
                        <span>${ok ? '✓' : '✕'}</span> ${h ? h.task : 'Missão Antiga'}
                     </div>`;
        });
    } else {
        html += `<p style="font-size:0.8rem; opacity:0.4">Sem registos para este dia.</p>`;
    }
    cont.innerHTML = html;
    cont.style.display = 'block';
};

window.showModal = (title, msg) => {
    const m = document.getElementById('modal-overlay');
    m.style.display = 'flex';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = msg;
    document.getElementById('modal-buttons').innerHTML = `<button class="btn-modal" onclick="window.closeModal()">OK</button>`;
};

function save() { localStorage.setItem('mindset_data', JSON.stringify(userData)); }

// MAPA DA BIBLIOTECA DE SETUPS
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
