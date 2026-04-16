/**
 * MindSet - Lógica de Configuração Inicial
 * Contém: Carrossel Infinito, Seletor de Idade com Magnetismo,
 * Spotlight, Demo Visual e Sistema de Modais.
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

// Variáveis de Estado Global
let currentIndex = 1; 
let startX = 0;
let isMoving = false;
let currentSetupId = "";
let selectedGender = "ele";
let loopItems = [];
let userSelectedAge = 15;

const body = document.body;

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Se já configurado, pula para o app
    if (localStorage.getItem('mindset_chosen')) {
        window.location.href = 'app.html';
        return;
    }
    
    initAgeCarousel();
    setupGenderSync();
    
    // Estado inicial: Masculino Ativo
    const regSection = document.getElementById('step-registration');
    if (regSection) regSection.classList.add('gender-ele');
});

// --- 1. SPOTLIGHT INICIAL (REGISTRO) ---
function startOnboarding() {
    const welcome = document.getElementById('step-welcome');
    const registration = document.getElementById('step-registration');
    
    if (welcome) welcome.classList.remove('active');
    if (registration) registration.classList.add('active');
    
    runSpotlight();
}

function runSpotlight() {
    const overlay = document.getElementById('spotlight-overlay');
    const targets = ['group-name', 'group-gender', 'group-age'];
    
    if (!overlay) return;
    
    overlay.style.display = 'block';
    let step = 0;

    function nextSpot() {
        if (step >= targets.length) {
            overlay.style.display = 'none';
            overlay.style.clipPath = 'none';
            return;
        }
        
        const el = document.getElementById(targets[step]);
        if (el) {
            const rect = el.getBoundingClientRect();
            const p = 8; // padding
            const t = rect.top - p, l = rect.left - p, r = rect.right + p, b = rect.bottom + p;
            overlay.style.clipPath = `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%, ${l}px ${t}px, ${r}px ${t}px, ${r}px ${b}px, ${l}px ${b}px, ${l}px ${t}px)`;
        }
        
        step++;
        setTimeout(nextSpot, 2000);
    }
    nextSpot();
}

// --- 2. CARROSSEL DE IDADE (MAGNETISMO) ---
function initAgeCarousel() {
    const track = document.getElementById('age-carousel-track');
    const container = track ? track.parentElement : null;
    
    if (!track || !container) return;
    
    // Limpa e gera números de 15 a 65
    track.innerHTML = "";
    for (let i = 15; i <= 65; i++) {
        const span = document.createElement('div');
        span.className = 'age-number';
        span.innerText = i;
        span.dataset.age = i;
        track.appendChild(span);
    }

    // Seleção inicial do 15
    setTimeout(() => {
        const firstNum = track.querySelector('[data-age="15"]');
        if (firstNum) firstNum.classList.add('selected');
        track.scrollLeft = 0;
    }, 100);

    track.addEventListener('scroll', () => {
        const containerRect = track.getBoundingClientRect();
        const center = containerRect.left + containerRect.width / 2;
        const numbers = track.querySelectorAll('.age-number');
        
        let closest = null;
        let minDistance = Infinity;

        numbers.forEach(num => {
            const numRect = num.getBoundingClientRect();
            const numCenter = numRect.left + numRect.width / 2;
            const distance = Math.abs(center - numCenter);
            
            if (distance < minDistance) { 
                minDistance = distance; 
                closest = num; 
            }
            num.classList.remove('selected');
        });

        if (closest) { 
            closest.classList.add('selected'); 
            userSelectedAge = closest.dataset.age; 
        }
    });
}

// --- 3. SINCRONIZAÇÃO DE GÊNERO ---
function setupGenderSync() {
    const toggle = document.getElementById('gender-toggle');
    const regSection = document.getElementById('step-registration');
    
    if (!toggle || !regSection) return;

    toggle.addEventListener('change', () => {
        selectedGender = toggle.checked ? "ela" : "ele";
        regSection.classList.remove('gender-ela', 'gender-ele');
        regSection.classList.add(`gender-${selectedGender}`);
    });
}

// --- 4. NAVEGAÇÃO E CARROSSEL DE SETUPS ---
function nextStep() {
    const nameInput = document.getElementById('user-name');
    const nome = nameInput ? nameInput.value.trim() : "";
    
    if (!nome) { 
        showModal('COMO PODEMOSTE CHAMAR?', 'Por favor, nos diga seu nome, apelido ou como prefefe que te chamemos, para iniciar a configuração.'); 
        return; 
    }
    
    const welcomeName = document.getElementById('welcome-name');
    if (welcomeName) welcomeName.innerText = nome.toUpperCase();
    
    renderCarousel();
    
    document.getElementById('step-registration').classList.remove('active');
    document.getElementById('step-carousel').classList.add('active');
    
    setTimeout(runDemoGuide, 600);
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

    // Lógica de loop infinito
    loopItems = [items[items.length - 1], ...items, items[0]];
    currentIndex = 1;
    list.innerHTML = "";

    loopItems.forEach(s => {
        const card = document.createElement('div');
        card.className = 'setup-card';
        card.innerHTML = `
            <h2>${s.nome}</h2>
            <img src="assets/${s.id}.jpg" onerror="this.src='https://via.placeholder.com/220/222/fff?text=${s.nome}'">
            <p>${s.desc}</p>
        `;
        list.appendChild(card);
    });

    // Touch Swipe Manual
    const wrapper = document.getElementById('step-carousel');
    if (wrapper) {
        wrapper.ontouchstart = e => { startX = e.touches[0].clientX; };
        wrapper.ontouchend = e => {
            if (isMoving) return;
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) { 
                diff > 0 ? currentIndex++ : currentIndex--; 
                updateCarousel(list); 
            }
        };
    }
    updatePositionInstant(list);
}

// --- 5. DEMO VISUAL (BOLINHA ARRASTANDO) ---
function runDemoGuide() {
    const guide = document.getElementById('demo-guide');
    const list = document.getElementById('carousel-list');
    const overlay = document.getElementById('demo-overlay');
    
    if (!guide || !list || !overlay) return;

    overlay.style.display = 'block';
    guide.style.display = 'block';
    
    setTimeout(() => {
        overlay.style.opacity = "0.6"; 
        guide.style.animation = "shrinkToDot 1s forwards";
    }, 10);

    setTimeout(() => {
        guide.style.transition = "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
        list.style.transition = "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)";

        // Movimento 1: Direita (Puxa o carrossel)
        guide.style.left = "80%";
        list.style.transform = `translateX(-${(currentIndex * 100) - 20}vw)`;

        setTimeout(() => {
            // Movimento 2: Esquerda
            guide.style.left = "20%";
            list.style.transform = `translateX(-${(currentIndex * 100) + 20}vw)`;

            setTimeout(() => {
                // Movimento 3: Volta ao Centro
                guide.style.left = "50%";
                list.style.transform = `translateX(-${currentIndex * 100}vw)`;
                
                setTimeout(() => {
                    overlay.style.opacity = "0";
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        guide.style.display = 'none';
                        updatePositionInstant(list);
                    }, 600);
                }, 800);
            }, 900);
        }, 900);
    }, 1200);
}

// --- 6. ATUALIZAÇÕES DO CARROSSEL ---
function updateCarousel(list) {
    if (!list) return;
    isMoving = true;
    list.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    list.style.transform = `translateX(-${currentIndex * 100}vw)`;
    
    const corAtual = loopItems[currentIndex].cor;
    body.style.background = `radial-gradient(circle at center, ${corAtual} 0%, #000000 100%)`;
    currentSetupId = loopItems[currentIndex].id;

    list.addEventListener('transitionend', () => {
        if (currentIndex === 0) { 
            currentIndex = loopItems.length - 2; 
            updatePositionInstant(list); 
        } else if (currentIndex === loopItems.length - 1) { 
            currentIndex = 1; 
            updatePositionInstant(list); 
        }
        isMoving = false;
    }, { once: true });
}

function updatePositionInstant(list) {
    if (!list) return;
    list.style.transition = "none";
    list.style.transform = `translateX(-${currentIndex * 100}vw)`;
    body.style.background = `radial-gradient(circle at center, ${loopItems[currentIndex].cor} 0%, #000000 100%)`;
    currentSetupId = loopItems[currentIndex].id;
}

// --- 7. SISTEMA DE MODAL ---
function showModal(title, message, isConfirm = false, onConfirm = null) {
    const modal = document.getElementById('modal-overlay');
    const titleEl = document.getElementById('modal-title');
    const msgEl = document.getElementById('modal-message');
    const btnContainer = document.getElementById('modal-buttons');
    
    if (!modal || !btnContainer) return;

    titleEl.innerText = title;
    msgEl.innerText = message;
    btnContainer.innerHTML = '';
    
    if (isConfirm) {
        const btnOk = document.createElement('button');
        btnOk.innerText = 'CONFIRMAR';
        btnOk.className = 'btn-modal btn-modal-ok';
        btnOk.onclick = () => { 
            modal.style.display = 'none'; 
            if (onConfirm) onConfirm(); 
        };
        btnContainer.appendChild(btnOk);

        const btnCancel = document.createElement('button');
        btnCancel.innerText = 'CANCELAR';
        btnCancel.className = 'btn-modal btn-modal-cancel';
        btnCancel.onclick = () => { modal.style.display = 'none'; };
        btnContainer.appendChild(btnCancel);
    } else {
        const btnOk = document.createElement('button');
        btnOk.innerText = 'ENTENDIDO';
        btnOk.className = 'btn-modal btn-modal-ok';
        btnOk.onclick = () => { modal.style.display = 'none'; };
        btnContainer.appendChild(btnOk);
    }
    
    modal.style.display = 'flex';
}

function confirmSelection() {
    showModal(
        'CONFIGURAR MENTE?', 
        'Esta escolha é permanente. O MindSet não poderá ser alterado após a inicialização do sistema.', 
        true, 
        () => {
            const data = { 
                nome: document.getElementById('user-name').value, 
                setup: currentSetupId, 
                genero: selectedGender, 
                idade: userSelectedAge 
            };
            localStorage.setItem('mindset_chosen', currentSetupId);
            localStorage.setItem('mindset_data', JSON.stringify(data));
            window.location.href = 'app.html';
        }
    );
}
