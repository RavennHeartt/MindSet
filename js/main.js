:root {
    --bg-base: #000000;
    --text: #ffffff;
    --blue: #007bff;
    --pink: #ff33a1;
    --white-alpha: rgba(255, 255, 255, 0.1);
}

html, body {
    margin: 0; padding: 0; height: 100%;
    color: var(--text);
    font-family: 'Segoe UI', Roboto, sans-serif;
    overflow: hidden;
    background-color: #000;
}

body {
    background: var(--bg-base);
    transition: background 0.8s ease-in-out;
}

/* --- TELAS --- */
.screen { 
    display: none; height: 100vh; width: 100vw; 
    flex-direction: column; align-items: center; justify-content: center; 
    position: relative;
}
.screen.active { display: flex; }

.logo { font-size: 3.5rem; font-weight: 900; letter-spacing: -2px; margin-bottom: 40px; text-align: center; }
.welcome-text { margin-bottom: 40px; line-height: 1.6; opacity: 0.8; max-width: 300px; font-size: 1rem; text-align: center; }
.form-container { width: 85%; max-width: 400px; }
.input-group { margin-bottom: 25px; }
.input-group label { display: block; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px; color: #aaa; margin-bottom: 12px; }

input {
    width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--white-alpha);
    padding: 15px; color: #fff; border-radius: 12px; font-size: 1rem; box-sizing: border-box; outline: none;
}

/* --- AGE SELECTOR (VISOR FIXO NO CENTRO) --- */
.age-selector-container {
    position: relative; 
    height: 100px; 
    background: rgba(255, 255, 255, 0.03);
    border-radius: 18px; 
    border: 1px solid var(--white-alpha);
    display: flex; 
    align-items: center;
    justify-content: center; /* Centraliza o conteúdo */
    overflow: hidden;
}

/* Marcador (Quadrado) agora é fixo no centro do container pai */
.age-selection-marker {
    position: absolute; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); /* Centralização perfeita */
    width: 65px; 
    height: 65px; 
    border: 2px solid var(--blue);
    border-radius: 16px; 
    pointer-events: none; 
    z-index: 10; 
    transition: all 0.4s ease;
}

/* Cores do visor conforme o gênero */
#step-registration.gender-ele .age-selection-marker { border-color: var(--blue); box-shadow: 0 0 20px rgba(0, 123, 255, 0.3); }
#step-registration.gender-ela .age-selection-marker { border-color: var(--pink); box-shadow: 0 0 20px rgba(255, 51, 161, 0.3); }

/* Lista de números que corre por baixo do visor */
.age-carousel-track { 
    display: flex; 
    align-items: center; 
    overflow-x: scroll;
    height: 100%;
    width: 100%;
    scrollbar-width: none; 
    scroll-snap-type: x mandatory;
    padding: 0 calc(50% - 35px); /* Padding para o primeiro/último número centralizarem */
    -webkit-mask-image: linear-gradient(to right, transparent, black 40%, black 60%, transparent);
}
.age-carousel-track::-webkit-scrollbar { display: none; }

.age-number {
    min-width: 70px; 
    text-align: center; 
    font-size: 1.4rem;
    font-weight: bold; 
    color: rgba(255, 255, 255, 0.2); 
    transition: all 0.3s ease;
    scroll-snap-align: center;
}

/* Cor do número em destaque */
#step-registration.gender-ele .age-number.selected { color: var(--blue); transform: scale(1.3); opacity: 1; }
#step-registration.gender-ela .age-number.selected { color: var(--pink); transform: scale(1.3); opacity: 1; }

/* --- GENDER TOGGLE --- */
.gender-toggle-wrapper { 
    display: flex; position: relative; background: rgba(255, 255, 255, 0.05); 
    border-radius: 12px; padding: 4px; border: 1px solid var(--white-alpha); 
    height: 50px; align-items: center;
}
.toggle-pill {
    position: absolute; width: calc(50% - 4px); height: calc(100% - 12px);
    background: var(--blue); border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: 1;
}
#gender-toggle:checked ~ .toggle-pill { transform: translateX(100%); background: var(--pink); }
.gender-btn { flex: 1; text-align: center; font-weight: 900; z-index: 2; cursor: pointer; color: rgba(255, 255, 255, 0.3); line-height: 42px; }
#gender-toggle:not(:checked) ~ .btn-ele { color: #fff; }
#gender-toggle:checked ~ .btn-ela { color: #fff; }

/* --- CARROSSEL --- */
.carousel-header { position: absolute; top: 12%; font-weight: bold; text-align: center; width: 80%; z-index: 2; }
.carousel-wrapper { width: 100%; overflow: hidden; position: relative; z-index: 2; }
.carousel-container { display: flex; transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1); }
.setup-card { min-width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px; box-sizing: border-box; }
.setup-card h2 { font-size: 2.2rem; margin: 0; text-transform: uppercase; font-weight: 900; }
.setup-card img { width: 220px; height: 220px; border-radius: 50%; margin: 30px 0; border: 4px solid rgba(255,255,255,0.3); object-fit: cover; background: #000; }
.setup-card p { font-size: 0.95rem; color: #eee; line-height: 1.5; max-width: 280px; }

/* --- BOTÕES --- */
.btn-main, .btn-confirm { width: 100%; background: #fff; color: #000; border: none; padding: 18px; border-radius: 12px; font-weight: 900; cursor: pointer; }
.btn-back { position: absolute; top: 40px; left: 20px; background: none; color: #fff; border: none; font-weight: bold; z-index: 10; opacity: 0.8; }
.carousel-footer { position: absolute; bottom: 8%; width: 100%; text-align: center; z-index: 2; }
.btn-confirm { width: auto; padding: 15px 50px; border-radius: 50px; }

/* --- OVERLAYS --- */
.demo-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: #000; z-index: 1000; opacity: 0; pointer-events: none; display: none; transition: opacity 0.6s ease;
}
.demo-guide {
    position: fixed; top: 50%; left: 50%;
    width: 120px; height: 120px; border: 3px solid #fff;
    border-radius: 50%; transform: translate(-50%, -50%);
    z-index: 2000; display: none; pointer-events: none;
    box-shadow: 0 0 30px #fff;
}

@keyframes shrinkToDot {
    0% { width: 120px; height: 120px; background: transparent; }
    100% { width: 15px; height: 15px; background: #fff; border: none; }
}

.spotlight-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.85); z-index: 100;
    pointer-events: none; display: none;
    transition: clip-path 0.4s ease;
}

/* --- MODAL --- */
.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.9); display: none; align-items: center; justify-content: center;
    z-index: 10000; backdrop-filter: blur(10px);
}
.modal-content {
    background: #080808; border: 1px solid #111; padding: 35px; border-radius: 30px; text-align: center; width: 85%; max-width: 340px;
}
.modal-buttons { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
.btn-modal { padding: 18px; border-radius: 15px; border: none; font-weight: bold; cursor: pointer; width: 100%; }
.btn-modal-ok { background: #fff; color: #000; }
.btn-modal-cancel { background: #111; color: #fff; border: 1px solid #222; }
