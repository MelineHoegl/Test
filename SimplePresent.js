// ============================================================
//  SIMPLE PRESENT – Englisch App
// ============================================================

// ── Quick Reminder ────────────────────────────────────────────
function toggleReminder() {
  var inhalt = document.getElementById("reminder-inhalt");
  var pfeil  = document.getElementById("pfeil");
  var offen  = inhalt.classList.toggle("offen");
  pfeil.classList.toggle("offen", offen);
}

// ── Aufgaben-Datenbank ────────────────────────────────────────
var DB = {

  anfaenger: {
    right_form: [
      { f:"Choose the correct form:<br><strong>She ___ to school every day.</strong>", o:["go","goes","going","goed"], r:"goes", e:"With he/she/it we add -s ➜ she <u>goes</u>." },
      { f:"Choose the correct form:<br><strong>They ___ football on Sundays.</strong>", o:["plays","play","playing","playes"], r:"play", e:"With they/we/you/I: no -s ➜ they <u>play</u>." },
      { f:"Choose the correct form:<br><strong>He ___ TV every evening.</strong>", o:["watch","watchs","watches","watching"], r:"watches", e:"-ch endings get -es ➜ he <u>watches</u>." },
      { f:"Choose the correct form:<br><strong>I ___ my homework after school.</strong>", o:["does","do","doing","doed"], r:"do", e:"With I: no -s ➜ I <u>do</u>." },
      { f:"Choose the correct form:<br><strong>The dog ___ at strangers.</strong>", o:["bark","barkes","barks","barking"], r:"barks", e:"With it: add -s ➜ it <u>barks</u>." },
      { f:"Choose the correct form:<br><strong>We ___ lunch at noon.</strong>", o:["has","have","having","haves"], r:"have", e:"With we: no -s ➜ we <u>have</u>." },
      { f:"Choose the correct form:<br><strong>My mum ___ dinner every night.</strong>", o:["cook","cookes","cooks","cooking"], r:"cooks", e:"With she: add -s ➜ she <u>cooks</u>." },
      { f:"Choose the correct form:<br><strong>The baby ___ every night.</strong>", o:["cry","crys","cries","crying"], r:"cries", e:"Consonant + y ➜ -ies: baby <u>cries</u>." },
      { f:"Choose the correct form:<br><strong>He ___ his teeth twice a day.</strong>", o:["brush","brushs","brushes","brushing"], r:"brushes", e:"-sh endings get -es ➜ he <u>brushes</u>." },
      { f:"Choose the correct form:<br><strong>She ___ the piano very well.</strong>", o:["plays","play","playing","playes"], r:"plays", e:"With she: add -s ➜ she <u>plays</u>." },
      { f:"Choose the correct form:<br><strong>My dad ___ to work by car.</strong>", o:["drive","drives","driving","drived"], r:"drives", e:"With he: add -s ➜ he <u>drives</u>." },
      { f:"Choose the correct form:<br><strong>The cat ___ on the sofa all day.</strong>", o:["sleep","sleeps","sleeping","sleepes"], r:"sleeps", e:"With it: add -s ➜ it <u>sleeps</u>." }
    ],
    fill_gap: [
      { f:"Fill in the blank:<br><strong>He ___ (to read) a book every night.</strong>", r:"reads", e:"he + verb + s ➜ he <u>reads</u>." },
      { f:"Fill in the blank:<br><strong>They ___ (to live) in London.</strong>", r:"live", e:"they + verb (no -s) ➜ they <u>live</u>." },
      { f:"Fill in the blank:<br><strong>She ___ (to wash) the dishes.</strong>", r:"washes", e:"-sh ➜ -es: she <u>washes</u>." },
      { f:"Fill in the blank:<br><strong>I ___ (to like) pizza.</strong>", r:"like", e:"I + verb (no -s) ➜ I <u>like</u>." },
      { f:"Fill in the blank:<br><strong>The cat ___ (to sleep) all day.</strong>", r:"sleeps", e:"it + verb + s ➜ it <u>sleeps</u>." },
      { f:"Fill in the blank:<br><strong>We ___ (to go) to school by bus.</strong>", r:"go", e:"we + verb (no -s) ➜ we <u>go</u>." },
      { f:"Fill in the blank:<br><strong>My sister ___ (to have) a dog.</strong>", r:"has", e:"she ➜ has (irregular!)." },
      { f:"Fill in the blank:<br><strong>He ___ (to do) his homework after school.</strong>", r:"does", e:"he ➜ does (irregular!)." },
      { f:"Fill in the blank:<br><strong>The bird ___ (to fly) south in winter.</strong>", r:"flies", e:"consonant + y ➜ -ies: it <u>flies</u>." },
      { f:"Fill in the blank:<br><strong>You ___ (to speak) English very well.</strong>", r:"speak", e:"you + verb (no -s) ➜ you <u>speak</u>." },
      { f:"Fill in the blank:<br><strong>She ___ (to watch) cartoons on Saturdays.</strong>", r:"watches", e:"-ch ➜ -es: she <u>watches</u>." },
      { f:"Fill in the blank:<br><strong>My parents ___ (to work) in an office.</strong>", r:"work", e:"they + verb (no -s) ➜ they <u>work</u>." }
    ],
    pronoun: [
      { f:"Which pronoun fits?<br><strong>___ goes to school by bus.</strong> (female, singular)", o:["I","He","She","They"], r:"She", e:"She = female, singular ➜ verb + s." },
      { f:"Which pronoun fits?<br><strong>___ play football every Saturday.</strong> (a group)", o:["He","She","They","It"], r:"They", e:"They = plural ➜ no -s on verb." },
      { f:"Which pronoun fits?<br><strong>___ barks at strangers.</strong> (a dog)", o:["I","She","They","It"], r:"It", e:"It = animal/thing ➜ verb + s." },
      { f:"Which pronoun fits?<br><strong>___ reads a book before bed.</strong> (male, singular)", o:["I","He","We","You"], r:"He", e:"He = male, singular ➜ verb + s." },
      { f:"Which pronoun fits?<br><strong>___ go swimming on Fridays.</strong> (you and your friend)", o:["I","He","We","She"], r:"We", e:"We = you + others ➜ no -s on verb." },
      { f:"Which pronoun fits?<br><strong>___ has a cat and a dog.</strong> (a girl)", o:["He","She","They","We"], r:"She", e:"She = female ➜ has (irregular)." },
      { f:"Which pronoun fits?<br><strong>___ love chocolate.</strong> (speaking about yourself)", o:["He","She","I","We"], r:"I", e:"I = yourself ➜ no -s." },
      { f:"Which pronoun fits?<br><strong>___ shines brightly today.</strong> (the sun)", o:["I","He","It","They"], r:"It", e:"It = thing/nature ➜ verb + s." }
    ]
  },

  fortgeschritten: {
    right_form: [
      { f:"Choose the correct negative:<br><strong>He ___ vegetables.</strong>", o:["don't eat","doesn't eat","doesn't eats","not eat"], r:"doesn't eat", e:"he/she/it ➜ doesn't + verb (no -s)." },
      { f:"Choose the correct negative:<br><strong>They ___ the rules.</strong>", o:["doesn't follow","don't follow","not follow","don't follows"], r:"don't follow", e:"they ➜ don't + verb." },
      { f:"Choose the correct question:<br><strong>___ she speak French?</strong>", o:["Do","Does","Is","Has"], r:"Does", e:"she ➜ Does + subject + verb (no -s)." },
      { f:"Choose the correct question:<br><strong>___ your parents work in the city?</strong>", o:["Does","Do","Is","Are"], r:"Do", e:"they (parents) ➜ Do + subject + verb." },
      { f:"Choose: She usually ___ her homework before dinner.", o:["do","does","is doing","did"], r:"does", e:"she ➜ does (positive, irregular)." },
      { f:"Choose: ___ it often ___ in England?", o:["Do / rain","Does / rains","Does / rain","Do / rains"], r:"Does / rain", e:"it ➜ Does + verb without -s in questions." },
      { f:"Choose: My brother ___ his room every Saturday.", o:["clean","cleans","is clean","do clean"], r:"cleans", e:"he (brother) ➜ verb + s: cleans." },
      { f:"Choose: He ___ football but he ___ tennis.", o:["plays / doesn't play","play / don't plays","plays / don't play","play / doesn't plays"], r:"plays / doesn't play", e:"he: plays (positive) / doesn't play (negative)." }
    ],
    fill_gap: [
      { f:"Fill in:<br><strong>She ___ (not / like) spicy food.</strong>", r:"doesn't like", e:"she ➜ doesn't + verb (no -s)." },
      { f:"Fill in:<br><strong>___ your brother ___ (play) in a band?</strong>", r:"Does / play", e:"he ➜ Does + subject + verb (no -s)." },
      { f:"Fill in:<br><strong>We ___ (not / have) school on Sundays.</strong>", r:"don't have", e:"we ➜ don't + verb." },
      { f:"Fill in:<br><strong>She always ___ (arrive) late to class.</strong>", r:"arrives", e:"she ➜ verb + s: arrives." },
      { f:"Fill in:<br><strong>___ he ___ (go) to the gym every morning?</strong>", r:"Does / go", e:"he ➜ Does + subject + verb (no -s)." },
      { f:"Fill in:<br><strong>They ___ (not / understand) the question.</strong>", r:"don't understand", e:"they ➜ don't + verb." },
      { f:"Fill in:<br><strong>My dog always ___ (hide) under the bed during storms.</strong>", r:"hides", e:"it ➜ verb + s: hides." },
      { f:"Fill in:<br><strong>___ you ___ (know) the answer?</strong>", r:"Do / know", e:"you ➜ Do + subject + verb." }
    ],
    build: [
      { w:["She","every","morning","runs","in","the","park"], r:"She runs in the park every morning." },
      { w:["My","usually","brushes","dad","his","teeth","before","bed"], r:"My dad usually brushes his teeth before bed." },
      { w:["We","usually","play","football","on","Sundays"], r:"We usually play football on Sundays." },
      { w:["The","man","reads","the","newspaper","every","day"], r:"The man reads the newspaper every day." },
      { w:["She","does","not","like","spicy","food"], r:"She does not like spicy food." },
      { w:["Does","he","go","to","school","every","day"], r:"Does he go to school every day." },
      { w:["They","don't","speak","English","at","home"], r:"They don't speak English at home." },
      { w:["My","cat","always","sleeps","on","the","sofa"], r:"My cat always sleeps on the sofa." },
      { w:["Do","your","parents","watch","TV","in","the","evenings"], r:"Do your parents watch TV in the evenings." },
      { w:["He","never","forgets","his","homework"], r:"He never forgets his homework." }
    ],
    pronoun: [
      { f:"Which pronoun fits?<br><strong>___ doesn't like getting up early.</strong> (male)", o:["I","He","We","They"], r:"He", e:"He = male, singular ➜ doesn't." },
      { f:"Which pronoun fits?<br><strong>___ don't have a garden.</strong> (two people)", o:["She","He","They","It"], r:"They", e:"They = plural ➜ don't." },
      { f:"Which pronoun fits?<br><strong>___ doesn't work on Sundays.</strong> (a shop)", o:["I","They","It","We"], r:"It", e:"It = thing/place ➜ doesn't." },
      { f:"Which pronoun fits?<br><strong>___ don't understand this exercise.</strong> (yourself)", o:["He","She","I","It"], r:"I", e:"I = yourself ➜ don't." },
      { f:"Which pronoun fits?<br><strong>___ doesn't speak German.</strong> (a female friend)", o:["I","He","She","We"], r:"She", e:"She = female, singular ➜ doesn't." },
      { f:"Which pronoun fits?<br><strong>___ don't go to school on weekends.</strong> (you + class)", o:["He","She","We","It"], r:"We", e:"We = group including you ➜ don't." }
    ],
    mistakes: [
      { f:"Find the mistake:<br><em>\"She don't like cats.\"</em>", r:"She doesn't like cats.", e:"With she/he/it: <u>doesn't</u> (not don't)." },
      { f:"Find the mistake:<br><em>\"He go to school by bike.\"</em>", r:"He goes to school by bike.", e:"With he/she/it: add -s/-es ➜ he <u>goes</u>." },
      { f:"Find the mistake:<br><em>\"They doesn't watch TV.\"</em>", r:"They don't watch TV.", e:"With they/we/you/I: <u>don't</u> (not doesn't)." },
      { f:"Find the mistake:<br><em>\"My sister have a dog.\"</em>", r:"My sister has a dog.", e:"With she/he/it: have ➜ <u>has</u> (irregular)." },
      { f:"Find the mistake:<br><em>\"Does she likes music?\"</em>", r:"Does she like music?", e:"After Does: verb without -s ➜ Does she <u>like</u>?" },
      { f:"Find the mistake:<br><em>\"Do he plays football?\"</em>", r:"Does he play football?", e:"With he: <u>Does</u> (not Do), and no -s after Does." },
      { f:"Find the mistake:<br><em>\"She studys every evening.\"</em>", r:"She studies every evening.", e:"Consonant + y ➜ -ies: she <u>studies</u>." },
      { f:"Find the mistake:<br><em>\"I doesn't understand the question.\"</em>", r:"I don't understand the question.", e:"With I: <u>don't</u> (not doesn't)." },
      { f:"Find the mistake:<br><em>\"He don't have a brother.\"</em>", r:"He doesn't have a brother.", e:"With he: <u>doesn't</u> (not don't)." },
      { f:"Find the mistake:<br><em>\"We goes to school at 8 o'clock.\"</em>", r:"We go to school at 8 o'clock.", e:"With we: <u>go</u> (no -s)." }
    ]
  }
};

