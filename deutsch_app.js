var SAETZE = [
  "Der kleine Hund bellt laut im Garten.",
  "Die bunte Katze schlaeft auf dem warmen Sofa.",
  "Ein wilder Fuchs laeuft durch den dunklen Wald.",
  "Die junge Ente schwimmt froehlich auf dem See.",
  "Der grosse Elefant trinkt Wasser aus dem Fluss.",
  "Ein kleines Haeuschen steht am Rand des stillen Waldes.",
  "Die schnelle Schwalbe fliegt hoch ueber den Daechern.",
  "Der braune Baer sucht Honig im alten Baumstamm.",
  "Ein bunter Schmetterling sitzt auf der roten Rose.",
  "Die mutige Maus rennt durch das stille Haus.",
  "Im Herbst fallen die bunten Blaetter von den Baeumen.",
  "Der frische Schnee bedeckt die stille Landschaft.",
  "Die warme Sonne scheint auf die bluehende Wiese.",
  "Ein kalter Wind weht ueber das weite Feld.",
  "Das klare Wasser des Baches fliesst ueber die Steine.",
  "Dunkle Wolken ziehen am Himmel auf.",
  "Der Regen trommelt laut auf das Dach.",
  "Der Vollmond leuchtet hell ueber dem See.",
  "Die Schueler lernen fleissig fuer die Pruefung.",
  "Das Maedchen liest ein spannendes Buch in der Bibliothek.",
  "Der Lehrer erklaert die schwierige Aufgabe geduldig.",
  "Jeden Morgen fruehstueckt die Familie gemeinsam.",
  "Die Kinder spielen nach der Schule auf dem Spielplatz.",
  "Die Klasse besucht das spannende Museum in der Stadt.",
  "Mia malt ein buntes Bild fuer ihre beste Freundin.",
  "Der Schueler schreibt sorgfaeltig seinen Namen auf das Heft.",
  "Der Spieler schiesst das entscheidende Tor im letzten Moment.",
  "Die Mannschaft trainiert jeden Tag auf dem grossen Sportplatz.",
  "Tom faehrt jeden Nachmittag mit dem Fahrrad durch den Park.",
  "Die Kinder bauen eine riesige Sandburg am Strand.",
  "Luisa schwimmt schnell durch das kuehle Wasser.",
  "Der Laeufer uberquert erschoepft die Ziellinie.",
  "Jonas spielt jeden Freitag mit seinen Freunden Fussball.",
  "Die Koeochin bereitet ein leckeres Abendessen zu.",
  "Das frische Brot duftet herrlich aus dem Ofen.",
  "Lena isst jeden Morgen einen frischen Apfel.",
  "Auf dem Markt kauft die Oma frisches Gemuese.",
  "Das mutige Maedchen springt furchtlos ins kalte Wasser.",
  "Der traurige Junge sitzt allein auf der leeren Bank.",
  "Ein freundlicher Drache bewacht den alten Schatz.",
  "Ein tapferer Ritter reitet durch den finsteren Wald.",
  "Das glueckliche Kind lacht laut ueber den lustigen Clown.",
  "Der weise Zauberer loest das schwierige Raetsel.",
  "Die Familie faehrt mit dem Zug in eine fremde Stadt.",
  "Das alte Schloss steht auf einem hohen Berg.",
  "Ein grosses Schiff faehrt langsam durch den nebligen Hafen.",
  "Die Touristen fotografieren den schoenen Sonnenuntergang.",
  "Jeden Sommer reist die Familie ans Meer.",
  "Der alte Mann geht jeden Abend mit seinem Hund spazieren.",
  "Die Kinder lachen laut ueber den lustigen Witz.",
  "Das kleine Maedchen singt ein schoenes Lied.",
  "Der starke Wind bricht den alten Ast vom Baum.",
  "Die fleissige Biene sammelt Nektar von der Blume.",
  "Der neugierige Junge oeffnet vorsichtig die alte Truhe.",
  "Die Grossmutter strickt einen warmen Schal fuer den Winter.",
  "Ein kleiner Vogel singt sein Lied auf dem hoechsten Ast.",
  "Die Kinder rennen aufgeregt zum Weihnachtsbaum.",
  "Der Bauer pflueegt frueh morgens sein weites Feld.",
  "Das muede Kind schlaeft friedlich in seinem Bett.",
  "Die freundliche Lehrerin lobt den fleissigen Schueler."
];

