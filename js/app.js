/**
 * MindSet - Lógica de Configuração Inicial e Instalação PWA
 * v2.8 - RESTAURAÇÃO TOTAL (Spotlight, Demo Guide, Carrossel & Cloud Sync)
 */

const setups = {
    ele: [
        { id: 'patriarca', nome: 'Patriarca', desc: 'Liderança, provimento e proteção da linhagem.', cor: '#002b5c' },
        { id: 'cavalheiro', nome: 'Cavalheiro', desc: 'Etiqueta, honra e domínio social absoluto.', cor: '#3d2b1f' },
        { id: 'devoto', nome: 'Devoto', desc: 'Conexão espiritual e disciplina de fé diária.', cor: '#4a0e0e' },
        { id: 'ceo_ele', nome: 'CEO', desc: 'Foco em resultados e gestão implacável.', cor: '#1a1a1a' },
        { id: 'militar_ele', nome: 'Militar', desc: 'Rigor tático e disciplina inabalável.', cor: '#2d3b2d' },
        { id: 'investidor', nome: 'Investidor', desc: 'Multiplicação de capital e análise de risco.', cor: '#1e4d2b' },
        { id: 'zen', nome: 'Modo Zen', desc: 'Presença, controle emocional e foco no agora.', cor: '#1a4a44' },
        { id: 'estrategista', nome: 'Estrategista', desc: 'Pensamento analítico e visão de futuro.', cor: '#1c2e3d' },
        { id: 'atleta_ele', nome: 'Atleta de Elite', desc: 'Performance máxima e superação de limites.', cor: '#d45d00' },
        { id: 'minimalista', nome: 'Minimalista', desc: 'Clareza através da remoção do excesso.', cor: '#333333' }
    ],
    ela: [
        { id: 'matriarca', nome: 'Matriarca', desc: 'Gestão emocional e sabedoria central da família.', cor: '#e35336' },
        { id: 'dama', nome: 'Dama', desc: 'Elegância, postura e influência sutil.', cor: '#ede0be' },
        { id: 'devota', nome: 'Devota', desc: 'Piedade, fortaleza e disciplina espiritual.', cor: '#5c2d5c' },
        { id: 'ceo_ela', nome: 'CEO', desc: 'Liderança corporativa e visão estratégica.', cor: '#1a1a1a' },
        { id: 'militar_ela', nome: 'Militar', desc: 'Rigor, ordem e comando com disciplina.', cor: '#2d3b2d' },
        { id: 'investidora', nome: 'Investidora', desc: 'Independência financeira e patrimônio.', cor: '#1e4d2b' },
        { id: 'zen', nome: 'Modo Zen', desc: 'Equilíbrio interior e clareza mental.', cor: '#1a4a44' },
        { id: 'estrategista', nome: 'Estrategista', desc: 'Análise fria e planejamento de futuro.', cor: '#1c2e3d' },
        { id: 'atleta_ela', nome: 'Atleta de Elite', desc: 'Desempenho e alta performance.', cor: '#d45d00' },
        { id: 'minimalista', nome: 'Minimalista', desc: 'Estética limpa e foco no essencial.', cor: '#333333' }
    ]
};

let currentIndex = 1; 
let startX = 0;
let isMoving = false;
let currentSetupId = "";
let selectedGender = "ele";
let loopItems = [];
let userSelectedAge = 15;
let deferredPrompt; 

const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('mindset_chosen')) {
        window.location.href = 'app.html';
        return;
    }
    initAgeCarousel();
    setupGenderSync();
    initPwaInstallLogic();
});

// --- 1. LÓGICA DE INSTALAÇÃO PWA ---
function initPwaInstallLogic() {
    const container = document.getElementById('pwa-install-container');
    const btnInstall = document.getElementById('btn-do-install');
    const btnLater = document.getElementById('btn-later');

    if (!container) return;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (!window.matchMedia('(display-mode: standalone)').matches) {
            container.classList.add('visible');
        }
    });

    btnInstall.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') container.classList.remove('visible');
            deferredPrompt = null;
        }
    });

    btnLater.addEventListener('click', (e) => {
        e.stopPropagation();
        container.classList.add('minimized');
    });
}