// ── Zustand ──────────────────────────────────────────────────
var level    = "anfaenger";
var uebung   = "right_form";
var schlange = [];
var wortListe = [];   // für Build a sentence
var gesamt = 0, richtig = 0, falsch = 0, streak = 0;
var aktuelleAufgabe = null;

// ── Helper: Mischen ──────────────────────────────────────────
function mische(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

// ── Schlange aufbauen (alle Aufgaben, keine Wiederholung bis alle durch) ──
function baueSchlange() {
  var quelle = DB[level][uebung];
  if (!quelle || quelle.length === 0) { schlange = []; return; }
  schlange = mische(quelle.slice());
}

// ── Level setzen ─────────────────────────────────────────────
function setLevel(l, btn) {
  level = l;
  document.querySelectorAll(".level-btn").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  // Übungstyp-Tabs ein-/ausblenden
  document.querySelectorAll(".ue-tab").forEach(function(t){
    var typ = t.dataset.typ;
    var nurFort = (typ === "build" || typ === "mistakes");
    if (nurFort && l === "anfaenger") {
      t.classList.add("versteckt");
      if (uebung === typ) { uebung = "right_form"; aktiveTabMarkieren("right_form"); }
    } else {
      t.classList.remove("versteckt");
    }
  });
  baueSchlange();
  naechste();
}

// ── Übung setzen ──────────────────────────────────────────────
function setUebung(typ, btn) {
  uebung = typ;
  document.querySelectorAll(".ue-tab").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  baueSchlange();
  naechste();
}

function aktiveTabMarkieren(typ) {
  document.querySelectorAll(".ue-tab").forEach(function(t){
    t.classList.toggle("aktiv", t.dataset.typ === typ);
  });
}

// ── UI zurücksetzen ───────────────────────────────────────────
function resetUI() {
  document.getElementById("mc-liste").innerHTML = "";
  document.getElementById("mc-liste").style.display = "none";
  document.getElementById("chip-vorrat").innerHTML = "";
  document.getElementById("chip-vorrat").style.display = "none";
  document.getElementById("antwort-slots").innerHTML = "";
  document.getElementById("antwort-slots").style.display = "none";
  document.getElementById("antwort-eingabe").style.display = "none";
  document.getElementById("antwort-eingabe").disabled = false;
  document.getElementById("antwort-eingabe").value = "";
  document.getElementById("check-btn").style.display = "inline-flex";
  document.getElementById("weiter-btn").style.display = "none";
  document.getElementById("rueckmeldung").style.display = "none";
  document.getElementById("rueckmeldung").className = "rueckmeldung";
  wortListe = [];
}

// ── Nächste Aufgabe laden ─────────────────────────────────────
function naechste() {
  resetUI();
  if (schlange.length === 0) { baueSchlange(); }
  aktuelleAufgabe = schlange.pop();
  if (!aktuelleAufgabe) { return; }

  var labels = {
    right_form: "🔤 Right Form – Choose the correct verb form",
    fill_gap:   "✏️ Fill the Gap – Type the correct form",
    pronoun:    "👤 Which Pronoun? – Choose the right subject",
    build:      "🔀 Build a Sentence – Tap words in the right order",
    mistakes:   "🔍 Find the Mistake – Write the correct sentence"
  };
  document.getElementById("aufgabe-typ").textContent   = labels[uebung] || "";
  document.getElementById("aufgabe-frage").innerHTML   = aktuelleAufgabe.f || "";

  if (uebung === "right_form" || uebung === "pronoun") {
    zeigeMC();
  } else if (uebung === "fill_gap") {
    zeigeEingabe("Type the correct form...");
  } else if (uebung === "mistakes") {
    zeigeEingabe("Write the correct sentence...");
  } else if (uebung === "build") {
    document.getElementById("aufgabe-frage").textContent = "Put the words in the correct order:";
    zeigeChips();
  }
}

// ── Multiple Choice ───────────────────────────────────────────
function zeigeMC() {
  var mc = document.getElementById("mc-liste");
  mc.style.display = "flex";
  document.getElementById("check-btn").style.display = "none";
  var gemischt = mische(aktuelleAufgabe.o);
  gemischt.forEach(function(opt) {
    var b = document.createElement("button");
    b.className = "mc-btn";
    b.textContent = opt;
    b.onclick = function() {
      document.querySelectorAll(".mc-btn").forEach(function(x){ x.disabled = true; });
      var korrekt = (opt === aktuelleAufgabe.r);
      if (korrekt) {
        b.classList.add("richtig");
      } else {
        b.classList.add("falsch");
        document.querySelectorAll(".mc-btn").forEach(function(x){
          if (x.textContent === aktuelleAufgabe.r) { x.classList.add("richtig"); }
        });
      }
      verarbeiteErgebnis(korrekt, aktuelleAufgabe.e);
    };
    mc.appendChild(b);
  });
}

// ── Eingabefeld ───────────────────────────────────────────────
function zeigeEingabe(placeholder) {
  var feld = document.getElementById("antwort-eingabe");
  feld.style.display = "block";
  feld.placeholder = placeholder;
  feld.focus();
}

// ── Wort-Chips ────────────────────────────────────────────────
function zeigeChips() {
  var vorrat = document.getElementById("chip-vorrat");
  var slots  = document.getElementById("antwort-slots");
  vorrat.style.display = "flex";
  slots.style.display  = "flex";
  // Leer-Hinweis
  var leer = document.createElement("span");
  leer.className = "antwort-slots-leer";
  leer.id = "slots-leer";
  leer.textContent = "Tap the words above ↑";
  slots.appendChild(leer);

  mische(aktuelleAufgabe.w).forEach(function(wort, idx) {
    var chip = document.createElement("div");
    chip.className = "wort-chip";
    chip.textContent = wort;
    chip.dataset.idx = idx;
    chip.onclick = function() { chipHinzufuegen(chip, wort); };
    vorrat.appendChild(chip);
  });
}

function chipHinzufuegen(chip, wort) {
  chip.classList.add("benutzt");
  wortListe.push({ wort: wort, chip: chip });
  var slots = document.getElementById("antwort-slots");
  // Leer-Hinweis entfernen
  var leer = document.getElementById("slots-leer");
  if (leer) { leer.remove(); }
  var slot = document.createElement("div");
  slot.className = "slot-chip";
  slot.textContent = wort;
  slot.onclick = function() { chipEntfernen(slot, chip); };
  slots.appendChild(slot);
}

function chipEntfernen(slot, chip) {
  slot.remove();
  chip.classList.remove("benutzt");
  wortListe = wortListe.filter(function(x){ return x.chip !== chip; });
  // Leer-Hinweis wieder zeigen wenn leer
  var slots = document.getElementById("antwort-slots");
  if (slots.children.length === 0) {
    var leer = document.createElement("span");
    leer.className = "antwort-slots-leer";
    leer.id = "slots-leer";
    leer.textContent = "Tap the words above ↑";
    slots.appendChild(leer);
  }
}

// ── Antwort prüfen ────────────────────────────────────────────
function checkAntwort() {
  var korrekt = false;
  var erklaerung = aktuelleAufgabe.e || "";

  if (uebung === "build") {
    var satz = wortListe.map(function(x){ return x.wort; }).join(" ");
    var ziel = aktuelleAufgabe.r || "";
    korrekt = (satz.toLowerCase().replace(/[.?!]/g,"").trim() === ziel.toLowerCase().replace(/[.?!]/g,"").trim());
    // Chips sperren
    document.querySelectorAll(".wort-chip").forEach(function(c){ c.onclick = null; c.style.opacity=".45"; });
    document.querySelectorAll(".slot-chip").forEach(function(c){ c.onclick = null; });
    if (!korrekt) { erklaerung = "Correct order: <strong>" + ziel + "</strong>"; }
  } else {
    var feld = document.getElementById("antwort-eingabe");
    var eingabe = feld.value.trim();
    if (!eingabe) { feld.focus(); return; }
    var zielText = aktuelleAufgabe.r || "";
    korrekt = (eingabe.toLowerCase() === zielText.toLowerCase());
    feld.disabled = true;
    if (!korrekt) { erklaerung = "Correct answer: <strong>" + zielText + "</strong>" + (erklaerung ? " – " + erklaerung : ""); }
  }

  verarbeiteErgebnis(korrekt, erklaerung);
}

// ── Ergebnis verarbeiten ──────────────────────────────────────
function verarbeiteErgebnis(korrekt, erklaerung) {
  gesamt++;
  if (korrekt) { richtig++; streak++; }
  else          { falsch++;  streak = 0; }
  aktualisiereAnzeige();

  document.getElementById("check-btn").style.display = "none";
  document.getElementById("weiter-btn").style.display = "inline-flex";

  var r = document.getElementById("rueckmeldung");
  r.style.display = "block";

  if (korrekt) {
    var msgs = [
      "Excellent! Well done!",
      "Perfect! Great job!",
      "Correct! Keep it up!",
      "Brilliant! You got it!"
    ];
    r.className = "rueckmeldung gut";
    r.innerHTML = "✅ " + msgs[Math.floor(Math.random() * msgs.length)] +
      (erklaerung ? "<br><small>" + erklaerung + "</small>" : "");
  } else {
    r.className = "rueckmeldung falsch";
    r.innerHTML = "❌ Not quite – " + (erklaerung || "Try again next time!") +
      "<br><small>Read the Quick Reminder above for the rule!</small>";
  }
}

// ── Anzeige aktualisieren ────────────────────────────────────
function aktualisiereAnzeige() {
  document.getElementById("z-gesamt").textContent = gesamt;
  document.getElementById("z-richtig").textContent = richtig;
  document.getElementById("z-falsch").textContent  = falsch;
  document.getElementById("z-streak").textContent  = streak > 0 ? streak : 0;
}

// ── Start ─────────────────────────────────────────────────────
window.onload = function() {
  // Build + Mistakes für Anfänger ausblenden
  document.querySelectorAll(".ue-tab").forEach(function(t){
    if (t.dataset.typ === "build" || t.dataset.typ === "mistakes") {
      t.classList.add("versteckt");
    }
  });
  baueSchlange();
  naechste();
};