var REGELN = [
  {
    test: function(s) { return s.length > 0 && s[0] !== s[0].toUpperCase(); },
    hinweis: "Der erste Buchstabe muss grossgeschrieben werden."
  },
  {
    test: function(s) { return !/[.!?]$/.test(s.trim()); },
    hinweis: "Am Ende des Satzes fehlt ein Satzzeichen (Punkt, Ausrufezeichen oder Fragezeichen)."
  },
  {
    test: function(s) { return /  /.test(s); },
    hinweis: "Doppelte Leerzeichen gefunden – bitte nur ein Leerzeichen zwischen den Woertern."
  }
];

function pruefeRechtschreibung(satz) {
  var fehler = [];
  for (var i = 0; i < REGELN.length; i++) {
    if (REGELN[i].test(satz)) { fehler.push(REGELN[i].hinweis); }
  }
  return fehler;
}

var aktiverSatz  = "";
var aktiveUebung = "";
var zufallsIdx   = -1;
var gesamt = 0, richtig = 0, punkte = 0;

function zeigeQuelle(q) {
  document.getElementById("tab-eigener").classList.toggle("aktiv", q === "eigener");
  document.getElementById("tab-zufall").classList.toggle("aktiv",  q === "zufall");
  document.getElementById("panel-eigener").classList.toggle("sichtbar", q === "eigener");
  document.getElementById("panel-zufall").classList.toggle("sichtbar",  q === "zufall");
  if (q === "zufall" && zufallsIdx < 0) { neuerZufallssatz(); }
}

function neuerZufallssatz() {
  var idx;
  do { idx = Math.floor(Math.random() * SAETZE.length); }
  while (idx === zufallsIdx && SAETZE.length > 1);
  zufallsIdx = idx;
  document.getElementById("zufall-anzeige").textContent = SAETZE[idx];
}

function ladeZufallssatz() {
  if (zufallsIdx < 0) { neuerZufallssatz(); }
  ladeSatz(SAETZE[zufallsIdx]);
}

function ladeEigenenSatz() {
  var val = document.getElementById("eigener-satz").value.trim();
  if (!val) { alert("Bitte gib deinen Satz ein!"); return; }
  var fehler = pruefeRechtschreibung(val);
  var box = document.getElementById("hinweis-box");
  if (fehler.length > 0) {
    box.style.display = "block";
    box.innerHTML = "<strong>Moegliche Fehler:</strong><ul>" + fehler.map(function(f){ return "<li>" + f + "</li>"; }).join("") + "</ul>";
  } else {
    box.style.display = "none";
  }
  ladeSatz(val);
}

function ladeSatz(satz) {
  aktiverSatz = satz;
  var el = document.getElementById("aktueller-satz");
  el.style.display = "block";
  el.innerHTML = "<strong>Aktueller Satz:</strong> " + satz;
  document.getElementById("uebung-bereich").style.display = "block";
  document.getElementById("aufgabe-karte").style.display = "none";
  document.querySelectorAll(".uebung-btn").forEach(function(b){ b.classList.remove("aktiv"); });
}

function filterKat(kat, btn) {
  document.querySelectorAll(".kat-btn").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  document.querySelectorAll(".uebung-btn[data-kat]").forEach(function(b){
    b.classList.toggle("versteckt", kat !== "alle" && b.dataset.kat !== kat);
  });
}