// --- 2. SPOTLIGHT (ONBOARDING) ---
function startOnboarding() {
    document.getElementById('step-welcome').classList.remove('active');
    document.getElementById('step-registration').classList.add('active');
    runSpotlight();
}

function runSpotlight() {
    const overlay = document.getElementById('spotlight-overlay');
    const targets = ['group-name', 'group-gender', 'group-age'];
    if (!overlay) return;
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    let step = 0;

    function nextSpot() {
        if (step >= targets.length) {
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; overlay.style.clipPath = 'none'; }, 600);
            return;
        }
        const el = document.getElementById(targets[step]);
        if (el) {
            const rect = el.getBoundingClientRect();
            const p = 10;
            const t = rect.top - p, l = rect.left - p, r = rect.right + p, b = rect.bottom + p;
            overlay.style.clipPath = `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%, ${l}px ${t}px, ${r}px ${t}px, ${r}px ${b}px, ${l}px ${b}px, ${l}px ${t}px)`;
        }
        step++;
        setTimeout(nextSpot, 1200); 
    }
    nextSpot();
}

// --- 3. CARROSSEL DE IDADE ---
function initAgeCarousel() {
    const track = document.getElementById('age-carousel-track');
    if (!track) return;
    track.innerHTML = "";
    for (let i = 15; i <= 65; i++) {
        const span = document.createElement('div');
        span.className = 'age-number';
        span.innerText = i;
        span.dataset.age = i;
        track.appendChild(span);
    }
    setTimeout(() => {
        const firstNum = track.querySelector('[data-age="15"]');
        if (firstNum) firstNum.classList.add('selected');
    }, 100);

    track.addEventListener('scroll', () => {
        const center = track.getBoundingClientRect().left + track.getBoundingClientRect().width / 2;
        const numbers = track.querySelectorAll('.age-number');
        let closest = null;
        let minDistance = Infinity;

        numbers.forEach(num => {
            const numCenter = num.getBoundingClientRect().left + num.getBoundingClientRect().width / 2;
            const distance = Math.abs(center - numCenter);
            if (distance < minDistance) { minDistance = distance; closest = num; }
            num.classList.remove('selected');
        });
        if (closest) { closest.classList.add('selected'); userSelectedAge = closest.dataset.age; }
    });
}

function setupGenderSync() {
    const toggle = document.getElementById('gender-toggle');
    const regSection = document.getElementById('step-registration');
    if (toggle && regSection) {
        toggle.addEventListener('change', () => {
            selectedGender = toggle.checked ? "ela" : "ele";
            regSection.classList.remove('gender-ela', 'gender-ele');
            regSection.classList.add(`gender-${selectedGender}`);
        });
    }
}

// --- 4. NAVEGAÇÃO E CARROSSEL ---
function nextStep() {
    const nome = document.getElementById('user-name').value.trim();
    if (!nome) { showModal('AVISO', 'Por favor, digite seu nome para continuar.'); return; }
    document.getElementById('welcome-name').innerText = nome.toUpperCase();
    renderCarousel();
    document.getElementById('step-registration').classList.remove('active');
    document.getElementById('step-carousel').classList.add('active');
    setTimeout(runDemoGuide, 800);
}

function prevStep() {
    body.style.background = "#000000";
    document.getElementById('step-carousel').classList.remove('active');
    document.getElementById('step-registration').classList.add('active');
}

function renderCarousel() {
    const list = document.getElementById('carousel-list');
    const items = setups[selectedGender];
    if (!list) return;
    loopItems = [items[items.length - 1], ...items, items[0]];
    currentIndex = 1;
    list.innerHTML = "";
    loopItems.forEach(s => {
        const card = document.createElement('div');
        card.className = 'setup-card';
        card.innerHTML = `<h2>${s.nome}</h2><img src="assets/${s.id}.png" onerror="this.src='https://via.placeholder.com/220/222/fff?text=${s.nome}'"><p>${s.desc}</p>`;
        list.appendChild(card);
    });
    const wrapper = document.getElementById('step-carousel');
    wrapper.ontouchstart = e => { startX = e.touches[0].clientX; };
    wrapper.ontouchend = e => {
        if (isMoving) return;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { diff > 0 ? currentIndex++ : currentIndex--; updateCarousel(list); }
    };
    updatePositionInstant(list);
}

