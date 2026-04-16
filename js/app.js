/**
 * MINDSET - CORE ENGINE v1.0
 * Lógica de HUD, Progressão e Calendário Interativo
 */

// 1. GESTÃO DE DADOS (LocalStorage)
let rawData = localStorage.getItem('mindset_data');
let userData = rawData ? JSON.parse(rawData) : null;

// Inicialização de segurança para novos usuários ou dados incompletos
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

// 2. FUNÇÕES DE NAVEGAÇÃO E MENU
window.toggleMenu = () => {
    document.getElementById('side-menu').classList.toggle('active');
};

window.closeModal = () => {
    document.getElementById('modal-overlay').style.display = 'none';
};

window.showSection = (id) => {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`section-${id}`);
    if (target) target.classList.add('active');
    
    if (id === 'history') window.renderCalendar();
    window.toggleMenu();
};

window.confirmReset = () => {
    window.showModal("REINICIAR SISTEMA?", "Seu nível, XP e todo o histórico de vitórias serão apagados permanentemente.");
    document.getElementById('modal-buttons').innerHTML = `
        <button class="btn-modal" style="background:#ff3b3b; color:white; margin-top:0" onclick="localStorage.clear(); window.location.href='index.html'">REINICIAR TUDO</button>
        <button class="btn-modal" onclick="window.closeModal()" style="margin-top:10px; background:#222; color:#fff">CANCELAR</button>
    `;
};

window.copyPix = () => {
    const key = document.getElementById('pix-key').innerText;
    navigator.clipboard.writeText(key).then(() => {
        window.showModal("COPIADO", "Chave PIX copiada para a área de transferência.");
    });
};

// 3. MOTOR DE MISSÕES E DATAS
function forceDateSync() {
    const agora = new Date();
    const hojeStr = agora.getFullYear() + '-' + String(agora.getMonth() + 1).padStart(2, '0') + '-' + String(agora.getDate()).padStart(2, '0');
    
    // Se mudou o dia (ou primeiro acesso)
    if (userData.lastDate !== hojeStr) {
        // Salva o dia que passou no histórico antes de resetar
        if (userData.lastDate !== "") {
            userData.historyTasks[userData.lastDate] = {
                ids: [...userData.dailyTaskIds],
                done: [...userData.completedTodayIds]
            };
            // Se não bateu a meta de 3 tarefas, quebra o streak
            if (userData.tasksDoneToday < 3) userData.streak = 0;
        }

        // Transforma o "Amanhã" em "Hoje" e sorteia um novo "Amanhã"
        userData.dailyTaskIds = userData.tomorrowTasks.length === 3 ? userData.tomorrowTasks : selectNewTasks();
        userData.tomorrowTasks = selectNewTasks();
        
        // Sorteia a frase do dia baseada no setup
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
    for (let i = 1; i <= lvlLimit; i++) {
        const habits = currentSetup.habitos[`nivel${i}`];
        if (habits) pool = pool.concat(habits);
    }
    // Sorteia 3 sem repetir
    return [...pool].sort(() => 0.5 - Math.random()).slice(0, 3).map(t => t.id);
}

// 4. RENDERIZAÇÃO DA INTERFACE
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

    // Se completou as 3 missões
    if (userData.tasksDoneToday === 3) {
        userData.streak++;
        userData.xp += 100; // Bônus de meta diária
        if (!userData.completedDays.includes(userData.lastDate)) {
            userData.completedDays.push(userData.lastDate);
        }
        window.showModal("MISSÃO CUMPRIDA", "Você atingiu a meta diária e ganhou bônus de XP!");
    }

    // Lógica de Level Up
    const xpNecessario = 1000 + (userData.level * 1000);
    if (userData.xp >= xpNecessario && userData.level < 10) {
        userData.xp -= xpNecessario;
        userData.level++;
        window.showModal("EVOLUÇÃO", "Sua patente subiu para: " + currentSetup.ranks[userData.level-1]);
    }
    
    save(); 
    updateUI(); 
    renderTasks();
};

