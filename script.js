// Banco de verbos masivo con modales (dovere, potere, volere, sapere)
const bancoVerbos = [
    // --- MODO INDICATIVO ---
    { texto: "io parlo", modo: "indicativo", tiempo: "presente" },
    { texto: "tu prendi", modo: "indicativo", tiempo: "presente" },
    { texto: "lui capisce", modo: "indicativo", tiempo: "presente" },
    { texto: "noi andiamo (Irreg.)", modo: "indicativo", tiempo: "presente" },
    { texto: "voi fate (Irreg.)", modo: "indicativo", tiempo: "presente" },
    { texto: "loro dicono (Irreg.)", modo: "indicativo", tiempo: "presente" },
    { texto: "io devo (Modal)", modo: "indicativo", tiempo: "presente" },
    { texto: "tu puoi (Modal)", modo: "indicativo", tiempo: "presente" },
    { texto: "lei vuole (Modal)", modo: "indicativo", tiempo: "presente" },
    { texto: "noi sappiamo (Irreg.)", modo: "indicativo", tiempo: "presente" },
    
    { texto: "io ho camminato", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu hai venduto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei è uscita", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi siamo venuti (Irreg.)", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi avete scritto (Irreg.)", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro hanno visto (Irreg.)", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui ha dovuto (Modal)", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi abbiamo potuto (Modal)", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro hanno voluto (Modal)", modo: "indicativo", tiempo: "passato-prossimo" },
    
    { texto: "io amavo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu leggevi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui dormiva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi eravamo (Irreg.)", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi facevate (Irreg.)", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro dicevano (Irreg.)", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "io dovevo (Modal)", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu potevi (Modal)", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi volevate (Modal)", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro sapevano (Irreg.)", modo: "indicativo", tiempo: "imperfetto" },
    
    { texto: "io avevo cantato", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu avevi creduto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui era partito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi eravamo andati", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "voi avevate bevuto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro avevano perso", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lei aveva dovuto (Modal)", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevano voluto (Modal)", modo: "indicativo", tiempo: "trapassato-prossimo" },
    
    { texto: "io comprai", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "tu ricevesti", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lei finì", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "noi fummo (Irreg.)", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "voi foste (Irreg.)", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro ebbero (Irreg.)", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io feci (Irreg.)", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui dovette (Modal)", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro vollero (Modal)", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io seppi (Irreg.)", modo: "indicativo", tiempo: "passato-remoto" },
    
    { texto: "io ebbi guardato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "tu avesti temuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui fu stato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi avemmo capito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "voi aveste fatto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro ebbero dovuto (Modal)", modo: "indicativo", tiempo: "trapassato-remoto" },
    
    { texto: "io ascolterò", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu guiderai", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "lei vivrà (Irreg.)", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "voi potrete (Modal)", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "loro dovranno (Modal)", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "noi vorremo (Modal)", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu saprai (Irreg.)", modo: "indicativo", tiempo: "futuro-semplice" },
    
    { texto: "io avrò cenato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "tu avrai venduto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lui sarà arrivato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "noi avremo finito", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "voi avrete dovuto (Modal)", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "loro avranno potuto (Modal)", modo: "indicativo", tiempo: "futuro-anteriore" },

    // --- MODO CONGIUNTIVO ---
    { texto: "che io ami", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che tu scriva", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che lei sia (Irreg.)", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che lui debba (Modal)", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che noi possiamo (Modal)", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che loro vogliano (Modal)", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che voi sappiate (Irreg.)", modo: "congiuntivo", tiempo: "presente" },
    
    { texto: "che io abbia studiato", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che tu sia dimagrito", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi abbiamo dovuto (Modal)", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che loro abbiano voluto (Modal)", modo: "congiuntivo", tiempo: "passato" },
    
    { texto: "che io cercassi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu chiedessi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che lui aprisse", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che noi dovessimo (Modal)", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che voi poteste (Modal)", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che loro volessero (Modal)", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu sapessi (Irreg.)", modo: "congiuntivo", tiempo: "imperfetto" },
    
    { texto: "che io avessi viaggiato", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che lei fosse caduta", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi avessimo potuto (Modal)", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro avessero voluto (Modal)", modo: "congiuntivo", tiempo: "trapassato" },

    // --- MODO CONDIZIONALE ---
    { texto: "io pagherei", modo: "condizionale", tiempo: "presente" },
    { texto: "tu correresti", modo: "condizionale", tiempo: "presente" },
    { texto: "lui colpirebbe", modo: "condizionale", tiempo: "presente" },
    { texto: "io dovrei (Modal)", modo: "condizionale", tiempo: "presente" },
    { texto: "tu potresti (Modal)", modo: "condizionale", tiempo: "presente" },
    { texto: "lei vorrebbe (Modal)", modo: "condizionale", tiempo: "presente" },
    { texto: "noi sapremmo (Irreg.)", modo: "condizionale", tiempo: "presente" },
    
    { texto: "io avrei pranzato", modo: "condizionale", tiempo: "passato" },
    { texto: "tu saresti dimorato", modo: "condizionale", tiempo: "passato" },
    { texto: "noi avremmo dovuto (Modal)", modo: "condizionale", tiempo: "passato" },
    { texto: "loro avrebbero voluto (Modal)", modo: "condizionale", tiempo: "passato" },

    // --- MODO IMPERATIVO ---
    { texto: "parla! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "ascoltiamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "prendete! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "sappi! (tu - Irreg.)", modo: "imperativo", tiempo: "presente" },
    { texto: "vogliate! (voi - Modal)", modo: "imperativo", tiempo: "presente" }
];

let listaJuego = [];
let indiceActual = 0;
let bloqueado = false;

function iniciarJuego() {
    listaJuego = [...bancoVerbos].sort(() => Math.random() - 0.5);
    indiceActual = 0;
    bloqueado = false;
    actualizarContador();
    mostrarSiguienteVerbo();
}

function mostrarSiguienteVerbo() {
    if (indiceActual >= listaJuego.length) {
        document.getElementById("verbo-activo").innerText = "¡Juego Terminado! 🎉";
        mostrarFeedback("¡Completaste todas las conjugaciones!", true);
        bloqueado = true;
        return;
    }
    document.getElementById("verbo-activo").innerText = listaJuego[indiceActual].texto;
}

function actualizarContador() {
    document.getElementById("contador").innerText = `Progreso: ${indiceActual} / ${listaJuego.length}`;
}

function comprobar(modoSeleccionado, tiempoSeleccionado, elementoCasilla) {
    if (bloqueado) return;
    
    const verboCorrecto = listaJuego[indiceActual];
    
    if (modoSeleccionado === verboCorrecto.modo && tiempoSeleccionado === verboCorrecto.tiempo) {
        bloqueado = true;
        elementoCasilla.classList.add("correcto"); 
        elementoCasilla.classList.remove("correcto");elementoCasilla.querySelector(".casilla-check").innerText = "";indiceActual++;actualizarContador();bloqueado = false;mostrarSiguienteVerbo();}, 1000);} else {bloqueado = true;elementoCasilla.classList.add("incorrecto");elementoCasilla.querySelector(".casilla-check").innerText = "✗";mostrarFeedback(¡Incorrecto! Intenta de nuevo., false);setTimeout(() => {elementoCasilla.classList.remove("incorrecto");elementoCasilla.querySelector(".casilla-check").innerText = "";bloqueado = false;}, 1000);}}function mostrarFeedback(mensaje, persistente) {const bar = document.getElementById("feedback-bar");bar.innerText = mensaje;bar.style.display = "flex";if (!persistente) {setTimeout(() => {bar.style.display = "none";}, 2000);}}window.onload = iniciarJuego;
