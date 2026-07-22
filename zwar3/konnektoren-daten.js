/* ==========================================================================
   Doppelkonnektoren-Trainer – Datenbank der Übungssätze
   Platzhalter {1} und {2} markieren die Lücken für die beiden Konnektor-Teile.
   Jede Stufe (A2 / B1 / B2) enthält alle 7 Konnektorenpaare mit je 10 Sätzen.

   Struktur pro Paar:
     id        – interner Schlüssel
     first     – erster Konnektor-Teil (ein Wort/eine Wortgruppe)
     second    – Array möglicher zweiter Teile (meist 1 Element,
                 bei "je ... desto/umso" 2 gleichwertige Varianten)
     sentences – 10 Lückensätze mit {1} und {2}
   ========================================================================== */

const KONNEKTOREN_DATA = {

  A2: [
    {
      id: "sowohl-als-auch",
      first: "sowohl",
      second: ["als auch"],
      sentences: [
        "{1} mein Vater {2} meine Mutter kommen aus Italien.",
        "Sie spricht {1} Englisch {2} Französisch.",
        "Wir kaufen {1} Brot {2} Milch im Supermarkt.",
        "{1} Anna {2} Tom gehen heute ins Kino.",
        "Er isst {1} Fisch {2} Fleisch gern.",
        "Das Kind mag {1} Hunde {2} Katzen.",
        "{1} mein Bruder {2} meine Schwester wohnen in Berlin.",
        "Ich trinke morgens {1} Kaffee {2} Tee.",
        "{1} die Lehrerin {2} die Schüler waren zufrieden.",
        "Wir besuchen {1} Paris {2} Rom im Urlaub."
      ]
    },
    {
      id: "nicht-nur-sondern-auch",
      first: "nicht nur",
      second: ["sondern auch"],
      sentences: [
        "Sie ist {1} nett, {2} klug.",
        "Er kauft {1} Brot, {2} Butter.",
        "Wir besuchen {1} das Museum, {2} den Park.",
        "Das Kind mag {1} Schokolade, {2} Eis.",
        "Sie spricht {1} Deutsch, {2} Spanisch.",
        "Er ist {1} müde, {2} hungrig.",
        "Wir sehen {1} den Film, {2} die Serie.",
        "Sie kocht {1} Suppe, {2} Salat.",
        "Der Lehrer ist {1} streng, {2} freundlich.",
        "Ich lese {1} Bücher, {2} Zeitungen."
      ]
    },
    {
      id: "weder-noch",
      first: "weder",
      second: ["noch"],
      sentences: [
        "Er trinkt {1} Kaffee {2} Tee.",
        "Sie kann {1} kochen {2} backen.",
        "Wir haben {1} Zeit {2} Geld für den Urlaub.",
        "Das Auto ist {1} neu {2} billig.",
        "Ich mag {1} Fisch {2} Fleisch.",
        "Er spricht {1} Deutsch {2} Englisch gut.",
        "Die Wohnung ist {1} groß {2} hell.",
        "Wir essen {1} Pizza {2} Pasta heute.",
        "Sie hat {1} einen Bruder {2} eine Schwester.",
        "Der Film war {1} lustig {2} spannend."
      ]
    },
    {
      id: "entweder-oder",
      first: "entweder",
      second: ["oder"],
      sentences: [
        "{1} gehen wir ins Kino, {2} wir bleiben zu Hause.",
        "{1} lernst du Deutsch, {2} du lernst Englisch.",
        "{1} kommt er heute, {2} er kommt morgen.",
        "{1} trinken wir Kaffee, {2} wir trinken Tee.",
        "{1} kauft sie das rote Kleid, {2} sie kauft das blaue.",
        "{1} fahren wir mit dem Bus, {2} wir fahren mit dem Zug.",
        "{1} isst du Pizza, {2} du isst Salat.",
        "{1} spielt er Fußball, {2} er spielt Tennis.",
        "{1} bleibst du hier, {2} du gehst nach Hause.",
        "{1} lesen wir ein Buch, {2} wir sehen einen Film."
      ]
    },
    {
      id: "zwar-aber",
      first: "zwar",
      second: ["aber"],
      sentences: [
        "Das Auto ist {1} teuer, {2} gut.",
        "Die Wohnung ist {1} klein, {2} gemütlich.",
        "Er ist {1} müde, {2} glücklich.",
        "Das Essen war {1} scharf, {2} lecker.",
        "Sie ist {1} jung, {2} sehr klug.",
        "Der Film war {1} lang, {2} interessant.",
        "Das Wetter ist {1} kalt, {2} sonnig.",
        "Die Übung war {1} schwer, {2} nützlich.",
        "Der Rock ist {1} alt, {2} noch modisch.",
        "Das Zimmer ist {1} dunkel, {2} ruhig."
      ]
    },
    {
      id: "einerseits-andererseits",
      first: "einerseits",
      second: ["andererseits"],
      sentences: [
        "{1} mag ich Sport, {2} habe ich wenig Zeit dafür.",
        "{1} ist die Stadt schön, {2} ist sie sehr laut.",
        "{1} möchte ich reisen, {2} fehlt mir das Geld.",
        "{1} liebt er Tiere, {2} kann er keinen Hund halten.",
        "{1} lernt sie gern Deutsch, {2} findet sie die Grammatik schwer.",
        "{1} ist das Haus günstig, {2} ist es weit von der Arbeit.",
        "{1} kocht er gern, {2} hat er selten Zeit dafür.",
        "{1} gefällt mir die Wohnung, {2} ist die Miete hoch.",
        "{1} will sie Urlaub machen, {2} muss sie arbeiten.",
        "{1} ist das Buch spannend, {2} ist es sehr dick."
      ]
    },
    {
      id: "je-desto",
      first: "je",
      second: ["desto", "umso"],
      sentences: [
        "{1} mehr du lernst, {2} besser wird deine Note.",
        "{1} später wir kommen, {2} weniger Zeit haben wir.",
        "{1} schneller du läufst, {2} schneller bist du fertig.",
        "{1} älter das Kind wird, {2} größer wird es.",
        "{1} mehr Obst du isst, {2} gesünder lebst du.",
        "{1} früher du aufstehst, {2} mehr Zeit hast du.",
        "{1} kälter es wird, {2} wärmer ziehe ich mich an.",
        "{1} länger wir warten, {2} hungriger werden wir.",
        "{1} mehr Wasser du trinkst, {2} besser fühlst du dich.",
        "{1} teurer das Zimmer ist, {2} schöner ist die Aussicht."
      ]
    }
  ],

  B1: [
    {
      id: "sowohl-als-auch",
      first: "sowohl",
      second: ["als auch"],
      sentences: [
        "{1} meine Eltern {2} meine Großeltern haben mich bei der Entscheidung unterstützt.",
        "Der neue Kollege ist {1} kompetent {2} sehr freundlich zu allen.",
        "{1} die Regierung {2} die Opposition kritisierten den Vorschlag scharf.",
        "Sie hat {1} in Deutschland {2} in Frankreich studiert.",
        "Der Vertrag muss {1} von uns {2} von der anderen Partei unterschrieben werden.",
        "{1} die Mitarbeiter {2} die Geschäftsführung waren mit dem Ergebnis zufrieden.",
        "Das Projekt wurde {1} pünktlich {2} innerhalb des Budgets abgeschlossen.",
        "Er beherrscht {1} die Theorie {2} die Praxis seines Fachs.",
        "{1} im Sommer {2} im Winter fahren wir gern in die Berge.",
        "Die Firma investiert {1} in neue Technologien {2} in die Ausbildung ihrer Mitarbeiter."
      ]
    },
    {
      id: "nicht-nur-sondern-auch",
      first: "nicht nur",
      second: ["sondern auch"],
      sentences: [
        "Die Reform betrifft {1} die Schulen, {2} die Universitäten.",
        "Der Manager ist {1} für die Planung, {2} für die Umsetzung verantwortlich.",
        "Diese Methode spart {1} Zeit, {2} Kosten.",
        "Der Kurs richtet sich {1} an Anfänger, {2} an Fortgeschrittene.",
        "Sie hat {1} das Team motiviert, {2} die Ergebnisse deutlich verbessert.",
        "Das Produkt überzeugt {1} durch seine Qualität, {2} durch seinen Preis.",
        "Die Stadt bietet {1} kulturelle Veranstaltungen, {2} zahlreiche Grünflächen.",
        "Er hat {1} die Prüfung bestanden, {2} die beste Note bekommen.",
        "Die neue Regelung schützt {1} die Umwelt, {2} die lokale Wirtschaft.",
        "Ihr Vortrag war {1} informativ, {2} sehr unterhaltsam."
      ]
    },
    {
      id: "weder-noch",
      first: "weder",
      second: ["noch"],
      sentences: [
        "Der Chef hat {1} das Angebot {2} den Vorschlag akzeptiert.",
        "Sie konnte {1} die Prüfung bestehen {2} die Nachprüfung machen.",
        "Wir haben {1} eine Antwort {2} eine Entschuldigung bekommen.",
        "Das Wetter war {1} sonnig {2} warm während des ganzen Urlaubs.",
        "Er zeigte {1} Interesse {2} Motivation für das neue Projekt.",
        "Die Wohnung verfügt {1} über einen Balkon {2} über einen Garten.",
        "Sie hat sich {1} bei mir {2} bei meinen Kollegen gemeldet.",
        "Der Bericht enthält {1} genaue Zahlen {2} klare Argumente.",
        "Wir konnten {1} den Zug {2} den Bus rechtzeitig erreichen.",
        "Das Restaurant war {1} günstig {2} besonders gut."
      ]
    },
    {
      id: "entweder-oder",
      first: "entweder",
      second: ["oder"],
      sentences: [
        "{1} wir finden bis Freitag eine Lösung, {2} das Projekt wird gestoppt.",
        "{1} du entschuldigst dich bei ihr, {2} die Freundschaft ist vorbei.",
        "{1} das Unternehmen investiert jetzt, {2} es verliert seine Marktposition.",
        "{1} wir nehmen den früheren Flug, {2} wir verpassen den Termin.",
        "{1} er ändert seine Meinung, {2} die Verhandlung scheitert.",
        "{1} ihr meldet euch bis morgen an, {2} der Platz wird vergeben.",
        "{1} sie akzeptieren die Bedingungen, {2} der Vertrag wird storniert.",
        "{1} wir sparen jetzt Geld, {2} wir können die Reise nicht bezahlen.",
        "{1} du lernst regelmäßig, {2} du bestehst die Prüfung nicht.",
        "{1} die Firma senkt die Preise, {2} die Kunden wechseln zur Konkurrenz."
      ]
    },
    {
      id: "zwar-aber",
      first: "zwar",
      second: ["aber"],
      sentences: [
        "{1} ist die Wohnung klein, {2} sie liegt sehr zentral.",
        "{1} hat er wenig Erfahrung, {2} er lernt sehr schnell.",
        "{1} war das Wetter schlecht, {2} wir hatten trotzdem viel Spaß.",
        "{1} kostet das Produkt mehr, {2} es hält deutlich länger.",
        "{1} verstehe ich deine Argumente, {2} ich bin anderer Meinung.",
        "{1} ist der Zug pünktlich, {2} er ist oft sehr voll.",
        "{1} arbeitet sie viel, {2} sie findet noch Zeit für ihre Familie.",
        "{1} war die Prüfung schwer, {2} die meisten Studenten haben bestanden.",
        "{1} mag ich die Stadt, {2} die Mieten sind mir zu hoch.",
        "{1} kenne ich ihn nicht lange, {2} ich vertraue ihm völlig."
      ]
    },
    {
      id: "einerseits-andererseits",
      first: "einerseits",
      second: ["andererseits"],
      sentences: [
        "{1} bietet der neue Job mehr Gehalt, {2} verlangt er mehr Reisebereitschaft.",
        "{1} freut sie sich über die Beförderung, {2} macht ihr die zusätzliche Verantwortung Sorgen.",
        "{1} spart die Firma durch die Digitalisierung Kosten, {2} muss sie in neue Software investieren.",
        "{1} ist die Region touristisch attraktiv, {2} leidet sie unter Überfüllung im Sommer.",
        "{1} unterstützt die Politik den Umweltschutz, {2} fördert sie weiterhin den Kohleabbau.",
        "{1} möchte er im Ausland studieren, {2} will er seine Familie nicht so lange verlassen.",
        "{1} verbessert die Reform die Arbeitsbedingungen, {2} erhöht sie die Kosten für Unternehmen.",
        "{1} genießt sie die Freiheit als Selbstständige, {2} fehlt ihr die soziale Absicherung.",
        "{1} ist Homeoffice bequem, {2} vermisst man den direkten Kontakt zu Kollegen.",
        "{1} steigert die Werbung den Absatz, {2} verursacht sie hohe zusätzliche Kosten."
      ]
    },
    {
      id: "je-desto",
      first: "je",
      second: ["desto", "umso"],
      sentences: [
        "{1} mehr Erfahrung man sammelt, {2} sicherer wird man im Beruf.",
        "{1} intensiver man übt, {2} schneller lernt man eine Sprache.",
        "{1} klarer die Regeln sind, {2} leichter fällt die Umsetzung.",
        "{1} höher das Gehalt, {2} zufriedener sind meistens die Mitarbeiter.",
        "{1} weiter die Stadt wächst, {2} teurer werden die Mieten.",
        "{1} besser die Vorbereitung ist, {2} ruhiger verläuft die Prüfung.",
        "{1} öfter man übt, {2} sicherer wird die Aussprache.",
        "{1} mehr man reist, {2} offener wird man für andere Kulturen.",
        "{1} früher man plant, {2} weniger Stress entsteht am Ende.",
        "{1} genauer man liest, {2} weniger Fehler macht man."
      ]
    }
  ],

  B2: [
    {
      id: "sowohl-als-auch",
      first: "sowohl",
      second: ["als auch"],
      sentences: [
        "Die Studie berücksichtigt {1} soziale {2} wirtschaftliche Faktoren gleichermaßen.",
        "{1} die Befürworter {2} die Gegner des Gesetzes brachten überzeugende Argumente vor.",
        "Der Erfolg des Unternehmens hängt {1} von der Innovationskraft {2} von der Marktstrategie ab.",
        "Die Entscheidung wirkt sich {1} auf die Angestellten {2} auf die Kunden aus.",
        "Er zeichnet sich {1} durch analytisches Denken {2} durch kreative Lösungsansätze aus.",
        "Die Krise betraf {1} die Industrieländer {2} die Entwicklungsländer.",
        "{1} historische {2} aktuelle Quellen wurden in der Arbeit berücksichtigt.",
        "Das Abkommen soll {1} den Handel {2} die politische Zusammenarbeit fördern.",
        "Die Forscher untersuchten {1} die kurzfristigen {2} die langfristigen Auswirkungen.",
        "Ihre Kritik richtet sich {1} gegen die Methode {2} gegen die Schlussfolgerungen der Studie."
      ]
    },
    {
      id: "nicht-nur-sondern-auch",
      first: "nicht nur",
      second: ["sondern auch"],
      sentences: [
        "Die Digitalisierung verändert {1} die Arbeitswelt, {2} unser Privatleben grundlegend.",
        "Diese Politik gefährdet {1} die wirtschaftliche Stabilität, {2} den sozialen Zusammenhalt.",
        "Der Klimawandel beeinflusst {1} die Umwelt, {2} die globale Wirtschaft.",
        "Die Reform sollte {1} kurzfristige Probleme lösen, {2} langfristige Perspektiven schaffen.",
        "Er überzeugte {1} durch fundierte Argumente, {2} durch seine rhetorische Sicherheit.",
        "Die Studie zeigt {1} statistische Zusammenhänge, {2} mögliche Ursachen.",
        "Ihre Forschung hat {1} die Wissenschaft beeinflusst, {2} praktische Anwendungen ermöglicht.",
        "Der Skandal schadete {1} dem Ansehen der Firma, {2} dem Vertrauen der Kunden.",
        "Die Initiative fördert {1} den Umweltschutz, {2} das Bewusstsein der Bevölkerung.",
        "Seine Rede thematisierte {1} die aktuellen Herausforderungen, {2} mögliche Lösungsansätze."
      ]
    },
    {
      id: "weder-noch",
      first: "weder",
      second: ["noch"],
      sentences: [
        "Die Regierung konnte {1} die Inflation eindämmen {2} die Arbeitslosigkeit senken.",
        "Der Bericht liefert {1} eindeutige Beweise {2} nachvollziehbare Erklärungen.",
        "Trotz der Reformen hat sich {1} die Situation der Arbeiter {2} die der Angestellten verbessert.",
        "Die Maßnahme konnte {1} die Kritiker überzeugen {2} die Proteste beenden.",
        "Der Vorschlag berücksichtigt {1} die ökologischen {2} die sozialen Folgen ausreichend.",
        "Man kann diese Entwicklung {1} vollständig verhindern {2} ignorieren.",
        "Die Firma hat {1} auf die Beschwerden reagiert {2} eine Lösung angeboten.",
        "Diese Theorie wurde {1} von der Fachwelt akzeptiert {2} vollständig widerlegt.",
        "Der Politiker äußerte sich {1} zu dem Skandal {2} zu den Vorwürfen.",
        "Die Ergebnisse ließen {1} eindeutige Trends {2} klare Zusammenhänge erkennen."
      ]
    },
    {
      id: "entweder-oder",
      first: "entweder",
      second: ["oder"],
      sentences: [
        "{1} die Unternehmen passen sich den neuen Bedingungen an, {2} sie verlieren ihre Wettbewerbsfähigkeit.",
        "{1} man reformiert das System grundlegend, {2} die Probleme werden sich weiter verschärfen.",
        "{1} die Verhandlungspartner finden einen Kompromiss, {2} das Abkommen scheitert endgültig.",
        "{1} die Universität erhält zusätzliche Mittel, {2} die Forschung muss eingeschränkt werden.",
        "{1} wir handeln jetzt entschlossen, {2} die Folgen werden irreversibel sein.",
        "{1} das Unternehmen investiert in erneuerbare Energien, {2} es riskiert seine Zukunftsfähigkeit.",
        "{1} die Behörden verschärfen die Kontrollen, {2} der Missbrauch wird weitergehen.",
        "{1} die Parteien einigen sich auf einen Kandidaten, {2} es kommt zu Neuwahlen.",
        "{1} die Fabrik modernisiert ihre Anlagen, {2} sie muss langfristig schließen.",
        "{1} die Gesellschaft akzeptiert den Wandel, {2} sie riskiert, den Anschluss zu verlieren."
      ]
    },
    {
      id: "zwar-aber",
      first: "zwar",
      second: ["aber"],
      sentences: [
        "{1} sind die Vorschläge theoretisch überzeugend, {2} ihre Umsetzung erweist sich als schwierig.",
        "{1} hat die Regierung Reformen angekündigt, {2} bisher wurde wenig umgesetzt.",
        "{1} wächst die Wirtschaft, {2} die Ungleichheit nimmt gleichzeitig zu.",
        "{1} bietet die Technologie viele Vorteile, {2} sie birgt auch erhebliche Risiken.",
        "{1} wurde das Ziel formal erreicht, {2} die Qualität blieb hinter den Erwartungen zurück.",
        "{1} erkennt man die Notwendigkeit der Reform, {2} der politische Wille fehlt.",
        "{1} sank die Arbeitslosigkeit leicht, {2} viele Stellen sind weiterhin unsicher.",
        "{1} ist die Studie methodisch solide, {2} ihre Ergebnisse lassen sich schwer verallgemeinern.",
        "{1} unterstützen viele Bürger das Projekt, {2} der Widerstand einzelner Gruppen bleibt stark.",
        "{1} klingt der Plan vielversprechend, {2} die Finanzierung ist noch ungeklärt."
      ]
    },
    {
      id: "einerseits-andererseits",
      first: "einerseits",
      second: ["andererseits"],
      sentences: [
        "{1} eröffnet die künstliche Intelligenz enorme wirtschaftliche Chancen, {2} wirft sie erhebliche ethische Fragen auf.",
        "{1} stärkt die Globalisierung den internationalen Handel, {2} verschärft sie regionale Ungleichheiten.",
        "{1} erleichtert die Automatisierung viele Arbeitsprozesse, {2} gefährdet sie zahlreiche Arbeitsplätze.",
        "{1} ermöglicht die Reform mehr Flexibilität, {2} schafft sie neue rechtliche Unsicherheiten.",
        "{1} steigert die Migration die kulturelle Vielfalt, {2} stellt sie die Integrationspolitik vor Herausforderungen.",
        "{1} verspricht die Technologie mehr Effizienz, {2} erhöht sie die Abhängigkeit von wenigen Anbietern.",
        "{1} fördert der Wettbewerb Innovationen, {2} führt er zu wachsendem Druck auf die Beschäftigten.",
        "{1} sichert die Deregulierung mehr unternehmerische Freiheit, {2} schwächt sie den Verbraucherschutz.",
        "{1} bringt die Digitalisierung mehr Transparenz, {2} birgt sie erhebliche Risiken für den Datenschutz.",
        "{1} entlastet die Subvention die Landwirte kurzfristig, {2} verzerrt sie langfristig den Wettbewerb."
      ]
    },
    {
      id: "je-desto",
      first: "je",
      second: ["desto", "umso"],
      sentences: [
        "{1} mehr man übt, {2} sicherer wird man in der Sprache.",
        "{1} länger die Verhandlungen dauerten, {2} unwahrscheinlicher wurde eine Einigung.",
        "{1} schneller sich die Technologie entwickelt, {2} schwieriger wird es, Schritt zu halten.",
        "{1} höher die Nachfrage steigt, {2} knapper werden die Ressourcen.",
        "{1} komplexer das System ist, {2} anfälliger ist es für Fehler.",
        "{1} früher man mit der Planung beginnt, {2} reibungsloser verläuft das Projekt.",
        "{1} intensiver die Konkurrenz wird, {2} wichtiger wird die Innovationsfähigkeit der Firma.",
        "{1} mehr Informationen verfügbar sind, {2} schwieriger wird die Entscheidungsfindung.",
        "{1} stärker der Druck wächst, {2} größer wird das Risiko von Fehlentscheidungen.",
        "{1} genauer man die Daten analysiert, {2} klarer werden die Zusammenhänge."
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = KONNEKTOREN_DATA;
}