function startUebung(btn) {
  if (!aktiverSatz) { alert("Bitte zuerst einen Satz laden!"); return; }
  aktiveUebung = btn.dataset.id;
  document.querySelectorAll(".uebung-btn").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  document.getElementById("aufgabe-karte").style.display = "block";
  document.getElementById("aufgabe-karte").scrollIntoView({ behavior: "smooth", block: "nearest" });
  generiereAufgabe();
}

function reset() {
  document.getElementById("mc-optionen").innerHTML = "";
  document.getElementById("mc-optionen").style.display = "none";
  document.getElementById("antwort-feld").style.display = "none";
  document.getElementById("antwort-feld").disabled = false;
  document.getElementById("antwort-feld").value = "";
  document.getElementById("antwort-bereich").style.display = "none";
  document.getElementById("antwort-bereich").disabled = false;
  document.getElementById("antwort-bereich").value = "";
  document.getElementById("antwort-bereich").style.minHeight = "80px";
  document.getElementById("pruefen-btn").style.display = "inline-flex";
  document.getElementById("weiter-btn").style.display = "none";
  document.getElementById("rueckmeldung").style.display = "none";
  document.getElementById("rueckmeldung").className = "rueckmeldung";
  document.getElementById("tipp-box").style.display = "none";
}

function zeigeFeld() {
  document.getElementById("antwort-feld").style.display = "block";
  document.getElementById("antwort-feld").focus();
}

function zeigeBereich() {
  document.getElementById("antwort-bereich").style.display = "block";
  document.getElementById("antwort-bereich").focus();
}

function zeigeMC(optionen) {
  var mc = document.getElementById("mc-optionen");
  mc.style.display = "flex";
  document.getElementById("pruefen-btn").style.display = "none";
  optionen.forEach(function(opt) {
    var b = document.createElement("button");
    b.className = "mc-btn";
    b.textContent = opt;
    b.onclick = function() {
      document.querySelectorAll(".mc-btn").forEach(function(x){ x.disabled = true; });
      b.classList.add("richtig");
      gesamt++; richtig++; punkte++;
      aktualisiereAnzeige();
      var r = document.getElementById("rueckmeldung");
      r.style.display = "block";
      r.className = "rueckmeldung info";
      r.innerHTML = "Du hast <strong>\"" + opt + "\"</strong> gewaehlt. Besprich die Antwort mit deiner Lehrerin!";
      document.getElementById("weiter-btn").style.display = "inline-flex";
    };
    mc.appendChild(b);
  });
}

function satzBox() {
  return "<span class=\"satz-hervorhebung\">" + aktiverSatz + "</span>";
}

function zufallsWort() {
  var woerter = aktiverSatz.replace(/[.,!?]/g,"").split(" ").filter(function(w){ return w.length > 0; });
  return woerter[Math.floor(Math.random() * woerter.length)];
}

function zufallsNomen() {
  var woerter = aktiverSatz.replace(/[.,!?]/g,"").split(" ").filter(function(w){ return w.length > 0; });
  var nomen = woerter.filter(function(w){
    return w.length > 2 && w[0] === w[0].toUpperCase() &&
    !/^(Der|Die|Das|Ein|Eine|Ich|Du|Er|Sie|Es|Wir|Ihr|Im|Ins|Am|Zum|Zur|Auf|Den|Dem|Des)$/.test(w);
  });
  return nomen.length > 0 ? nomen[Math.floor(Math.random() * nomen.length)] : zufallsWort();
}