function updateCarousel(list) {
    isMoving = true;
    list.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    list.style.transform = `translateX(-${currentIndex * 100}vw)`;
    body.style.background = `radial-gradient(circle at center, ${loopItems[currentIndex].cor} 0%, #000000 100%)`;
    currentSetupId = loopItems[currentIndex].id;
    list.addEventListener('transitionend', () => {
        if (currentIndex === 0) currentIndex = loopItems.length - 2;
        else if (currentIndex === loopItems.length - 1) currentIndex = 1;
        updatePositionInstant(list);
        isMoving = false;
    }, { once: true });
}

function updatePositionInstant(list) {
    list.style.transition = "none";
    list.style.transform = `translateX(-${currentIndex * 100}vw)`;
    body.style.background = `radial-gradient(circle at center, ${loopItems[currentIndex].cor} 0%, #000000 100%)`;
    currentSetupId = loopItems[currentIndex].id;
}

// --- 5. MOTOR DO DEMO GUIDE (BOLINHA) ---
function runDemoGuide() {
    const guide = document.getElementById('demo-guide');
    const list = document.getElementById('carousel-list');
    const overlay = document.getElementById('demo-overlay');
    if (!guide || !list || !overlay) return;

    overlay.style.display = 'block';
    guide.style.display = 'block';
    guide.style.left = "50%";
    guide.style.opacity = "1";

    setTimeout(() => {
        overlay.style.opacity = "0.6"; 
        guide.style.animation = "shrinkToDot 1s forwards";
    }, 50);

    setTimeout(() => {
        guide.style.transition = "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
        list.style.transition = "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
        
        guide.style.left = "85%";
        list.style.transform = `translateX(-${(currentIndex * 100) - 25}vw)`;

        setTimeout(() => {
            guide.style.left = "15%";
            list.style.transform = `translateX(-${(currentIndex * 100) + 25}vw)`;
            
            setTimeout(() => {
                guide.style.left = "50%";
                list.style.transform = `translateX(-${currentIndex * 100}vw)`;
                
                setTimeout(() => {
                    overlay.style.opacity = "0";
                    guide.style.opacity = "0";
                    setTimeout(() => { overlay.style.display = 'none'; guide.style.display = 'none'; }, 600);
                }, 800);
            }, 1000);
        }, 1000);
    }, 1300);
}

// --- 6. MODAL & FINALIZAÇÃO ---
function showModal(title, message, isConfirm = false, onConfirm = null) {
    const modal = document.getElementById('modal-overlay');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = message;
    const btnCont = document.getElementById('modal-buttons');
    btnCont.innerHTML = '';
    
    const btnOk = document.createElement('button');
    btnOk.innerText = isConfirm ? 'CONFIRMAR' : 'ENTENDIDO';
    btnOk.className = 'btn-modal';
    btnOk.onclick = () => { modal.style.display = 'none'; if(onConfirm) onConfirm(); };
    btnCont.appendChild(btnOk);

    if (isConfirm) {
        const btnCncl = document.createElement('button');
        btnCncl.innerText = 'CANCELAR';
        btnCncl.className = 'btn-modal-cancel';
        btnCncl.onclick = () => modal.style.display = 'none';
        btnCont.appendChild(btnCncl);
    }
    modal.style.display = 'flex';
}

async function syncInitialSetupToFirebase(data) {
    if (typeof db === 'undefined') return;
    const userId = data.nome.toLowerCase().trim().replace(/\s/g, '_');
    try {
        await db.collection("usuarios").doc(userId).set({
            ...data,
            ultimaSincronizacao: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (e) { console.error("Firebase Sync Error:", e); }
}

function confirmSelection() {
    showModal('CONFIGURAR MENTE?', 'Sua jornada mental começa agora.', true, async () => {
        const data = { 
            nome: document.getElementById('user-name').value, 
            setup: currentSetupId, 
            genero: selectedGender, 
            idade: userSelectedAge,
            level: 1, xp: 0, streak: 0
        };
        localStorage.setItem('mindset_chosen', currentSetupId);
        localStorage.setItem('mindset_data', JSON.stringify(data));
        
        await syncInitialSetupToFirebase(data);
        if (typeof sendOneSignalTags === "function") await sendOneSignalTags(data);
        
        setTimeout(() => { window.location.href = 'app.html'; }, 1500);
    });
}