// 5. CALENDÁRIO INTERATIVO
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
    const hojeObj = new Date(); hojeObj.setHours(0,0,0,0);

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
    const agora = new Date(); agora.setHours(0,0,0,0);
    
    // Calcular data de amanhã para comparação
    const amanhaObj = new Date(agora); amanhaObj.setDate(amanhaObj.getDate() + 1);
    const amanhaStr = `${amanhaObj.getFullYear()}-${String(amanhaObj.getMonth()+1).padStart(2,'0')}-${String(amanhaObj.getDate()).padStart(2,'0')}`;

    let html = `<h4 class="section-title">DETALHES: ${dateStr.split('-').reverse().join('/')}</h4>`;
    let tasks = [], done = [];

    if (dateStr === userData.lastDate) {
        tasks = userData.dailyTaskIds; done = userData.completedTodayIds;
    } else if (dateStr === amanhaStr) {
        tasks = userData.tomorrowTasks;
        html += `<p style="color:var(--accent); font-size:0.7rem; margin-bottom:10px;">MISSÕES PROGRAMADAS</p>`;
    } else if (userData.historyTasks[dateStr]) {
        tasks = userData.historyTasks[dateStr].ids;
        done = userData.historyTasks[dateStr].done;
    }

    const all = Object.values(currentSetup.habitos).flat();
    if (tasks.length) {
        tasks.forEach(id => {
            const h = all.find(x => x.id === id);
            const ok = done.includes(id);
            const dParts = dateStr.split('-');
            const dataFoco = new Date(dParts[0], dParts[1]-1, dParts[2]);
            const isFuture = dataFoco >= agora;
            
            let color = ok ? "var(--success)" : (isFuture ? "var(--warning)" : "var(--danger)");
            let icon = ok ? "✓" : (isFuture ? "○" : "✕");

            html += `<div class="history-task" style="border-left: 2px solid ${color}; padding-left:12px; margin-bottom:8px;">
                        <span style="color:${color}; font-weight:bold; margin-right:10px;">${icon}</span> 
                        <span>${h ? h.task : 'Missão Antiga'}</span>
                     </div>`;
        });
    } else {
        html += `<p style="font-size:0.8rem; opacity:0.4">Nenhuma missão registrada.</p>`;
    }
    cont.innerHTML = html;
    cont.style.display = 'block';
    cont.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// 6. INICIALIZAÇÃO DO APP
window.onload = () => {
    if (!userData) { window.location.href = 'index.html'; return; }
    
    currentSetup = setupLibrary[userData.setup] || setupLibrary['patriarca'];

    // Aplicar cor do setup
    document.documentElement.style.setProperty('--accent', currentSetup.cor);
    document.body.style.background = `radial-gradient(circle at top, ${currentSetup.cor}22 0%, #000 100%)`;
    document.getElementById('user-name-display').innerText = userData.nome.toUpperCase();

    forceDateSync();
    updateUI();
    renderTasks();
};

function updateUI() {
    const lvl = userData.level;
    document.getElementById('user-rank').innerText = (currentSetup.ranks[lvl-1] || "INICIANTE").toUpperCase();
    document.getElementById('level-display').innerText = `LVL ${lvl}`;
    const req = 1000 + (lvl * 1000);
    document.getElementById('xp-fill').style.width = `${(userData.xp / req) * 100}%`;
    document.getElementById('streak-count').innerText = userData.streak;
}

window.showModal = (title, msg) => {
    const m = document.getElementById('modal-overlay');
    m.style.display = 'flex';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = msg;
    document.getElementById('modal-buttons').innerHTML = `<button class="btn-modal" onclick="window.closeModal()">OK</button>`;
};

function save() { localStorage.setItem('mindset_data', JSON.stringify(userData)); }

// Biblioteca de Setups (Sincronizada com os arquivos carregados no HTML)
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