function generiereAufgabe() {
  reset();
  var typEl = document.getElementById("aufgabe-typname");
  var textEl = document.getElementById("aufgabe-text");
  var tippEl = document.getElementById("tipp-box");
  var w = zufallsWort();
  var n = zufallsNomen();

  if (aktiveUebung === "wortarten") {
    typEl.textContent = "Wortarten bestimmen";
    textEl.innerHTML = "Welche Wortart ist das Wort <strong>\"" + w + "\"</strong>? " + satzBox();
    tippEl.style.display = "block";
    tippEl.textContent = "Tipp: Nomen = Dinge/Personen (gross) · Verb = Tätigkeit · Adjektiv = Eigenschaft · Artikel = der/die/das/ein · Pronomen = er/sie/es/ich";
    zeigeMC(["Nomen","Verb","Adjektiv","Artikel","Pronomen","Adverb","Präposition","Konjunktion"]);
  }
  else if (aktiveUebung === "zeitformen") {
    var zfListe = ["Präteritum (einfache Vergangenheit)","Perfekt (vollendete Vergangenheit)","Futur I (Zukunft)"];
    var zf = zfListe[Math.floor(Math.random() * zfListe.length)];
    typEl.textContent = "Zeitformen";
    textEl.innerHTML = "Schreibe den Satz im <strong>" + zf + "</strong>: " + satzBox();
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Satz im " + zf + " ...";
  }
  else if (aktiveUebung === "satzglieder") {
    var glieder = [
      {name:"Subjekt", frage:"Wer oder was?"},
      {name:"Prädiktat", frage:"Was tut das Subjekt?"},
      {name:"Akkusativobjekt", frage:"Wen oder was?"},
      {name:"Ortsangabe", frage:"Wo?"},
      {name:"Zeitangabe", frage:"Wann?"}
    ];
    var g = glieder[Math.floor(Math.random() * glieder.length)];
    typEl.textContent = "Satzglieder bestimmen";
    textEl.innerHTML = "Finde das <strong>" + g.name + "</strong> im Satz (Frage: " + g.frage + "): " + satzBox();
    zeigeFeld();
    document.getElementById("antwort-feld").placeholder = g.name + " ist ...";
  }
  else if (aktiveUebung === "umstellen") {
    typEl.textContent = "Satz umstellen";
    textEl.innerHTML = "Stelle den Satz um – beginne mit einem anderen Satzglied als dem Subjekt: " + satzBox() + "<br><small style='color:#BB8888'>Das Verb bleibt immer an zweiter Stelle!</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Umgestellter Satz ...";
  }
  else if (aktiveUebung === "steigerung") {
    typEl.textContent = "Steigerung";
    textEl.innerHTML = "Bilde alle Steigerungsformen von <strong>\"" + w + "\"</strong> (falls Adjektiv): " + satzBox() + "<br><small style='color:#BB8888'>z.B. schnell → schneller → am schnellsten</small>";
    zeigeFeld();
    document.getElementById("antwort-feld").placeholder = "Grundstufe → Komparativ → Superlativ";
  }
  else if (aktiveUebung === "plural") {
    typEl.textContent = "Plural bilden";
    textEl.innerHTML = "Bilde den Plural von <strong>\"" + n + "\"</strong> mit dem richtigen Artikel: " + satzBox() + "<br><small style='color:#BB8888'>z.B. der Hund → die Hunde</small>";
    zeigeFeld();
    document.getElementById("antwort-feld").placeholder = "die ... (Mehrzahl)";
  }
  else if (aktiveUebung === "kasus") {
    typEl.textContent = "Kasus bestimmen";
    textEl.innerHTML = "In welchem Fall steht <strong>\"" + n + "\"</strong>? " + satzBox();
    tippEl.style.display = "block";
    tippEl.textContent = "Nominativ = Wer/Was? · Genitiv = Wessen? · Dativ = Wem? · Akkusativ = Wen/Was?";
    zeigeMC(["Nominativ (Wer/Was?)","Genitiv (Wessen?)","Dativ (Wem?)","Akkusativ (Wen/Was?)"]);
  }
  else if (aktiveUebung === "verneinung") {
    typEl.textContent = "Verneinung";
    textEl.innerHTML = "Verneige den Satz mit <strong>\"nicht\"</strong> oder <strong>\"kein\"</strong>: " + satzBox();
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Verneineter Satz ...";
  }
  else if (aktiveUebung === "erw_wann") {
    typEl.textContent = "Erweitern: Wann?";
    textEl.innerHTML = "Erweitere den Satz mit einer <strong>Zeitangabe</strong>: " + satzBox() + "<br><small style='color:#BB8888'>z.B. morgens · abends · jeden Tag · manchmal · im Winter · um 8 Uhr</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Erweiterter Satz ...";
  }
  else if (aktiveUebung === "erw_wo") {
    typEl.textContent = "Erweitern: Wo genau?";
    textEl.innerHTML = "Erweitere den Satz mit einer genauen <strong>Ortsangabe</strong>: " + satzBox() + "<br><small style='color:#BB8888'>z.B. im Wald · auf der Wiese · hinter dem Haus · neben der Schule</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Erweiterter Satz ...";
  }
  else if (aktiveUebung === "erw_wie") {
    typEl.textContent = "Erweitern: Wie?";
    textEl.innerHTML = "Erweitere den Satz: <strong>Wie genau</strong> passiert das? " + satzBox() + "<br><small style='color:#BB8888'>z.B. sehr schnell · leise · mit einem Laecheln · voller Freude</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Erweiterter Satz ...";
  }
  else if (aktiveUebung === "erw_warum") {
    typEl.textContent = "Erweitern: Warum?";
    textEl.innerHTML = "Fuge einen <strong>Grund</strong> hinzu (Warum passiert das?): " + satzBox() + "<br><small style='color:#BB8888'>Nutze z.B. \"weil\", \"denn\" oder \"da\". Vor \"weil\" kommt ein Komma!</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Satz mit Begründung ...";
  }
  else if (aktiveUebung === "gegenteil") {
    typEl.textContent = "Gegenteil";
    textEl.innerHTML = "Schreibe den Satz so um, dass er das <strong>Gegenteil</strong> ausdrückt: " + satzBox();
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Satz mit Gegenteil ...";
  }
  else if (aktiveUebung === "bildlich") {
    typEl.textContent = "Bildlich schreiben";
    textEl.innerHTML = "Schreibe den Satz <strong>bildlich</strong> um mit einem Vergleich (wie ...) oder einer Metapher: " + satzBox() + "<br><small style='color:#BB8888'>z.B. so schnell wie ein Blitz · wie ein schlafender Riese</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Bildlicher Satz ...";
  }
  else if (aktiveUebung === "frage") {
    var ftypen = ["Entscheidungsfrage (Ja/Nein-Frage)","Ergaenzungsfrage (Wer, Was, Wo, Wann, Warum?)"];
    var ft = ftypen[Math.floor(Math.random() * 2)];
    typEl.textContent = "Frage formulieren";
    textEl.innerHTML = "Forme den Satz in eine <strong>" + ft + "</strong> um: " + satzBox();
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Frage ...";
  }
  else if (aktiveUebung === "geschichte") {
    typEl.textContent = "Mini-Geschichte";
    textEl.innerHTML = "Schreibe eine <strong>Mini-Geschichte (3 Sätze)</strong>, in der dieser Satz vorkommt: " + satzBox();
    document.getElementById("antwort-bereich").style.minHeight = "120px";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Meine Mini-Geschichte ...";
  }
  else if (aktiveUebung === "adj_nomen") {
    typEl.textContent = "Adjektiv zu Nomen";
    textEl.innerHTML = "Leite von <strong>\"" + w + "\"</strong> ein Nomen ab (falls moeglich): " + satzBox() + "<br><small style='color:#BB8888'>z.B. schnell → die Schnelligkeit · gross → die Groesse · schoen → die Schoenheit</small>";
    zeigeFeld();
    document.getElementById("antwort-feld").placeholder = "das/die ... (Nomen)";
  }
  else if (aktiveUebung === "verb_nomen") {
    typEl.textContent = "Verb zu Nomen";
    textEl.innerHTML = "Forme <strong>\"" + w + "\"</strong> in ein Nomen um (falls Verb): " + satzBox() + "<br><small style='color:#BB8888'>z.B. laufen → das Laufen · schreiben → das Schreiben</small>";
    zeigeFeld();
    document.getElementById("antwort-feld").placeholder = "das ... (Nomen)";
  }
  else if (aktiveUebung === "nomen_verb") {
    typEl.textContent = "Nomen zu Verb";
    textEl.innerHTML = "Leite von <strong>\"" + n + "\"</strong> ein Verb ab (falls moeglich): " + satzBox() + "<br><small style='color:#BB8888'>z.B. der Tanz → tanzen · der Kauf → kaufen</small>";
    zeigeFeld();
    document.getElementById("antwort-feld").placeholder = "Verb ...";
  }
  else if (aktiveUebung === "synonyme") {
    typEl.textContent = "Synonyme finden";
    textEl.innerHTML = "Finde <strong>mindestens 2 Synonyme</strong> fuer <strong>\"" + w + "\"</strong>: " + satzBox() + "<br><small style='color:#BB8888'>Synonyme = Woerter mit aehnlicher Bedeutung</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Synonym 1, Synonym 2, ...";
  }
  else if (aktiveUebung === "adj_tauschen") {
    typEl.textContent = "Adjektive ersetzen";
    textEl.innerHTML = "Schreibe den Satz mit <strong>anderen, treffenderen Adjektiven</strong> um: " + satzBox();
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Satz mit neuen Adjektiven ...";
  }
  else if (aktiveUebung === "wortfamilie") {
    typEl.textContent = "Wortfamilie";
    textEl.innerHTML = "Sammle verwandte Woerter zur Wortfamilie von <strong>\"" + w + "\"</strong>: " + satzBox() + "<br><small style='color:#BB8888'>z.B. laufen → Laeufer, Lauf, hinlaufen, Vorlauf ...</small>";
    zeigeBereich();
    document.getElementById("antwort-bereich").placeholder = "Woerter der Wortfamilie ...";
  }
}

