// ============================================================
//  RECHNEN MIT GELD – Mathe App 5b
// ============================================================

// ── Hilfsfunktionen ───────────────────────────────────────────
function mische(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function euro(zahl) {
  return zahl.toFixed(2).replace('.', ',') + ' €';
}

function runde(zahl, stellen) {
  var f = Math.pow(10, stellen);
  return Math.round(zahl * f) / f;
}

// ── Zufallszahlen ─────────────────────────────────────────────
function zufallInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function zufallPreis(min, max, schritt) {
  var schritte = Math.floor((max - min) / schritt);
  return runde(min + zufallInt(0, schritte) * schritt, 2);
}

// ── AUFGABEN-GENERATOREN ──────────────────────────────────────

var GENERATOREN = {

  // ── GRUNDRECHNEN ─────────────────────────────────────────────
  rechnen_a: [
    function() {
      var a = zufallPreis(0.50, 5.00, 0.10);
      var b = zufallPreis(0.10, 4.00, 0.10);
      return { frage: "Rechne: <strong>" + euro(a) + " + " + euro(b) + " = ?</strong>",
               antwort: runde(a + b, 2), einheit: "€",
               tipp: "Addiere die Beträge. Rechne erst die vollen Euro, dann die Cent.",
               typ: "🔢 Addition" };
    },
    function() {
      var a = zufallPreis(1.00, 8.00, 0.10);
      var b = zufallPreis(0.10, runde(a - 0.10, 2), 0.10);
      return { frage: "Rechne: <strong>" + euro(a) + " − " + euro(b) + " = ?</strong>",
               antwort: runde(a - b, 2), einheit: "€",
               tipp: "Subtrahiere die Beträge. Achte auf die Cent-Stellen.",
               typ: "🔢 Subtraktion" };
    },
    function() {
      var preis = zufallPreis(0.50, 3.00, 0.25);
      var anz = zufallInt(2, 6);
      return { frage: "Ein Artikel kostet <strong>" + euro(preis) + "</strong>. Du kaufst <strong>" + anz + " Stück</strong>. Was kostet das zusammen?",
               antwort: runde(preis * anz, 2), einheit: "€",
               tipp: "Multipliziere den Preis mit der Anzahl: " + euro(preis) + " × " + anz,
               typ: "🔢 Multiplikation" };
    },
    function() {
      var anz = zufallInt(2, 5);
      var gesamt = zufallPreis(anz * 0.50, anz * 3.00, 0.10 * anz);
      var einzel = runde(gesamt / anz, 2);
      return { frage: "<strong>" + anz + " gleiche Artikel</strong> kosten zusammen <strong>" + euro(gesamt) + "</strong>. Was kostet <strong>1 Artikel</strong>?",
               antwort: einzel, einheit: "€",
               tipp: "Teile den Gesamtpreis durch die Anzahl: " + euro(gesamt) + " ÷ " + anz,
               typ: "🔢 Division" };
    },
    function() {
      var a = zufallPreis(0.50, 4.00, 0.05);
      var b = zufallPreis(0.50, 4.00, 0.05);
      var c = zufallPreis(0.10, 2.00, 0.05);
      return { frage: "Addiere: <strong>" + euro(a) + " + " + euro(b) + " + " + euro(c) + " = ?</strong>",
               antwort: runde(a + b + c, 2), einheit: "€",
               tipp: "Addiere alle drei Beträge schrittweise.",
               typ: "🔢 Addition (3 Beträge)" };
    }
  ],

  rechnen_f: [
    function() {
      var a = zufallPreis(5.00, 50.00, 0.25);
      var b = zufallPreis(1.00, 30.00, 0.25);
      return { frage: "Rechne: <strong>" + euro(a) + " + " + euro(b) + " = ?</strong>",
               antwort: runde(a + b, 2), einheit: "€",
               tipp: "Addiere Euro und Cent getrennt, dann zusammen.",
               typ: "🔢 Addition" };
    },
    function() {
      var a = zufallPreis(10.00, 100.00, 0.50);
      var b = zufallPreis(0.50, runde(a - 0.50, 2), 0.50);
      return { frage: "Rechne: <strong>" + euro(a) + " − " + euro(b) + " = ?</strong>",
               antwort: runde(a - b, 2), einheit: "€",
               tipp: "Subtrahiere. Achte auf Über- oder Unterträge bei den Cent.",
               typ: "🔢 Subtraktion" };
    },
    function() {
      var preis = zufallPreis(2.99, 15.99, 1.00);
      var anz = zufallInt(3, 8);
      return { frage: "Ein Artikel kostet <strong>" + euro(preis) + "</strong>. Du kaufst <strong>" + anz + " Stück</strong>. Wie viel musst du zahlen?",
               antwort: runde(preis * anz, 2), einheit: "€",
               tipp: "Multipliziere: " + euro(preis) + " × " + anz + ". Rechne erst die Euro, dann die Cent.",
               typ: "🔢 Multiplikation" };
    },
    function() {
      var a = zufallPreis(5.00, 30.00, 0.50);
      var b = zufallPreis(1.00, 20.00, 0.50);
      var c = zufallPreis(0.50, 10.00, 0.50);
      return { frage: "Summe: <strong>" + euro(a) + " + " + euro(b) + " + " + euro(c) + " = ?</strong>",
               antwort: runde(a + b + c, 2), einheit: "€",
               tipp: "Addiere schrittweise: erst die ersten zwei, dann das Ergebnis mit dem dritten.",
               typ: "🔢 Addition (3 Beträge)" };
    },
    function() {
      var ges = zufallPreis(10.00, 60.00, 2.00);
      var anz = zufallInt(2, 6);
      var einzel = runde(ges / anz, 2);
      return { frage: "<strong>" + anz + " Personen</strong> teilen einen Betrag von <strong>" + euro(ges) + "</strong> gleichmäßig auf. Wie viel zahlt jede Person?",
               antwort: einzel, einheit: "€",
               tipp: "Dividiere: " + euro(ges) + " ÷ " + anz,
               typ: "🔢 Division" };
    }
  ],

  // ── WECHSELGELD ───────────────────────────────────────────────
  wechsel_a: [
    function() {
      var preis = zufallPreis(0.20, 4.50, 0.10);
      var geg = [0.50, 1.00, 2.00, 5.00].find(function(g){ return g > preis; });
      return { frage: "Du kaufst etwas für <strong>" + euro(preis) + "</strong> und gibst <strong>" + euro(geg) + "</strong>. Wie viel Wechselgeld bekommst du?",
               antwort: runde(geg - preis, 2), einheit: "€",
               tipp: "Wechselgeld = gegeben − Preis: " + euro(geg) + " − " + euro(preis),
               typ: "💵 Wechselgeld" };
    },
    function() {
      var preis = zufallPreis(1.10, 9.80, 0.10);
      var geg = 10.00;
      return { frage: "Du kaufst etwas für <strong>" + euro(preis) + "</strong> und zahlst mit einem <strong>10-Euro-Schein</strong>. Wie viel Wechselgeld erhältst du?",
               antwort: runde(geg - preis, 2), einheit: "€",
               tipp: "Wechselgeld = 10,00 € − " + euro(preis),
               typ: "💵 Wechselgeld" };
    },
    function() {
      var preis = zufallPreis(0.30, 4.70, 0.10);
      var geg = 5.00;
      return { frage: "An der Kasse kostet dein Einkauf <strong>" + euro(preis) + "</strong>. Du zahlst mit einem <strong>5-Euro-Schein</strong>. Wie viel Rückgeld bekommst du?",
               antwort: runde(geg - preis, 2), einheit: "€",
               tipp: "Rückgeld = 5,00 € − " + euro(preis),
               typ: "💵 Wechselgeld" };
    },
    function() {
      var preis = zufallPreis(2.10, 19.80, 0.10);
      var geg = 20.00;
      return { frage: "Du zahlst für einen Einkauf von <strong>" + euro(preis) + "</strong> mit einem <strong>20-Euro-Schein</strong>. Wie viel Wechselgeld erhältst du?",
               antwort: runde(geg - preis, 2), einheit: "€",
               tipp: "Wechselgeld = 20,00 € − " + euro(preis),
               typ: "💵 Wechselgeld" };
    }
  ],

  wechsel_f: [
    function() {
      var p1 = zufallPreis(1.00, 8.00, 0.25);
      var p2 = zufallPreis(0.50, 5.00, 0.25);
      var gesamt = runde(p1 + p2, 2);
      var geg = [10, 20, 50].find(function(g){ return g > gesamt; });
      return { frage: "Du kaufst zwei Artikel für <strong>" + euro(p1) + "</strong> und <strong>" + euro(p2) + "</strong>. Du zahlst mit einem <strong>" + geg + "-Euro-Schein</strong>. Wie viel Wechselgeld bekommst du?",
               antwort: runde(geg - gesamt, 2), einheit: "€",
               tipp: "Erst Summe: " + euro(p1) + " + " + euro(p2) + " = " + euro(gesamt) + ". Dann: " + geg + " € − " + euro(gesamt),
               typ: "💵 Wechselgeld (2 Artikel)" };
    },
    function() {
      var budget = zufallPreis(5.00, 20.00, 1.00);
      var preis = zufallPreis(1.00, runde(budget - 0.50, 2), 0.50);
      return { frage: "Du hast <strong>" + euro(budget) + "</strong> in der Tasche. Du kaufst etwas für <strong>" + euro(preis) + "</strong>. Wie viel Geld hast du danach noch übrig?",
               antwort: runde(budget - preis, 2), einheit: "€",
               tipp: "Restgeld = " + euro(budget) + " − " + euro(preis),
               typ: "💵 Wechselgeld" };
    },
    function() {
      var preis = zufallPreis(12.00, 48.00, 0.50);
      var geg = 50.00;
      return { frage: "Du kaufst ein Buch für <strong>" + euro(preis) + "</strong> und zahlst mit einem <strong>50-Euro-Schein</strong>. Wie viel Wechselgeld bekommst du?",
               antwort: runde(geg - preis, 2), einheit: "€",
               tipp: "Wechselgeld = 50,00 € − " + euro(preis),
               typ: "💵 Wechselgeld" };
    }
  ],

  // ── UMRECHNEN ────────────────────────────────────────────────
  umrechnen_a: [
    function() {
      var euro_val = zufallInt(1, 10);
      return { frage: "Wie viele Cent sind <strong>" + euro_val + " Euro</strong>?",
               antwort: euro_val * 100, einheit: "Cent",
               tipp: "1 Euro = 100 Cent. Also: " + euro_val + " × 100 = ?",
               typ: "🔄 Euro → Cent" };
    },
    function() {
      var cent = zufallInt(1, 9) * 100 + zufallInt(0, 9) * 10;
      return { frage: "Schreibe <strong>" + cent + " Cent</strong> als Euro-Betrag:",
               antwort: cent / 100, einheit: "€",
               tipp: "Teile die Cent durch 100: " + cent + " ÷ 100 = ?",
               typ: "🔄 Cent → Euro" };
    },
    function() {
      var e = zufallInt(1, 9);
      var c = zufallInt(1, 9) * 10;
      return { frage: "Wie viele Cent sind <strong>" + e + " Euro und " + c + " Cent</strong>?",
               antwort: e * 100 + c, einheit: "Cent",
               tipp: "Rechne: " + e + " × 100 + " + c + " = ?",
               typ: "🔄 Euro + Cent → Cent" };
    },
    function() {
      var cent = zufallInt(110, 990);
      var e = Math.floor(cent / 100);
      var c = cent % 100;
      var opts = [cent, cent + 10, cent - 10, cent + 100];
      return { frage: "Welcher Betrag entspricht <strong>" + e + " Euro und " + c + " Cent</strong>?",
               optionen: mische(opts.map(function(v){ return v + " Cent"; })),
               richtig: cent + " Cent",
               tipp: e + " Euro = " + (e*100) + " Cent + " + c + " Cent = ?",
               typ: "🔄 Umrechnen (MC)" };
    }
  ],

  umrechnen_f: [
    function() {
      var e = zufallInt(10, 99);
      var c = zufallInt(1, 99);
      return { frage: "Wie viele Cent sind <strong>" + e + "," + (c < 10 ? "0" + c : c) + " €</strong>?",
               antwort: e * 100 + c, einheit: "Cent",
               tipp: "Multipliziere die Euro mit 100 und addiere die Cent: " + e + " × 100 + " + c,
               typ: "🔄 Euro → Cent" };
    },
    function() {
      var cent = zufallInt(1000, 9999);
      return { frage: "Schreibe <strong>" + cent + " Cent</strong> als Euro-Betrag:",
               antwort: cent / 100, einheit: "€",
               tipp: "Teile durch 100: " + cent + " ÷ 100 = " + (cent/100).toFixed(2).replace('.',',') + " €",
               typ: "🔄 Cent → Euro" };
    },
    function() {
      var betrag = zufallPreis(1.00, 20.00, 0.01);
      var inCent = Math.round(betrag * 100);
      return { frage: "Wie viele Cent entsprechen <strong>" + euro(betrag) + "</strong>?",
               antwort: inCent, einheit: "Cent",
               tipp: "Multipliziere mit 100: " + euro(betrag) + " × 100",
               typ: "🔄 Euro → Cent" };
    }
  ],

  // ── SACHAUFGABEN ──────────────────────────────────────────────
  sach_a: [
    function() {
      var p = zufallPreis(0.50, 1.50, 0.10);
      var n = zufallInt(2, 5);
      var ges = runde(p * n, 2);
      return {
        sach: "🥐 Am Schulkiosk kostet ein Brötchen <strong>" + euro(p) + "</strong>.",
        frage: "Leon kauft <strong>" + n + " Brötchen</strong>. Wie viel muss er zahlen?",
        antwort: ges, einheit: "€",
        tipp: "Preis × Anzahl: " + euro(p) + " × " + n,
        typ: "📖 Schulkiosk" };
    },
    function() {
      var p = zufallPreis(0.20, 0.80, 0.10);
      var n = zufallInt(3, 8);
      var geg = 5.00;
      var ges = runde(p * n, 2);
      return {
        sach: "🍎 Auf dem Markt kosten Äpfel <strong>" + euro(p) + "</strong> pro Stück.",
        frage: "Emma kauft <strong>" + n + " Äpfel</strong> und zahlt mit einem <strong>5-Euro-Schein</strong>. Wie viel Wechselgeld bekommt sie?",
        antwort: runde(geg - ges, 2), einheit: "€",
        tipp: "Erst Gesamtpreis: " + euro(p) + " × " + n + " = " + euro(ges) + ". Dann Wechselgeld: 5,00 € − " + euro(ges),
        typ: "📖 Markt" };
    },
    function() {
      var preise = [zufallPreis(0.30, 1.50, 0.10), zufallPreis(0.20, 1.00, 0.10), zufallPreis(0.50, 2.00, 0.10)];
      var ges = runde(preise[0] + preise[1] + preise[2], 2);
      return {
        sach: "🏪 Im Supermarkt kauft Mia: ein Joghurt (" + euro(preise[0]) + "), ein Wasser (" + euro(preise[1]) + ") und einen Apfel (" + euro(preise[2]) + ").",
        frage: "Wie viel kostet ihr Einkauf insgesamt?",
        antwort: ges, einheit: "€",
        tipp: "Addiere alle drei Preise: " + euro(preise[0]) + " + " + euro(preise[1]) + " + " + euro(preise[2]),
        typ: "📖 Einkauf" };
    },
    function() {
      var preis = zufallPreis(0.10, 0.50, 0.05);
      var n = zufallInt(5, 10);
      return {
        sach: "🎯 Auf einem Jahrmarkt kostet jedes Spiel <strong>" + euro(preis) + "</strong>.",
        frage: "Tim spielt <strong>" + n + " Mal</strong>. Wie viel Geld gibt er aus?",
        antwort: runde(preis * n, 2), einheit: "€",
        tipp: euro(preis) + " × " + n + " = ?",
        typ: "📖 Jahrmarkt" };
    },
    function() {
      var budget = zufallPreis(2.00, 6.00, 0.50);
      var p1 = zufallPreis(0.50, runde(budget * 0.6, 2), 0.25);
      var p2 = zufallPreis(0.25, runde(budget - p1, 2), 0.25);
      var rest = runde(budget - p1 - p2, 2);
      if (rest < 0) rest = 0;
      return {
        sach: "🎒 Jonas hat <strong>" + euro(budget) + "</strong> Taschengeld. Er kauft ein Heft für <strong>" + euro(p1) + "</strong> und einen Stift für <strong>" + euro(p2) + "</strong>.",
        frage: "Wie viel Geld hat Jonas danach noch übrig?",
        antwort: runde(budget - p1 - p2, 2), einheit: "€",
        tipp: budget.toFixed(2).replace('.',',') + " € − " + euro(p1) + " − " + euro(p2),
        typ: "📖 Taschengeld" };
    },
    function() {
      var preis = zufallPreis(1.00, 3.00, 0.25);
      var n1 = zufallInt(2, 4);
      var n2 = zufallInt(1, 3);
      return {
        sach: "🥤 Ein Getränk kostet <strong>" + euro(preis) + "</strong>.",
        frage: "Lena kauft <strong>" + n1 + " Getränke</strong>, ihr Bruder kauft <strong>" + n2 + " Getränke</strong>. Wie viel bezahlen sie zusammen?",
        antwort: runde(preis * (n1 + n2), 2), einheit: "€",
        tipp: "Gesamt: (" + n1 + " + " + n2 + ") × " + euro(preis) + " = " + (n1+n2) + " × " + euro(preis),
        typ: "📖 Getränke" };
    }
  ],

  sach_f: [
    function() {
      var einzelpreis = zufallPreis(2.99, 9.99, 1.00);
      var anz = zufallInt(3, 6);
      var rabatt = zufallPreis(0.50, 3.00, 0.50);
      var ges = runde(einzelpreis * anz - rabatt, 2);
      return {
        sach: "🛒 Im Angebot kostet ein Buch <strong>" + euro(einzelpreis) + "</strong>. Bei einem Kauf von <strong>" + anz + " Büchern</strong> gibt es einen Rabatt von <strong>" + euro(rabatt) + "</strong>.",
        frage: "Wie viel zahlt man für " + anz + " Bücher mit dem Rabatt?",
        antwort: ges, einheit: "€",
        tipp: "Erst Gesamtpreis: " + euro(einzelpreis) + " × " + anz + " = " + euro(einzelpreis * anz) + ". Dann Rabatt abziehen: − " + euro(rabatt),
        typ: "📖 Angebot & Rabatt" };
    },
    function() {
      var stunden = zufallInt(2, 6);
      var stundenlohn = zufallPreis(5.00, 12.00, 0.50);
      var ausgabe = zufallPreis(2.00, runde(stundenlohn * stunden * 0.7, 2), 1.00);
      var verdienst = runde(stundenlohn * stunden, 2);
      return {
        sach: "💼 Anna verdient beim Babysitten <strong>" + euro(stundenlohn) + "</strong> pro Stunde. Sie arbeitet <strong>" + stunden + " Stunden</strong> und gibt danach <strong>" + euro(ausgabe) + "</strong> aus.",
        frage: "Wie viel Geld hat Anna nach dem Ausgeben noch übrig?",
        antwort: runde(verdienst - ausgabe, 2), einheit: "€",
        tipp: "Erst Verdienst: " + euro(stundenlohn) + " × " + stunden + " = " + euro(verdienst) + ". Dann: " + euro(verdienst) + " − " + euro(ausgabe),
        typ: "📖 Verdienst & Ausgaben" };
    },
    function() {
      var preis1 = zufallPreis(5.00, 20.00, 0.50);
      var preis2 = zufallPreis(5.00, 20.00, 0.50);
      var anzahl1 = zufallInt(2, 4);
      var anzahl2 = zufallInt(1, 3);
      var ges = runde(preis1 * anzahl1 + preis2 * anzahl2, 2);
      return {
        sach: "🎁 Für eine Geburtstagsfeier kauft Frau Müller: <strong>" + anzahl1 + " Pakete Luftballons</strong> à <strong>" + euro(preis1) + "</strong> und <strong>" + anzahl2 + " Rollen Geschenkband</strong> à <strong>" + euro(preis2) + "</strong>.",
        frage: "Wie viel zahlt Frau Müller insgesamt?",
        antwort: ges, einheit: "€",
        tipp: anzahl1 + " × " + euro(preis1) + " + " + anzahl2 + " × " + euro(preis2) + " = " + euro(preis1*anzahl1) + " + " + euro(preis2*anzahl2),
        typ: "📖 Einkauf (gemischt)" };
    },
    function() {
      var taschengeld = zufallPreis(10.00, 30.00, 5.00);
      var monate = zufallInt(2, 5);
      var ziel = zufallPreis(runde(taschengeld * monate * 0.6, 2), runde(taschengeld * monate, 2), 5.00);
      var gespart = runde(taschengeld * monate, 2);
      return {
        sach: "💰 Sarah bekommt jeden Monat <strong>" + euro(taschengeld) + "</strong> Taschengeld. Sie spart <strong>" + monate + " Monate</strong> lang. Das Fahrrad, das sie möchte, kostet <strong>" + euro(ziel) + "</strong>.",
        frage: "Hat Sarah nach " + monate + " Monaten genug Geld für das Fahrrad? Wie viel Geld hat sie gespart?",
        antwort: gespart, einheit: "€",
        tipp: "Gespartes Geld: " + euro(taschengeld) + " × " + monate + " Monate",
        typ: "📖 Sparen" };
    },
    function() {
      var preis = zufallPreis(3.00, 15.00, 0.50);
      var prozent = [10, 20, 25, 50][zufallInt(0, 3)];
      var rabatt = runde(preis * prozent / 100, 2);
      var neu = runde(preis - rabatt, 2);
      return {
        sach: "🏷️ Ein Shirt kostet <strong>" + euro(preis) + "</strong>. Im Ausverkauf gibt es <strong>" + prozent + % Rabatt</strong>.",
        frage: "Wie viel kostet das Shirt im Ausverkauf?",
        antwort: neu, einheit: "€",
        tipp: prozent + "% von " + euro(preis) + " = " + euro(rabatt) + " Rabatt. Neuer Preis: " + euro(preis) + " − " + euro(rabatt),
        typ: "📖 Prozent & Rabatt" };
    }
  ],

  // ── VERGLEICHEN ───────────────────────────────────────────────
  vergleich_a: [
    function() {
      var p1 = zufallPreis(0.50, 3.00, 0.10);
      var p2 = zufallPreis(0.50, 3.00, 0.10);
      var guenstiger = Math.min(p1, p2);
      var opts = [euro(p1) + " ist günstiger", euro(p2) + " ist günstiger", "Beide gleich teuer"];
      var richtig;
      if (p1 < p2) richtig = euro(p1) + " ist günstiger";
      else if (p2 < p1) richtig = euro(p2) + " ist günstiger";
      else richtig = "Beide gleich teuer";
      return { frage: "Produkt A kostet <strong>" + euro(p1) + "</strong>. Produkt B kostet <strong>" + euro(p2) + "</strong>. Was ist günstiger?",
               optionen: mische(opts), richtig: richtig,
               tipp: "Vergleiche die Beträge direkt miteinander.",
               typ: "⚖️ Preisvergleich" };
    },
    function() {
      var budget = zufallPreis(2.00, 8.00, 0.50);
      var preis = zufallPreis(0.50, 10.00, 0.50);
      var kann = preis <= budget;
      var opts = ["Ja, das Geld reicht", "Nein, das Geld reicht nicht"];
      return { frage: "Max hat <strong>" + euro(budget) + "</strong>. Ein Spielzeug kostet <strong>" + euro(preis) + "</strong>. Reicht sein Geld?",
               optionen: mische(opts), richtig: kann ? "Ja, das Geld reicht" : "Nein, das Geld reicht nicht",
               tipp: "Vergleiche: Hat Max mehr oder weniger als der Preis?",
               typ: "⚖️ Reicht das Geld?" };
    },
    function() {
      var mengen = [100, 200, 250, 500];
      var men = mengen[zufallInt(0, 3)];
      var men2 = mengen[zufallInt(0, 3)];
      while (men2 === men) men2 = mengen[zufallInt(0, 3)];
      var p1 = zufallPreis(0.50, 2.00, 0.10);
      var p2 = zufallPreis(0.50, 2.00, 0.10);
      var pp1 = runde(p1 / men * 100, 3);
      var pp2 = runde(p2 / men2 * 100, 3);
      var richtig;
      if (pp1 < pp2) richtig = "Packung A (" + men + "g für " + euro(p1) + ")";
      else richtig = "Packung B (" + men2 + "g für " + euro(p2) + ")";
      return { frage: "Packung A: <strong>" + men + " g für " + euro(p1) + "</strong>. Packung B: <strong>" + men2 + " g für " + euro(p2) + "</strong>. Welche ist günstiger pro 100g?",
               optionen: mische(["Packung A (" + men + "g für " + euro(p1) + ")", "Packung B (" + men2 + "g für " + euro(p2) + ")", "Beide gleich günstig"]),
               richtig: richtig,
               tipp: "Rechne den Preis pro 100g: Preis ÷ Menge × 100. Packung A: " + (pp1).toFixed(2) + " €/100g. Packung B: " + (pp2).toFixed(2) + " €/100g.",
               typ: "⚖️ Grundpreisvergleich" };
    }
  ],

  vergleich_f: [
    function() {
      var p1 = zufallPreis(5.00, 25.00, 0.50);
      var rabatt = [10, 15, 20, 25][zufallInt(0, 3)];
      var p2 = zufallPreis(4.00, 22.00, 0.50);
      var p1_rabatt = runde(p1 * (1 - rabatt/100), 2);
      var richtig;
      if (p1_rabatt < p2) richtig = "Laden A (" + euro(p1) + " mit " + rabatt + "% Rabatt)";
      else if (p2 < p1_rabatt) richtig = "Laden B (" + euro(p2) + ")";
      else richtig = "Beide gleich teuer";
      return { frage: "Laden A verkauft einen Artikel für <strong>" + euro(p1) + "</strong> mit <strong>" + rabatt + "% Rabatt</strong>. Laden B verkauft denselben Artikel für <strong>" + euro(p2) + "</strong>. Wo ist er günstiger?",
               optionen: mische(["Laden A (" + euro(p1) + " mit " + rabatt + "% Rabatt)", "Laden B (" + euro(p2) + ")", "Beide gleich teuer"]),
               richtig: richtig,
               tipp: "Berechne erst den Preis nach Rabatt in Laden A: " + euro(p1) + " − " + rabatt + "% = " + euro(p1_rabatt) + ". Dann vergleiche.",
               typ: "⚖️ Preisvergleich mit Rabatt" };
    },
    function() {
      var p1 = zufallPreis(3.00, 15.00, 0.50);
      var p2 = zufallPreis(3.00, 15.00, 0.50);
      var n1 = zufallInt(2, 5);
      var n2 = zufallInt(2, 5);
      var ges1 = runde(p1 * n1, 2);
      var ges2 = runde(p2 * n2, 2);
      var richtig;
      if (ges1 < ges2) richtig = "Einkauf A (" + n1 + " × " + euro(p1) + ")";
      else if (ges2 < ges1) richtig = "Einkauf B (" + n2 + " × " + euro(p2) + ")";
      else richtig = "Beide gleich teuer";
      return { frage: "Einkauf A: <strong>" + n1 + " Artikel à " + euro(p1) + "</strong>. Einkauf B: <strong>" + n2 + " Artikel à " + euro(p2) + "</strong>. Welcher Einkauf ist günstiger?",
               optionen: mische(["Einkauf A (" + n1 + " × " + euro(p1) + ")", "Einkauf B (" + n2 + " × " + euro(p2) + ")", "Beide gleich teuer"]),
               richtig: richtig,
               tipp: "Berechne beide Gesamtpreise: A = " + euro(ges1) + ", B = " + euro(ges2),
               typ: "⚖️ Einkaufsvergleich" };
    }
  ]
};

// Fix: Prozent-String im Sachaufgaben-Generator
GENERATOREN.sach_f[4] = function() {
  var preis = zufallPreis(3.00, 15.00, 0.50);
  var prozent = [10, 20, 25, 50][zufallInt(0, 3)];
  var rabatt = runde(preis * prozent / 100, 2);
  var neu = runde(preis - rabatt, 2);
  return {
    sach: "🏷️ Ein Shirt kostet <strong>" + euro(preis) + "</strong>. Im Ausverkauf gibt es <strong>" + prozent + "% Rabatt</strong>.",
    frage: "Wie viel kostet das Shirt im Ausverkauf?",
    antwort: neu, einheit: "€",
    tipp: prozent + "% von " + euro(preis) + " = " + euro(rabatt) + " Rabatt. Neuer Preis: " + euro(preis) + " − " + euro(rabatt),
    typ: "📖 Prozent & Rabatt"
  };
};

// ── Zustand ───────────────────────────────────────────────────
var level  = "anfaenger";
var typ    = "rechnen";
var schlangen = {};
var aktuelleAufgabe = null;
var gesamt = 0, richtig = 0, falsch = 0, punkte = 0;

// ── Schlange ohne Wiederholung ────────────────────────────────
function getGeneratoren() {
  var key = typ + "_" + (level === "anfaenger" ? "a" : "f");
  if (!GENERATOREN[key] || GENERATOREN[key].length === 0) {
    key = typ + "_a";
  }
  return GENERATOREN[key] || [];
}

function naechsteAufgabeAusSchlange() {
  var gens = getGeneratoren();
  if (gens.length === 0) return null;
  var key = typ + "_" + level;
  if (!schlangen[key] || schlangen[key].length === 0) {
    schlangen[key] = mische(gens.slice());
  }
  var gen = schlangen[key].pop();
  return gen();
}

// ── Level & Typ ───────────────────────────────────────────────
function setLevel(l, btn) {
  level = l;
  document.querySelectorAll(".level-btn").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  naechste();
}

function setTyp(t, btn) {
  typ = t;
  document.querySelectorAll(".typ-tab").forEach(function(b){ b.classList.remove("aktiv"); });
  btn.classList.add("aktiv");
  naechste();
}

// ── UI Reset ──────────────────────────────────────────────────
function resetUI() {
  document.getElementById("mc-liste").innerHTML = "";
  document.getElementById("mc-liste").style.display = "none";
  document.getElementById("eingabe-zeile").style.display = "none";
  document.getElementById("antwort-eingabe").value = "";
  document.getElementById("antwort-eingabe").disabled = false;
  document.getElementById("sach-box").style.display = "none";
  document.getElementById("tipp-box").style.display = "none";
  document.getElementById("check-btn").style.display = "inline-flex";
  document.getElementById("weiter-btn").style.display = "none";
  document.getElementById("tipp-btn").style.display = "inline-flex";
  document.getElementById("rueckmeldung").style.display = "none";
  document.getElementById("rueckmeldung").className = "rueckmeldung";
}

// ── Nächste Aufgabe ───────────────────────────────────────────
function naechste() {
  resetUI();
  aktuelleAufgabe = naechsteAufgabeAusSchlange();
  if (!aktuelleAufgabe) return;

  document.getElementById("aufgabe-typ-label").textContent = aktuelleAufgabe.typ || "";

  // Sachaufgaben-Box
  if (aktuelleAufgabe.sach) {
    document.getElementById("sach-box").style.display = "block";
    document.getElementById("sach-box").innerHTML = aktuelleAufgabe.sach;
    document.getElementById("aufgabe-text").innerHTML = aktuelleAufgabe.frage;
  } else {
    document.getElementById("aufgabe-text").innerHTML = aktuelleAufgabe.frage;
  }

  // Einheit setzen
  if (aktuelleAufgabe.einheit) {
    document.getElementById("einheit-label").textContent = aktuelleAufgabe.einheit;
  }

  // MC oder Eingabe
  if (aktuelleAufgabe.optionen) {
    zeigeMC();
  } else {
    document.getElementById("eingabe-zeile").style.display = "flex";
    document.getElementById("antwort-eingabe").focus();
  }
}

// ── MC ────────────────────────────────────────────────────────
function zeigeMC() {
  var mc = document.getElementById("mc-liste");
  mc.style.display = "flex";
  document.getElementById("check-btn").style.display = "none";
  document.getElementById("tipp-btn").style.display = "none";

  aktuelleAufgabe.optionen.forEach(function(opt) {
    var b = document.createElement("button");
    b.className = "mc-btn";
    b.textContent = opt;
    b.onclick = function() {
      document.querySelectorAll(".mc-btn").forEach(function(x){ x.disabled = true; });
      var korrekt = (opt === aktuelleAufgabe.richtig);
      if (korrekt) {
        b.classList.add("richtig");
      } else {
        b.classList.add("falsch");
        document.querySelectorAll(".mc-btn").forEach(function(x){
          if (x.textContent === aktuelleAufgabe.richtig) x.classList.add("richtig");
        });
      }
      ergebnis(korrekt, aktuelleAufgabe.tipp);
    };
    mc.appendChild(b);
  });
}

// ── Tipp ─────────────────────────────────────────────────────
function zeigeTipp() {
  var t = document.getElementById("tipp-box");
  t.style.display = "block";
  t.innerHTML = "💡 <strong>Tipp:</strong> " + (aktuelleAufgabe.tipp || "");
  document.getElementById("tipp-btn").style.display = "none";
}

// ── Antwort prüfen ────────────────────────────────────────────
function checkAntwort() {
  var eingabe = document.getElementById("antwort-eingabe").value.trim().replace(",", ".");
  if (!eingabe) { document.getElementById("antwort-eingabe").focus(); return; }
  var wert = parseFloat(eingabe);
  if (isNaN(wert)) {
    document.getElementById("antwort-eingabe").focus();
    return;
  }
  var korrekt = (Math.abs(wert - aktuelleAufgabe.antwort) < 0.005);
  document.getElementById("antwort-eingabe").disabled = true;
  ergebnis(korrekt, korrekt ? null : "Richtige Antwort: <strong>" + (aktuelleAufgabe.antwort).toFixed(2).replace(".",",") + " " + (aktuelleAufgabe.einheit || "€") + "</strong> – " + (aktuelleAufgabe.tipp || ""));
}

// ── Ergebnis anzeigen ─────────────────────────────────────────
function ergebnis(korrekt, hinweis) {
  gesamt++;
  if (korrekt) { richtig++; punkte += 10; muenze(); }
  else { falsch++; }
  aktualisiereAnzeige();

  document.getElementById("check-btn").style.display = "none";
  document.getElementById("weiter-btn").style.display = "inline-flex";
  document.getElementById("tipp-btn").style.display = "none";

  var r = document.getElementById("rueckmeldung");
  r.style.display = "block";
  if (korrekt) {
    var msgs = ["✅ Richtig! Super gemacht! 🎉", "✅ Sehr gut! Weiter so! ⭐", "✅ Perfekt! Du bist spitze! 🏆", "✅ Korrekt! Klasse! 🌟"];
    r.className = "rueckmeldung gut";
    r.innerHTML = msgs[Math.floor(Math.random() * msgs.length)];
  } else {
    r.className = "rueckmeldung falsch";
    r.innerHTML = "❌ Leider falsch. " + (hinweis || "") + "<br><small>Schau dir den Tipp an und versuche es beim nächsten Mal!</small>";
  }
}

// ── Münz-Animation ────────────────────────────────────────────
function muenze() {
  var emojis = ["💰", "🪙", "⭐", "🏆"];
  for (var i = 0; i < 3; i++) {
    (function(i) {
      setTimeout(function() {
        var el = document.createElement("div");
        el.className = "muenze";
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = (Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1) + "px";
        el.style.top  = (window.innerHeight * 0.5) + "px";
        document.body.appendChild(el);
        setTimeout(function(){ el.remove(); }, 1200);
      }, i * 150);
    })(i);
  }
}

// ── Anzeige ───────────────────────────────────────────────────
function aktualisiereAnzeige() {
  document.getElementById("z-gesamt").textContent  = gesamt;
  document.getElementById("z-richtig").textContent = richtig;
  document.getElementById("z-falsch").textContent  = falsch;
  document.getElementById("z-punkte").textContent  = punkte;
}

// ── Start ─────────────────────────────────────────────────────
window.onload = function() { naechste(); };
