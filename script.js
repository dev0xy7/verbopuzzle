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
    { texto: "io mi sveglierò", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu ti laverai", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "lui si vestirà", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "noi ci divertiremo", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "voi vi annoierete", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "loro si arrabbieranno", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "io ascolterò", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu guiderai", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "lei vivrà", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "voi potrete", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "loro dovranno", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "noi vorremo", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu saprai", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "io farò", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "tu andrai", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "lui starà", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "noi daremo", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "voi vedrete", modo: "indicativo", tiempo: "futuro-semplice" },
    { texto: "loro verranno", modo: "indicativo", tiempo: "futuro-semplice" },

    // Futuro Anteriore
    { texto: "io avrò cenato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "tu avrai venduto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lui sarà arrivato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "noi avremo finito", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "voi avrete dovuto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "loro avranno potuto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lei sarà andata", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "io avrò fatto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "io mi sarò lavato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "tu ti sarai svegliato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lei si sarà vestita", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "noi ci saremo divertiti", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "loro si saranno arrabbiati", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "io avrò cenato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "tu avrai venduto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lui sarà arrivato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "noi avremo finito", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "voi avrete dovuto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "loro avranno potuto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "io sarò stato", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "tu avrai fatto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "lei sarà andata", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "noi avremo letto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "voi avrete visto", modo: "indicativo", tiempo: "futuro-anteriore" },
    { texto: "loro saranno usciti", modo: "indicativo", tiempo: "futuro-anteriore" },

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
    { texto: "che io mi lavi", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che tu ti svegli", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che noi ci vestiamo", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che loro si divertano", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che io faccia", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che tu vada", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che noi stiamo", modo: "congiuntivo", tiempo: "presente" },
    { texto: "che loro dicano", modo: "congiuntivo", tiempo: "presente" },

    // Passato
    { texto: "che io abbia studiato", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che tu sia dimagrito", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi abbiamo dovuto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che loro abbiano voluto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che lei sia andata", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che voi abbiate fatto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che lui sia stato", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi abbiamo fatto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che voi siate andati", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che loro abbiano visto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che io sia andato", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che tu sia andato", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi siamo andati", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che loro siano andati", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che io sia venuto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che tu sia venuto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che lui sia venuto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi siamo venuti", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che voi siate venuti", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che loro siano venuti", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che io abbia fatto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che tu abbia fatto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che lei abbia fatto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che io abbia detto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che lui abbia detto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi abbiamo detto", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che tu abbia saputo", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che noi abbiamo saputo", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che lui sia uscito", modo: "congiuntivo", tiempo: "passato" },
    { texto: "che loro siano usciti", modo: "congiuntivo", tiempo: "passato" },

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
    { texto: "che io mi lavassi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu ti vestissi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che noi ci divertissimo", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che loro si svegliassero", modo: "congiuntivo", tiempo: "imperfetto" },
     { texto: "che io andassi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu andassi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che lui andasse", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che noi andassimo", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che voi andaste", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che loro andassero", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che io venissi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu venissi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che lui venisse", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che noi venissimo", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che voi veniste", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che loro venissero", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che tu facessi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che lui facesse", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che voi faceste", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che loro facessero", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che io dicessi", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che lui dicesse", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che noi stessimo", modo: "congiuntivo", tiempo: "imperfetto" },
    { texto: "che loro uscissero", modo: "congiuntivo", tiempo: "imperfetto" },

    // Trapassato
    { texto: "che io avessi viaggiato", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che lei fosse caduta", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi avessimo potuto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro avessero voluto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che tu avessi fatto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro fossero andati", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che tu fossi stato", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che lui avesse fatto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi fossimo andati", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro avessero detto", modo: "congiuntivo", tiempo: "trapassato" },
      { texto: "che io fossi andato", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che tu fossi andato", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che lui fosse andato", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che voi foste andati", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che io fossi venuto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che tu fossi venuto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che lui fosse venuto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi fossimo venuti", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che voi foste venuti", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro fossero venuti", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che io avessi fatto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che lei avesse fatto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi avessimo fatto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che voi aveste fatto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che tu avessi detto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi avessimo detto", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che voi aveste saputo", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che loro avessero saputo", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che tu fossi uscito", modo: "congiuntivo", tiempo: "trapassato" },
    { texto: "che noi fossimo usciti", modo: "congiuntivo", tiempo: "trapassato" },

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
    { texto: "io mi laverei", modo: "condizionale", tiempo: "presente" },
    { texto: "tu ti vestiresti", modo: "condizionale", tiempo: "presente" },
    { texto: "noi ci divertiremmo", modo: "condizionale", tiempo: "presente" },
     { texto: "io andrei", modo: "condizionale", tiempo: "presente" },
    { texto: "tu andresti", modo: "condizionale", tiempo: "presente" },
    { texto: "lui andrebbe", modo: "condizionale", tiempo: "presente" },
    { texto: "noi andremmo", modo: "condizionale", tiempo: "presente" },
    { texto: "loro andrebbero", modo: "condizionale", tiempo: "presente" },
    { texto: "io farei", modo: "condizionale", tiempo: "presente" },
    { texto: "tu faresti", modo: "condizionale", tiempo: "presente" },
    { texto: "lei farebbe", modo: "condizionale", tiempo: "presente" },
    { texto: "noi faremmo", modo: "condizionale", tiempo: "presente" },
    { texto: "voi fareste", modo: "condizionale", tiempo: "presente" },
    { texto: "io verrei", modo: "condizionale", tiempo: "presente" },
    { texto: "tu verresti", modo: "condizionale", tiempo: "presente" },
    { texto: "lui verrebbe", modo: "condizionale", tiempo: "presente" },
    { texto: "noi verremmo", modo: "condizionale", tiempo: "presente" },
    { texto: "voi verreste", modo: "condizionale", tiempo: "presente" },
    { texto: "loro verrebbero", modo: "condizionale", tiempo: "presente" },
    { texto: "io direi", modo: "condizionale", tiempo: "presente" },
    { texto: "lui direbbe", modo: "condizionale", tiempo: "presente" },
    { texto: "noi staremmo", modo: "condizionale", tiempo: "presente" },
    { texto: "loro starebbero", modo: "condizionale", tiempo: "presente" },

    // Passato
    { texto: "io avrei pranzato", modo: "condizionale", tiempo: "passato" },
    { texto: "tu saresti dimorato", modo: "condizionale", tiempo: "passato" },
    { texto: "noi avremmo dovuto", modo: "condizionale", tiempo: "passato" },
    { texto: "loro avrebbero voluto", modo: "condizionale", tiempo: "passato" },
    { texto: "lei sarebbe andata", modo: "condizionale", tiempo: "passato" },
    { texto: "voi avreste fatto", modo: "condizionale", tiempo: "passato" },
     { texto: "io mi sarei lavato", modo: "condizionale", tiempo: "passato" },
    { texto: "tu ti saresti vestito", modo: "condizionale", tiempo: "passato" },
    { texto: "loro si sarebbero divertiti", modo: "condizionale", tiempo: "passato" },
     { texto: "io sarei andato", modo: "condizionale", tiempo: "passato" },
    { texto: "tu saresti andato", modo: "condizionale", tiempo: "passato" },
    { texto: "noi saremmo andati", modo: "condizionale", tiempo: "passato" },
    { texto: "loro sarebbero andati", modo: "condizionale", tiempo: "passato" },
    { texto: "io sarei venuto", modo: "condizionale", tiempo: "passato" },
    { texto: "tu saresti venuto", modo: "condizionale", tiempo: "passato" },
    { texto: "lui sarebbe venuto", modo: "condizionale", tiempo: "passato" },
    { texto: "noi saremmo venuti", modo: "condizionale", tiempo: "passato" },
    { texto: "voi sareste venuti", modo: "condizionale", tiempo: "passato" },
    { texto: "loro sarebbero venuti", modo: "condizionale", tiempo: "passato" },
    { texto: "io avrei fatto", modo: "condizionale", tiempo: "passato" },
    { texto: "lui avrei fatto", modo: "condizionale", tiempo: "passato" },
    { texto: "noi avremmo fatto", modo: "condizionale", tiempo: "passato" },
    { texto: "io avrei detto", modo: "condizionale", tiempo: "passato" },
    { texto: "lui avrei detto", modo: "condizionale", tiempo: "passato" },
    { texto: "noi avremmo detto", modo: "condizionale", tiempo: "passato" },
    { texto: "tu avresti potuto", modo: "condizionale", tiempo: "passato" },
    { texto: "noi avremmo saputo", modo: "condizionale", tiempo: "passato" },
    { texto: "lei sarebbe uscita", modo: "condizionale", tiempo: "passato" },
    { texto: "loro sarebbero usciti", modo: "condizionale", tiempo: "passato" },

    // --- MODO IMPERATIVO ---
    // Presente
    { texto: "parla! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "ascoltiamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "prendete! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "sappi! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "vogliate! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "fa'! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "va'! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "abbiate! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "sii! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "siamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "siate! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "abbi! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "abbiamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "facciamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "fate! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "andiamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "andate! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "di'! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "diciamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "dite! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "sta'! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "stiamo! (noi)", modo: "imperativo", tiempo: "presente" },
    { texto: "state! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "vieni! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "venite! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "esci! (tu)", modo: "imperativo", tiempo: "presente" },
    { texto: "uscite! (voi)", modo: "imperativo", tiempo: "presente" },
    { texto: "sappiate! (voi)", modo: "imperativo", tiempo: "presente" },
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

