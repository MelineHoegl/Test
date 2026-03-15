// ============================================================
//  SATZ DER WOCHE – Deutsch App
// ============================================================

// ── Zufallssatz-Datenbank ─────────────────────────────────────
var SAETZE = [
  "Der kleine Hund bellt laut im Garten.",
  "Die bunte Katze schläft auf dem warmen Sofa.",
  "Ein wilder Fuchs läuft durch den dunklen Wald.",
  "Die warme Sonne scheint auf die blühende Wiese.",
  "Ein kalter Wind weht über das weite Feld.",
  "Das klare Wasser des Baches fließt über die Steine.",
  "Die Schüler lernen fleißig für die Prüfung.",
  "Das Mädchen liest ein spannendes Buch.",
  "Der Lehrer erklärt die schwierige Aufgabe geduldig.",
  "Die Kinder spielen nach der Schule auf dem Spielplatz.",
  "Der Spieler schießt das Tor im letzten Moment.",
  "Tom fährt jeden Nachmittag mit dem Fahrrad durch den Park.",
  "Die Kinder bauen eine riesige Sandburg am Strand.",
  "Das frische Brot duftet herrlich aus dem Ofen.",
  "Das mutige Mädchen springt furchtlos ins kalte Wasser.",
  "Ein tapferer Ritter reitet durch den finsteren Wald.",
  "Das glückliche Kind lacht laut über den lustigen Clown.",
  "Die Familie fährt mit dem Zug in eine fremde Stadt.",
  "Das alte Schloss steht auf einem hohen Berg.",
  "Die Touristen fotografieren den schönen Sonnenuntergang.",
  "Der alte Mann geht jeden Abend mit seinem Hund spazieren.",
  "Das kleine Mädchen singt ein schönes Lied.",
  "Die fleißige Biene sammelt Nektar von der Blume.",
  "Der neugierige Junge öffnet vorsichtig die alte Truhe.",
  "Ein kleiner Vogel singt sein Lied auf dem höchsten Ast.",
  "Die Großmutter strickt einen warmen Schal für den Winter.",
  "Der Bauer pflügt früh morgens sein weites Feld.",
  "Das müde Kind schläft friedlich in seinem Bett.",
  "Im Herbst fallen die bunten Blätter von den Bäumen.",
  "Der Regen trommelt laut auf das Dach."
];

// ── Aufgaben-Datenbank ────────────────────────────────────────
// Jede Übung hat mehrere Aufgaben-Varianten die rotiert werden