function pruefen() {
  var feld    = document.getElementById("antwort-feld");
  var bereich = document.getElementById("antwort-bereich");
  var antwort = bereich.style.display !== "none" ? bereich.value.trim() : feld.value.trim();
  if (!antwort) { (bereich.style.display !== "none" ? bereich : feld).focus(); return; }
  var fehler = pruefeRechtschreibung(antwort);
  gesamt++; richtig++; punkte++;
  aktualisiereAnzeige();
  feld.disabled = true; bereich.disabled = true;
  document.getElementById("pruefen-btn").style.display = "none";
  document.getElementById("weiter-btn").style.display = "inline-flex";
  var r = document.getElementById("rueckmeldung");
  r.style.display = "block";
  if (fehler.length > 0) {
    r.className = "rueckmeldung warn";
    r.innerHTML = "Deine Antwort: <em>\"" + antwort + "\"</em><br><br><strong>Moegliche Fehler:</strong><ul>" +
      fehler.map(function(f){ return "<li>" + f + "</li>"; }).join("") + "</ul>";
  } else {
    r.className = "rueckmeldung gut";
    var msgs = ["Super gemacht! Besprich deine Antwort mit deiner Lehrerin.",
                "Toll! Weiter so!", "Sehr schoen geschrieben!"];
    r.innerHTML = "&#10003; " + msgs[Math.floor(Math.random() * msgs.length)] + "<br><em style='color:#BB8888'>" + antwort + "</em>";
  }
}

function naechste() {
  document.getElementById("antwort-feld").disabled = false;
  document.getElementById("antwort-bereich").disabled = false;
  generiereAufgabe();
}

function aktualisiereAnzeige() {
  document.getElementById("z-gesamt").textContent  = gesamt;
  document.getElementById("z-richtig").textContent = richtig;
  document.getElementById("z-punkte").textContent  = punkte;
}

window.onload = function() { neuerZufallssatz(); };
