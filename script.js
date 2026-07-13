const bancoVerbos = [
    // --- MODO INDICATIVO ---
    // Presente
    { texto: "io parlo", modo: "indicativo", tiempo: "presente" },
    { texto: "tu prendi", modo: "indicativo", tiempo: "presente" },
    { texto: "lui capisce", modo: "indicativo", tiempo: "presente" },
    { texto: "noi andiamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi fate", modo: "indicativo", tiempo: "presente" },
    { texto: "loro dicono", modo: "indicativo", tiempo: "presente" },
    { texto: "io devo", modo: "indicativo", tiempo: "presente" },
    { texto: "tu puoi", modo: "indicativo", tiempo: "presente" },
    { texto: "lei vuole", modo: "indicativo", tiempo: "presente" },
    { texto: "noi sappiamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi uscite", modo: "indicativo", tiempo: "presente" },
    { texto: "loro vengono", modo: "indicativo", tiempo: "presente" },

    // Passato Prossimo
    { texto: "io ho camminato", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu hai venduto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei esce", modo: "indicativo", tiempo: "presente" },
    { texto: "lei è uscita", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi siamo venuti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi avete scritto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro hanno visto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui ha dovuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi abbiamo potuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro hanno voluto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io ho fatto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu sei stato", modo: "indicativo", tiempo: "passato-prossimo" },

    // Imperfetto
    { texto: "io amavo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu leggevi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui dormiva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi eravamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi facevate", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro dicevano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "io dovevo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu potevi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi volevate", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro sapevano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi andavamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu avevi", modo: "indicativo", tiempo: "imperfetto" },

    // Trapassato Prossimo
    { texto: "io avevo cantato", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu avevi creduto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui era partito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi eravamo andati", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "voi avevate bevuto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro avevano perso", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lei aveva dovuto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevamo voluto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro erano rimasti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu avevi fatto", modo: "indicativo", tiempo: "trapassato-prossimo" },

    // Passato Remoto
    { texto: "io comprai", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "tu ricevesti", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lei finì", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "noi fummo", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "voi foste", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro ebbero", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io feci", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui dovette", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro vollero", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io seppi", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "tu andasti", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lei vide", modo: "indicativo", tiempo: "passato-remoto" },

    // Trapassato Remoto
    { texto: "io ebbi guardato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "tu avesti temuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui fu stato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi avemmo capito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "voi aveste fatto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro ebbero dovuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "io ebbi finito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lei fu andata", modo: "indicativo", tiempo: "trapassato-remoto" },

    // Futuro Semplice
    { texto: "io ascolterò", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu guiderai", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "lei vivrà", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "voi potrete", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "loro dovranno", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "noi vorremo", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu saprai", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "io andrò", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "noi faremo", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "loro saranno", modo: "indicativo", tiempo: "futuro-semplice" },

    // Futuro Anteriore
    { texto: "io avrò cenato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "tu avrai venduto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lui sarà arrivato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "noi avremo finito", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "voi avrete dovuto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "loro avranno potuto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lei sarà andata", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "io avrò fatto", modo: "indicativo", tiempo: "futuro-anteriore" },

    // --- MODO CONGIUNTIVO ---
    // Presente
    { texto: "che io ami", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che tu scriva", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che lei sia", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che lui debba", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che noi podemos", modo: "congiuntivo", tiempo: "presente" }, // Corregido a italiano: possiamo
    { texto: "che noi possiamo", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che loro vogliano", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che voi sappiate", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che io vada", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che loro facciano", modo: "congiuntivo", tiempo: "presente" },

    // Passato
    { texto: "che io abbia studiato", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che tu sia dimagrito", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi abbiamo dovuto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che loro abbiano voluto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che lei sia andata", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che voi abbiate fatto", modo: "congiuntivo", tiempo: "passato" },

    // Imperfetto
    { texto: "che io cercassi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu chiedessi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che lui aprisse", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che noi dovessimo", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che voi poteste", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che loro volessero", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu sapessi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che io fossi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che noi facessimo", modo: "congiuntivo", tiempo: "imperfetto" },

    // Trapassato
    { texto: "che io avessi viaggiato", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che lei fosse caduta", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi avessimo potuto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro avessero voluto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che tu avessi fatto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro fossero andati", modo: "congiuntivo", tiempo: "trapassato" },

    // --- MODO CONDIZIONALE ---
    // Presente
    { texto: "io pagherei", modo: "condizionale", tiempo: "presente" },
    { texto: "tu correresti", modo: "condizionale", tiempo: "presente" },
    { texto: "lui colpirebbe", modo: "condizionale", tiempo: "presente" },
    { texto: "io dovrei", modo: "condizionale", tiempo: "presente" },
    { texto: "tu potresti", modo: "condizionale", tiempo: "presente" },
    { texto: "lei vorrebbe", modo: "condizionale", tiempo: "presente" },
    { texto: "noi sapremmo", modo: "condizionale", tiempo: "presente" },
    { texto: "voi andreste", modo: "condizionale", tiempo: "presente" },
    { texto: "loro farebbero", modo: "condizionale", tiempo: "presente" },

    // Passato
    { texto: "io avrei pranzato", modo: "condizionale", tiempo: "passato" },
    { texto: "tu saresti dimorato", modo: "condizionale", tiempo: "passato" },
    { texto: "noi avremmo dovuto", modo: "condizionale", tiempo: "passato" },
    { texto: "loro avrebbero voluto", modo: "condizionale", tiempo: "passato" },
    { texto: "lei sarebbe andata", modo: "condizionale", tiempo: "passato" },
    { texto: "voi avreste fatto", modo: "condizionale", tiempo: "passato" },

    // --- MODO IMPERATIVO ---
    // Presente
    { texto: "parla! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "ascoltiamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "prendete! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "sappi! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "vogliate! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "fa'! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "va'! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "abbiate! (voi)", modo: "imperativo", tiempo: "presente" }
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
        document.getElementById("verbo-activo").innerText = "¡Juego Terminado!🎉";
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
        elementoCasilla.querySelector(".casilla-check").innerText = "✓";
        mostrarFeedback("¡Es correcto! 🌟", true);
        
        setTimeout(() => {
            elementoCasilla.classList.remove("correcto");
            elementoCasilla.querySelector(".casilla-check").innerText = "";
            indiceActual++;
            actualizarContador();
            bloqueado = false;
            mostrarSiguienteVerbo();
        }, 1200);
    } else {
        bloqueado = true;
        elementoCasilla.classList.add("incorrecto");
        mostrarFeedback("Respuesta incorrecta, ¡intenta otra vez! ❌", false);
        
        setTimeout(() => {
            elementoCasilla.classList.remove("incorrecto");
            bloqueado = false;
        }, 600);
    }
}

function mostrarFeedback(mensaje, esCorrecto) {
    const bar = document.getElementById("feedback-bar");
    if (!bar) return;
    bar.innerText = mensaje;
    bar.style.display = "flex";
    bar.style.backgroundColor = esCorrecto ? "#2ecc71" : "#e74c3c";
    
    if (esCorrecto) {
        setTimeout(() => {
            bar.style.display = "none";
        }, 1200);
    } else {
        setTimeout(() => {
            bar.style.display = "none";
        }, 2000);
    }
}

// Inicializar el juego de forma automática cuando cargue el script
window.onload = iniciarJuego;