var AUFGABEN = {

  wortarten: [
    { frage: "Welche Wortart ist <strong>\"{W}\"</strong>?", optionen: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Adverb"], tipp: "Nomen = Dinge/Personen (groß) · Verb = Tätigkeit · Adjektiv = Eigenschaft" },
    { frage: "Bestimme die Wortart von <strong>\"{W}\"</strong>:", optionen: ["Nomen","Verb","Adjektiv","Artikel","Pronomen","Präposition"], tipp: "Frage: Ist es eine Person/Sache? → Nomen. Eine Tätigkeit? → Verb. Eine Eigenschaft? → Adjektiv." }
  ],

  zeitformen: [
    { frage: "Schreibe den Satz im <strong>Präteritum</strong> (einfache Vergangenheit):", beispiel: "z.B. Der Hund bellt. → Der Hund bellte.", zeitform: "Präteritum" },
    { frage: "Schreibe den Satz im <strong>Perfekt</strong> (vollendete Vergangenheit):", beispiel: "z.B. Der Hund bellt. → Der Hund hat gebellt.", zeitform: "Perfekt" },
    { frage: "Schreibe den Satz im <strong>Futur I</strong> (Zukunft):", beispiel: "z.B. Der Hund bellt. → Der Hund wird bellen.", zeitform: "Futur I" }
  ],

  satzglieder: [
    { frage: "Finde das <strong>Subjekt</strong> (= Wer oder was?) im Satz:", tipp: "Frage: Wer oder was tut etwas? Das ist das Subjekt." },
    { frage: "Finde das <strong>Prädikat</strong> (= Was tut das Subjekt?) im Satz:", tipp: "Das Prädikat ist das Verb – es sagt aus, was passiert." },
    { frage: "Finde eine <strong>Adverbiale Bestimmung</strong> (= Wo? Wann? Wie?) im Satz:", tipp: "Adverbiale Bestimmungen sagen uns wo, wann oder wie etwas passiert." }
  ],

  plural: [
    { frage: "Bilde den Plural von <strong>\"{N}\"</strong> mit dem richtigen Artikel:", tipp: "z.B. der Hund → die Hunde · das Kind → die Kinder · die Blume → die Blumen" },
    { frage: "Wie lautet die Mehrzahl von <strong>\"{N}\"</strong>? Schreibe auch den Artikel:", tipp: "Im Plural steht immer: die. z.B. die Hunde / die Kinder / die Blumen" }
  ],

  steigerung: [
    { frage: "Bilde die Steigerungsformen von <strong>\"{W}\"</strong>:", tipp: "Grundstufe → Komparativ → Superlativ · z.B. schnell → schneller → am schnellsten" },
    { frage: "Steigere das Wort <strong>\"{W}\"</strong> – alle drei Stufen:", tipp: "1. Grundstufe (normal) · 2. Komparativ (+er) · 3. Superlativ (am ...sten)" }
  ],

  verneinung: [
    { frage: "Verneige den Satz mit <strong>\"nicht\"</strong> oder <strong>\"kein\"</strong>:", tipp: 'Verben verneint man mit "nicht". Nomen verneint man mit "kein/keine/keinen".' },
    { frage: "Schreibe den Satz als <strong>Verneinung</strong>:", tipp: 'z.B. Der Hund bellt. → Der Hund bellt nicht.' }
  ],

  erweitern: [
    { frage: "Erweitere den Satz mit einer <strong>Zeitangabe</strong> (Wann?):", tipp: "z.B. morgens · abends · jeden Tag · manchmal · im Winter · um 8 Uhr" },
    { frage: "Ergänze den Satz mit einer <strong>Ortsangabe</strong> (Wo genau?):", tipp: "z.B. im Wald · auf der Wiese · hinter dem Haus · am Fluss" },
    { frage: "Erweitere den Satz: <strong>Wie</strong> genau passiert das?", tipp: "z.B. sehr schnell · leise · mit einem Lächeln · voller Freude" },
    { frage: "Füge dem Satz einen <strong>Grund</strong> hinzu (Warum?):", tipp: 'Nutze "weil", "denn" oder "da". Vor "weil" kommt immer ein Komma!' }
  ],

  umstellen: [
    { frage: "Stelle den Satz um – beginne <strong>nicht</strong> mit dem Subjekt:", tipp: "Das Verb steht immer an zweiter Stelle! z.B. Der Hund bellt heute. → Heute bellt der Hund." },
    { frage: "Schreibe den Satz in einer anderen Reihenfolge (Verb an 2. Stelle!):", tipp: "Beginne mit einem anderen Satzteil. Das Verb bleibt immer an Stelle 2." }
  ],

  frage: [
    { frage: "Forme den Satz in eine <strong>Ja/Nein-Frage</strong> um:", tipp: "Bei Ja/Nein-Fragen steht das Verb an erster Stelle. z.B. Der Hund bellt. → Bellt der Hund?" },
    { frage: "Schreibe eine <strong>W-Frage</strong> (Wer/Was/Wo/Wann/Warum?) zum Satz:", tipp: "W-Fragen beginnen mit einem Fragewort. z.B. Wer bellt im Garten?" }
  ],

  geschichte: [
    { frage: "Schreibe eine <strong>Mini-Geschichte (3 Sätze)</strong>, in der dieser Satz vorkommt:", tipp: "Was passierte davor? Was passierte danach? Lass deiner Fantasie freien Lauf!" },
    { frage: "Erzähle eine kurze Geschichte (3 Sätze) rund um diesen Satz:", tipp: "Denke an: Wer ist dabei? Was passiert vorher und nachher?" }
  ],

  synonyme: [
    { frage: "Finde <strong>2 Synonyme</strong> (ähnliche Wörter) für <strong>\"{W}\"</strong>:", tipp: "Synonyme haben eine ähnliche Bedeutung. z.B. schön → hübsch, wunderschön, prächtig" },
    { frage: "Welche anderen Wörter könntest du statt <strong>\"{W}\"</strong> benutzen?", tipp: "Suche Wörter mit ähnlicher Bedeutung – mindestens 2 Stück!" }
  ],

  wortumwandlung: [
    { frage: "Forme <strong>\"{W}\"</strong> in ein <strong>Nomen</strong> um (falls möglich):", tipp: "Verb → Nomen: laufen → das Laufen · Adjektiv → Nomen: schnell → die Schnelligkeit" },
    { frage: "Leite von <strong>\"{N}\"</strong> ein <strong>Verb</strong> ab (falls möglich):", tipp: "Nomen → Verb: der Tanz → tanzen · der Kauf → kaufen · die Arbeit → arbeiten" },
    { frage: "Bilde eine <strong>Wortfamilie</strong> zu <strong>\"{W}\"</strong> (mindestens 3 Wörter):", tipp: "z.B. laufen → der Läufer, der Lauf, weglaufen, hinlaufen, gelaufen" }
  ]
};

// ── Rechtschreibregeln ────────────────────────────────────────
var REGELN = [
  { test: function(s){ return s.length > 0 && s[0] !== s[0].toUpperCase(); },
    hinweis: "Der erste Buchstabe muss großgeschrieben werden." },
  { test: function(s){ return !/[.!?]$/.test(s.trim()); },
    hinweis: "Am Ende des Satzes fehlt ein Satzzeichen (. ! ?)." },
  { test: function(s){ return /  /.test(s); },
    hinweis: "Doppelte Leerzeichen gefunden – bitte nur ein Leerzeichen." }
];

function pruefeRechtschreibung(satz) {
  var fehler = [];
  REGELN.forEach(function(r){ if(r.test(satz)) fehler.push(r.hinweis); });
  return fehler;
}

// ── Zustand ───────────────────────────────────────────────────
var aktiverSatz  = "";
var aktiveUebung = "";
var zufallsIdx   = -1;
var schlangen    = {};   // Schlange pro Übungstyp
var gesamt = 0, richtig = 0, falsch = 0;

// ── Hilfsfunktionen ───────────────────────────────────────────
function mische(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function zufallsWort() {
  var woerter = aktiverSatz.replace(/[.,!?]/g,"").split(" ").filter(function(w){ return w.length > 1; });
  return woerter[Math.floor(Math.random() * woerter.length)] || "Wort";
}

function zufallsNomen() {
  var woerter = aktiverSatz.replace(/[.,!?]/g,"").split(" ").filter(function(w){
    return w.length > 2 && w[0] === w[0].toUpperCase() &&
      !/^(Der|Die|Das|Ein|Eine|Ich|Du|Er|Sie|Es|Wir|Ihr|Im|Ins|Am|Zum|Zur|Auf|Den|Dem|Des)$/.test(w);
  });
  return woerter.length > 0 ? woerter[Math.floor(Math.random() * woerter.length)] : zufallsWort();
}

function satzBox() {
  return '<span class="satz-hervorhebung">' + aktiverSatz + '</span>';
}

function naechsteAusSchlange(typ) {
  var liste = AUFGABEN[typ];
  if (!liste || liste.length === 0) return null;
  if (!schlangen[typ] || schlangen[typ].length === 0) {
    schlangen[typ] = mische(liste.slice());
  }
  return schlangen[typ].pop();
}

// ── Tab wechseln ──────────────────────────────────────────────
function zeigeQuelle(q) {
  document.getElementById("tab-eigener").classList.toggle("aktiv", q === "eigener");
  document.getElementById("tab-zufall").classList.toggle("aktiv",  q === "zufall");
  document.getElementById("panel-eigener").classList.toggle("sichtbar", q === "eigener");
  document.getElementById("panel-zufall").classList.toggle("sichtbar",  q === "zufall");
  if (q === "zufall" && zufallsIdx < 0) neuerZufallssatz();
}

// ── Zufallssatz ───────────────────────────────────────────────
function neuerZufallssatz() {
  var idx;
  do { idx = Math.floor(Math.random() * SAETZE.length); }
  while (idx === zufallsIdx && SAETZE.length > 1);
  zufallsIdx = idx;
  document.getElementById("zufall-anzeige").textContent = SAETZE[idx];
}

function ladeZufallssatz() {
  if (zufallsIdx < 0) neuerZufallssatz();
  ladeSatz(SAETZE[zufallsIdx]);
}

// ── Eigener Satz laden ────────────────────────────────────────
function ladeEigenenSatz() {
  var val = document.getElementById("eigener-satz").value.trim();
  if (!val) { alert("Bitte gib deinen Satz ein!"); return; }
  var fehler = pruefeRechtschreibung(val);
  var box = document.getElementById("hinweis-box");
  if (fehler.length > 0) {
    box.style.display = "block";
    box.innerHTML = "<strong>Mögliche Fehler:</strong><ul>" +
      fehler.map(function(f){ return "<li>" + f + "</li>"; }).join("") + "</ul>";
  } else {
    box.style.display = "none";
  }
  ladeSatz(val);
}

function ladeSatz(satz) {
  aktiverSatz = satz;
  var el = document.getElementById("aktueller-satz");
  el.style.display = "block";
  el.innerHTML = "💬 <strong>Aktueller Satz:</strong> " + satz;
  document.getElementById("uebung-bereich").style.display = "block";
  document.getElementById("aufgabe-karte").style.display = "none";
  document.querySelectorAll(".uebung-btn").forEach(function(b){ b.classList.remove("aktiv"); });
}

// ── Kategorie filtern ─────────────────────────────────────────
function filterKat(kat, btn) {
  document.querySelectorAll(".kat-btn").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  document.querySelectorAll(".uebung-btn[data-kat]").forEach(function(b){
    b.classList.toggle("versteckt", kat !== "alle" && b.dataset.kat !== kat);
  });
}

// ── Übung starten ─────────────────────────────────────────────
function startUebung(btn) {
  if (!aktiverSatz) { alert("Bitte zuerst einen Satz laden!"); return; }
  aktiveUebung = btn.dataset.id;
  document.querySelectorAll(".uebung-btn").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  document.getElementById("aufgabe-karte").style.display = "block";
  document.getElementById("aufgabe-karte").scrollIntoView({ behavior: "smooth", block: "nearest" });
  generiereAufgabe();
}

// ── UI zurücksetzen ───────────────────────────────────────────
function resetUI() {
  document.getElementById("mc-liste").innerHTML = "";
  document.getElementById("mc-liste").style.display = "none";
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

// ── Aufgabe generieren ────────────────────────────────────────
function generiereAufgabe() {
  resetUI();
  var vorlage = naechsteAusSchlange(aktiveUebung);
  if (!vorlage) return;

  var w = zufallsWort();
  var n = zufallsNomen();
  var typEl  = document.getElementById("aufgabe-typ");
  var textEl = document.getElementById("aufgabe-text");
  var tippEl = document.getElementById("tipp-box");

  var typNamen = {
    wortarten: "🔤 Wortarten bestimmen",
    zeitformen: "⏰ Zeitformen",
    satzglieder: "🏷️ Satzglieder",
    plural: "📚 Plural bilden",
    steigerung: "📈 Steigerung",
    verneinung: "🚫 Verneinung",
    erweitern: "➕ Satz erweitern",
    umstellen: "🔀 Satz umstellen",
    frage: "🙋 Frage formulieren",
    geschichte: "📖 Mini-Geschichte",
    synonyme: "💬 Synonyme",
    wortumwandlung: "🔁 Wortumwandlung"
  };
  typEl.textContent = typNamen[aktiveUebung] || "";

  // Platzhalter ersetzen
  var frage = vorlage.frage
    .replace(/\{W\}/g, w)
    .replace(/\{N\}/g, n);
  textEl.innerHTML = frage + "<br>" + satzBox();

  // Tipp anzeigen
  if (vorlage.tipp) {
    tippEl.style.display = "block";
    tippEl.innerHTML = "💡 " + (vorlage.beispiel ? vorlage.beispiel : vorlage.tipp);
  }

  // ── Je nach Übungstyp: MC oder Eingabe ──
  if (aktiveUebung === "wortarten") {
    zeigeMC(vorlage.optionen, null);
  } else if (aktiveUebung === "satzglieder" || aktiveUebung === "plural" || aktiveUebung === "steigerung" || aktiveUebung === "synonyme") {
    zeigeEingabe(false);
  } else if (aktiveUebung === "verneinung" || aktiveUebung === "umstellen" || aktiveUebung === "frage" || aktiveUebung === "zeitformen" || aktiveUebung === "erweitern" || aktiveUebung === "wortumwandlung") {
    zeigeEingabe(true);
  } else if (aktiveUebung === "geschichte") {
    zeigeEingabe(true, 120);
  }
}

// ── MC anzeigen ───────────────────────────────────────────────
function zeigeMC(optionen, richtigeAntwort) {
  var mc = document.getElementById("mc-liste");
  mc.style.display = "flex";
  document.getElementById("pruefen-btn").style.display = "none";
  mische(optionen).forEach(function(opt) {
    var b = document.createElement("button");
    b.className = "mc-btn";
    b.textContent = opt;
    b.onclick = function() {
      document.querySelectorAll(".mc-btn").forEach(function(x){ x.disabled = true; });
      // Wortarten: offene Aufgabe → immer positiv
      b.classList.add("richtig");
      gesamt++; richtig++;
      aktualisiereAnzeige();
      var r = document.getElementById("rueckmeldung");
      r.style.display = "block";
      r.className = "rueckmeldung offen";
      r.innerHTML = "Du hast <strong>\"" + opt + "\"</strong> gewählt. ✅<br>Besprich die Antwort mit deiner Lehrerin!";
      document.getElementById("weiter-btn").style.display = "inline-flex";
    };
    mc.appendChild(b);
  });
}

// ── Eingabefeld anzeigen ──────────────────────────────────────
function zeigeEingabe(textarea, hoehe) {
  if (textarea) {
    var ta = document.getElementById("antwort-bereich");
    ta.style.display = "block";
    if (hoehe) ta.style.minHeight = hoehe + "px";
    ta.focus();
  } else {
    var f = document.getElementById("antwort-feld");
    f.style.display = "block";
    f.focus();
  }
}

// ── Antwort prüfen ────────────────────────────────────────────
function pruefen() {
  var feldEl    = document.getElementById("antwort-feld");
  var bereichEl = document.getElementById("antwort-bereich");
  var istTextarea = bereichEl.style.display !== "none";
  var antwort = istTextarea ? bereichEl.value.trim() : feldEl.value.trim();
  if (!antwort) {
    (istTextarea ? bereichEl : feldEl).focus();
    return;
  }

  var fehler = pruefeRechtschreibung(antwort);
  gesamt++; richtig++;
  aktualisiereAnzeige();

  feldEl.disabled = true;
  bereichEl.disabled = true;
  document.getElementById("pruefen-btn").style.display = "none";
  document.getElementById("weiter-btn").style.display = "inline-flex";

  var r = document.getElementById("rueckmeldung");
  r.style.display = "block";

  if (fehler.length > 0) {
    falsch++;
    richtig--;  // korrigieren
    r.className = "rueckmeldung falsch";
    r.innerHTML = "⚠️ Deine Antwort: <em>\"" + antwort + "\"</em><br>" +
      "<strong>Bitte überprüfe folgendes:</strong><ul>" +
      fehler.map(function(f){ return "<li>" + f + "</li>"; }).join("") +
      "</ul>Verbessere es beim nächsten Mal!";
    aktualisiereAnzeige();
  } else {
    var msgs = [
      "Super gemacht! ✅",
      "Toll! Das war richtig! ✅",
      "Sehr schön! Weiter so! ✅"
    ];
    r.className = "rueckmeldung gut";
    r.innerHTML = msgs[Math.floor(Math.random() * msgs.length)] +
      "<br><small>Besprich deine Antwort gerne mit deiner Lehrerin.</small>";
  }
}

// ── Nächste Aufgabe ───────────────────────────────────────────
function naechste() {
  document.getElementById("antwort-feld").disabled = false;
  document.getElementById("antwort-bereich").disabled = false;
  generiereAufgabe();
}

// ── Anzeige aktualisieren ────────────────────────────────────
function aktualisiereAnzeige() {
  document.getElementById("z-gesamt").textContent  = gesamt;
  document.getElementById("z-richtig").textContent = richtig;
  document.getElementById("z-falsch").textContent  = falsch;
}

// ── Start ──────────────────────────────────────────────────────
window.onload = function() { neuerZufallssatz(); };
