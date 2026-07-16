// VerboPuzzle - Versión en desarrollo

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
    { texto: "io mi sveglio", modo: "indicativo", tiempo: "presente" },
    { texto: "tu ti lavi", modo: "indicativo", tiempo: "presente" },
    { texto: "lui si veste", modo: "indicativo", tiempo: "presente" },
    { texto: "lei si diverte", modo: "indicativo", tiempo: "presente" },
    { texto: "noi ci laviamo", modo: "indicativo", tiempo: "presente" },
    { texto: "noi ci vestiamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi vi divertite", modo: "indicativo", tiempo: "presente" },
    { texto: "loro si arrabbiano", modo: "indicativo", tiempo: "presente" },
    { texto: "io sono", modo: "indicativo", tiempo: "presente" },
    { texto: "tu sei", modo: "indicativo", tiempo: "presente" },
    { texto: "lui è", modo: "indicativo", tiempo: "presente" },
    { texto: "noi siamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi siate", modo: "indicativo", tiempo: "presente" },
    { texto: "loro sono", modo: "indicativo", tiempo: "presente" },
    { texto: "io ho", modo: "indicativo", tiempo: "presente" },
    { texto: "tu hai", modo: "indicativo", tiempo: "presente" },
    { texto: "lei ha", modo: "indicativo", tiempo: "presente" },
    { texto: "noi abbiamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi avete", modo: "indicativo", tiempo: "presente" },
    { texto: "loro hanno", modo: "indicativo", tiempo: "presente" },
    { texto: "io vado", modo: "indicativo", tiempo: "presente" },
    { texto: "tu vai", modo: "indicativo", tiempo: "presente" },
    { texto: "io faccio", modo: "indicativo", tiempo: "presente" },
    { texto: "tu dici", modo: "indicativo", tiempo: "presente" },
    { texto: "io vengo", modo: "indicativo", tiempo: "presente" },
    { texto: "io esco", modo: "indicativo", tiempo: "presente" },
    { texto: "io sto", modo: "indicativo", tiempo: "presente" },
    { texto: "tu stai", modo: "indicativo", tiempo: "presente" },
    { texto: "io do", modo: "indicativo", tiempo: "presente" },
    { texto: "io bevo", modo: "indicativo", tiempo: "presente" },
      { texto: "voi siete", modo: "indicativo", tiempo: "presente" },
    { texto: "lui va", modo: "indicativo", tiempo: "presente" },
    { texto: "lei va", modo: "indicativo", tiempo: "presente" },
    { texto: "voi andate", modo: "indicativo", tiempo: "presente" },
    { texto: "loro vanno", modo: "indicativo", tiempo: "presente" },
    { texto: "tu vieni", modo: "indicativo", tiempo: "presente" },
    { texto: "lui viene", modo: "indicativo", tiempo: "presente" },
    { texto: "lei viene", modo: "indicativo", tiempo: "presente" },
    { texto: "noi veniamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi venite", modo: "indicativo", tiempo: "presente" },
    { texto: "tu esci", modo: "indicativo", tiempo: "presente" },
    { texto: "lui esce", modo: "indicativo", tiempo: "presente" },
    { texto: "lei esce", modo: "indicativo", tiempo: "presente" },
    { texto: "noi usciamo", modo: "indicativo", tiempo: "presente" },
    { texto: "loro escono", modo: "indicativo", tiempo: "presente" },
    { texto: "tu devi", modo: "indicativo", tiempo: "presente" },
    { texto: "lui deve", modo: "indicativo", tiempo: "presente" },
    { texto: "noi dobbiamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi dovete", modo: "indicativo", tiempo: "presente" },
    { texto: "loro devono", modo: "indicativo", tiempo: "presente" },
    { texto: "io posso", modo: "indicativo", tiempo: "presente" },
    { texto: "lui può", modo: "indicativo", tiempo: "presente" },
    { texto: "lei può", modo: "indicativo", tiempo: "presente" },
    { texto: "noi possiamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi potete", modo: "indicativo", tiempo: "presente" },
    { texto: "loro possono", modo: "indicativo", tiempo: "presente" },
    { texto: "io voglio", modo: "indicativo", tiempo: "presente" },
    { texto: "tu vuoi", modo: "indicativo", tiempo: "presente" },
    { texto: "noi vogliamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi volete", modo: "indicativo", tiempo: "presente" },
    { texto: "loro vogliono", modo: "indicativo", tiempo: "presente" },
    { texto: "tu sai", modo: "indicativo", tiempo: "presente" },
    { texto: "lui sa", modo: "indicativo", tiempo: "presente" },
    { texto: "lei sa", modo: "indicativo", tiempo: "presente" },
    { texto: "voi sapete", modo: "indicativo", tiempo: "presente" },
    { texto: "loro sanno", modo: "indicativo", tiempo: "presente" },
    { texto: "io parto", modo: "indicativo", tiempo: "presente" },
    { texto: "tu parti", modo: "indicativo", tiempo: "presente" },
    { texto: "lui parte", modo: "indicativo", tiempo: "presente" },
    { texto: "lei parte", modo: "indicativo", tiempo: "presente" },
    { texto: "noi partiamo", modo: "indicativo", tiempo: "presente" },
    { texto: "voi partite", modo: "indicativo", tiempo: "presente" },
    { texto: "loro partono", modo: "indicativo", tiempo: "presente" },

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
     { texto: "io sono andato", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io sono andata", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu sei andato", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui è andato", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei è andata", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi siamo andati", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi siete andati", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro sono andati", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro sono andate", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io sono venuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io sono venuta", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu sei venuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui è venuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei è venuta", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi siete venuti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro sono venuti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io sono uscito", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu sei uscito", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui è uscito", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi siamo usciti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi siete usciti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro sono usciti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io sono partito", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io sono partita", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu sei partito", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui è partito", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei è partita", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi siamo partiti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi siete partiti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro sono partiti", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io ho dovuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu hai dovuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei ha dovuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi avete dovuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io ho potuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu hai potuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui ha potuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi avete potuto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io ho voluto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu hai voluto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei ha voluto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi avete voluto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io ho saputo", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "tu hai saputo", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui ha saputo", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi abbiamo saputo", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi avete saputo", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro hanno saputo", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei ha fatto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi abbiamo fatto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi avete fatto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro hanno fatto", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "io sono stato", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lui è stato", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "lei è stata", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "noi siamo stati", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "voi siete stati", modo: "indicativo", tiempo: "passato-prossimo" },
    { texto: "loro sono stati", modo: "indicativo", tiempo: "passato-prossimo" },

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
     { texto: "io andavo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu andavi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui andava", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei andava", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi andavate", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro andavano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "io venivo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu venivi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui veniva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei veniva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi venivamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi veniste", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro venivano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "io uscivo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu uscivi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui usciva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei usciva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi uscivamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro uscivano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "io partivo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu partivi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui partiva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei partiva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi partivamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi partivate", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro partivano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui doveva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei doveva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi dovevamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi dovevate", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro dovevano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "io potevo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui poteva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei poteva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi potevamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro potevano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "io volevo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu volevi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui voleva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei voleva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi volevamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "loro volevano", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu sapevi", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui sapeva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei sapeva", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "noi sapevamo", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "voi sapevate", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "tu eri", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lui era", modo: "indicativo", tiempo: "imperfetto" },
    { texto: "lei era", modo: "indicativo", tiempo: "imperfetto" },

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
    { texto: "io ero andato", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io ero andata", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu eri andato", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui era andato", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lei era andata", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "voi eravate andati", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro erano andati", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro erano andate", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io ero venuto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu eri venuto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui era venuto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lei era venuta", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi eravamo venuti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "voi eravate venuti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro erano venuti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io ero uscito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu eri uscito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui era uscito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi eravamo usciti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro erano usciti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io ero partito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu eri partito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lei era partita", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "voi eravate partiti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro erano partiti", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io avevo fatto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui aveva fatto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lei aveva fatto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevamo fatto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "voi avevate fatto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro avevano fatto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io avevo detto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu avevi dicho", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui aveva detto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevamo detto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro avevano detto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io avevo visto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu avevi visto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui aveva visto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevamo visto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "loro avevano visto", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "io avevo preso", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui aveva preso", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevamo preso", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "tu avevi capito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lei aveva capito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevamo capito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "lui aveva sentito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "noi avevamo sentito", modo: "indicativo", tiempo: "trapassato-prossimo" },
    { texto: "era successo", modo: "indicativo", tiempo: "trapassato-prossimo" },

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
    { texto: "io andai", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui andò", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lei andò", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "noi andammo", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro andarono", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io venni", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "tu venisti", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui venne", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "noi venimmo", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro vennero", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui fece", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "noi facemmo", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro fecero", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io dissi", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "tu dicesti", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui disse", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "noi dicemmo", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro dissero", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io vidi", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro videro", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io presi", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui prese", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro presero", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io misi", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui mise", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "io scrissi", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui scrisse", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui nacque", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "loro nacquero", modo: "indicativo", tiempo: "passato-remoto" },
    { texto: "lui morì", modo: "indicativo", tiempo: "passato-remoto" },

    // Trapassato Remoto
    { texto: "io ebbi guardato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "tu avesti temuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui fu stato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi avemmo capito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "voi aveste fatto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro ebbero dovuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "io ebbi finito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lei fu andata", modo: "indicativo", tiempo: "trapassato-remoto" },
      { texto: "io fui andato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "io fui andata", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "tu fosti andato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui fu andato", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi fummo andati", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "voi foste andati", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro furono andati", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "io fui venuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "tu fosti venuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui fu venuto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lei fu venuta", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi fummo venuti", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro furono venuti", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "io fui uscito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui fu uscito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi fummo usciti", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro furono usciti", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "tu fosti partito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui fu partito", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi fummo partiti", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro furono partiti", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "tu avesti fatto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui ebbe fatto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi avemmo fatto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "loro ebbero fatto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "io ebbi detto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui ebbe detto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "noi avemmo detto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui ebbe visto", modo: "indicativo", tiempo: "trapassato-remoto" },
    { texto: "lui ebbe preso", modo: "indicativo", tiempo: "trapassato-remoto" },

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
let nivelSeleccionado = "";

let totalAciertos = 0;
let totalErrores = 0;

/*==================================================
 HISTORIAL PEDAGÓGICO
==================================================*/

let historialPartida = [];

let registroActual = null;

/*==================================================
 REGISTRO PEDAGÓGICO
==================================================*/

function iniciarRegistro(verbo){

    registroActual = {

        verbo: verbo.texto,

        modo: verbo.modo,

        tiempo: verbo.tiempo,

        intentos: 0,

        errores: 0,

        correcto: false

    };

}

function registrarIntento(){

    if(registroActual){

        registroActual.intentos++;

    }

}

function registrarError(){

    if(registroActual){

        registroActual.errores++;

    }

}

function finalizarRegistro(){

    if(!registroActual) return;

    registroActual.correcto = true;

    historialPartida.push(registroActual);

    registroActual = null;

}


    if (nivelSeleccionado === "a1") {

        listaJuego = bancoVerbos.filter(v =>
            v.modo === "indicativo" &&
            [
                "presente",
                "passato-prossimo",
                "futuro-semplice"
            ].includes(v.tiempo)
        );

    } else if (nivelSeleccionado === "b1") {

        listaJuego = bancoVerbos.filter(v =>

            (
                v.modo === "indicativo" &&
                [
                    "presente",
                    "passato-prossimo",
                    "futuro-semplice",
                    "imperfetto"
                ].includes(v.tiempo)

            )

            ||

            v.modo === "condizionale"

            ||

            v.modo === "imperativo"

        );

    } else {

        listaJuego = [...bancoVerbos];

    }

    listaJuego.sort(() => Math.random() - 0.5);

    indiceActual = 0;
    totalAciertos = 0;
    totalErrores = 0;
    bloqueado = false;

    mostrarSiguienteVerbo();

}
function mostrarSiguienteVerbo() {
    // Si se acaban los verbos, abre automáticamente la pantalla de estadísticas
    if (indiceActual >= listaJuego.length) {
        abrirPantallaResultados();
        return;
    }
    document.getElementById("verbo-activo").innerText = listaJuego[indiceActual].texto;
}


function comprobar(modoSeleccionado, tiempoSeleccionado, elementoCasilla) {
    if (bloqueado) return;
    
    const verboCorrecto = listaJuego[indiceActual];
    const esCorrecto = (modoSeleccionado === verboCorrecto.modo && tiempoSeleccionado === verboCorrecto.tiempo);
    
    if (esCorrecto) {
        bloqueado = true;
        totalAciertos++; // Suma un acierto al reporte final
        elementoCasilla.classList.add("correcto");
        elementoCasilla.querySelector(".casilla-check").innerText = "✓";
        mostrarFeedback("¡Es correcto! 🌟", true);
        
        setTimeout(() => {
            elementoCasilla.classList.remove("correcto");
            elementoCasilla.querySelector(".casilla-check").innerText = "";
            indiceActual++;
            bloqueado = false;
            mostrarSiguienteVerbo();
        }, 1200);
    } else {
        bloqueado = true;
        totalErrores++; // Suma un error al reporte final
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

// FUNCIONES NUEVAS: Control de apertura, cálculo y cierre de estadísticas
function terminarJuegoManualmente() {
    abrirPantallaResultados();
}

function abrirPantallaResultados() {
    bloqueado = true;
    
    // Calcular porcentaje de efectividad pedagógica
    const totalRespondido = totalAciertos + totalErrores;
    let porcentaje = 0;
    if (totalRespondido > 0) {
        porcentaje = Math.round((totalAciertos / totalRespondido) * 100);
    }
    
    // Inyectar datos en la pantalla flotante del HTML
    document.getElementById("resumen-aciertos").innerText = totalAciertos;
    document.getElementById("resumen-errores").innerText = totalErrores;
    document.getElementById("resumen-porcentaje").innerText = porcentaje + "%";
    
    // Mostrar la ventana flotante sobre el tablero
    document.getElementById("modal-resultados").style.display = "flex";
}

function cerrarResultadosYReiniciar() {

    // Cerrar la ventana de resultados
    document.getElementById("modal-resultados").style.display = "none";

    // Ocultar el juego
    document.getElementById("juego").style.display = "none";

    // Mostrar nuevamente la pantalla de selección
    document.getElementById("pantalla-inicio").style.display = "flex";

    // Reiniciar el nivel seleccionado
    nivelSeleccionado = "";

}


/* ================================================================= */
/* RESPALDO HISTÓRICO (INACTIVO): Tu código de control anterior      */
/* Guardado como registro de avances. El navegador no lo ejecuta     */
/* ================================================================= */
/*
function mostrarSiguienteVerbo() {
    if (indiceActual >= listaJuego.length) {
        document.getElementById("verbo-activo").innerText = "¡Juego Terminado! 🎉";
        mostrarFeedback("¡Completaste todas las conjugaciones!", true);
        bloqueado = true;
        return;
    }
    document.getElementById("verbo-activo").innerText = listaJuego[indiceActual].texto;
}
*/
/* ================================================================= */

// Arranca el juego de forma automática apenas carga la página
function seleccionarNivel(nivel){

    nivelSeleccionado = nivel;

    document.getElementById("pantalla-inicio").style.display = "none";

    document.getElementById("juego").style.display = "block";

    iniciarJuego();

}



chore: crear entorno de desarrollo
