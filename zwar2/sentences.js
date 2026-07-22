// sentences.js
// Alle Sätze und Konnektoren nach Schwierigkeitsgrad

const sentencesData = {
    A2: [
        {
            pair: "entweder ... oder",
            connectors: ["entweder", "oder"],
            sentences: [
                { text: "Ich gehe ___ ins Kino ___ bleibe zu Hause.", solution: ["entweder", "oder"] },
                { text: "Wir essen heute ___ Pizza ___ Pasta.", solution: ["entweder", "oder"] },
                { text: "Du kannst ___ mit dem Bus fahren ___ zu Fuß gehen.", solution: ["entweder", "oder"] },
                { text: "Am Wochenende möchte ich ___ lesen ___ fernsehen.", solution: ["entweder", "oder"] },
                { text: "Sie kauft ___ ein neues Handy ___ einen Laptop.", solution: ["entweder", "oder"] },
                { text: "Wir treffen uns ___ im Park ___ im Café.", solution: ["entweder", "oder"] },
                { text: "Er arbeitet ___ morgens ___ abends.", solution: ["entweder", "oder"] },
                { text: "Du kannst ___ hier bleiben ___ nach Hause gehen.", solution: ["entweder", "oder"] },
                { text: "Ich trinke ___ Tee ___ Kaffee.", solution: ["entweder", "oder"] },
                { text: "Wir fahren ___ nach Berlin ___ nach Hamburg.", solution: ["entweder", "oder"] }
            ]
        },
        {
            pair: "sowohl ... als auch",
            connectors: ["sowohl", "als auch"],
            sentences: [
                { text: "Ich mag ___ Kaffee ___ Tee.", solution: ["sowohl", "als auch"] },
                { text: "Sie spricht ___ Deutsch ___ Englisch.", solution: ["sowohl", "als auch"] },
                { text: "Wir besuchen ___ meine Eltern ___ meine Freunde.", solution: ["sowohl", "als auch"] },
                { text: "Er arbeitet ___ im Büro ___ zu Hause.", solution: ["sowohl", "als auch"] },
                { text: "Das Restaurant bietet ___ Fleisch ___ vegetarische Gerichte.", solution: ["sowohl", "als auch"] },
                { text: "Ich habe ___ Zeit ___ Lust.", solution: ["sowohl", "als auch"] },
                { text: "Die Stadt ist ___ groß ___ laut.", solution: ["sowohl", "als auch"] },
                { text: "Sie ist ___ freundlich ___ hilfsbereit.", solution: ["sowohl", "als auch"] },
                { text: "Wir brauchen ___ Brot ___ Milch.", solution: ["sowohl", "als auch"] },
                { text: "Er hat ___ Talent ___ Erfahrung.", solution: ["sowohl", "als auch"] }
            ]
        },
        {
            pair: "nicht nur ... sondern auch",
            connectors: ["nicht nur", "sondern auch"],
            sentences: [
                { text: "Er ist ___ fleißig ___ sehr zuverlässig.", solution: ["nicht nur", "sondern auch"] },
                { text: "Sie spricht ___ Deutsch ___ Französisch.", solution: ["nicht nur", "sondern auch"] },
                { text: "Wir besuchen ___ Museen ___ Parks.", solution: ["nicht nur", "sondern auch"] },
                { text: "Das Hotel ist ___ günstig ___ zentral gelegen.", solution: ["nicht nur", "sondern auch"] },
                { text: "Ich esse ___ Obst ___ Gemüse.", solution: ["nicht nur", "sondern auch"] },
                { text: "Der Kurs ist ___ interessant ___ praktisch.", solution: ["nicht nur", "sondern auch"] },
                { text: "Er hat ___ einen Job ___ eine Familie.", solution: ["nicht nur", "sondern auch"] },
                { text: "Sie ist ___ freundlich ___ geduldig.", solution: ["nicht nur", "sondern auch"] },
                { text: "Wir fahren ___ mit dem Zug ___ mit dem Bus.", solution: ["nicht nur", "sondern auch"] },
                { text: "Das Buch ist ___ spannend ___ lehrreich.", solution: ["nicht nur", "sondern auch"] }
            ]
        }
    ],
		B1: [
		// 1. sowohl ... als auch ...
		{
			pair: "sowohl ... als auch",
			connectors: ["sowohl", "als auch"],
			sentences: [
				{ text: "Das Unternehmen bietet ___ gute Arbeitsbedingungen ___ flexible Arbeitszeiten.", solution: ["sowohl", "als auch"] },
				{ text: "Er hat ___ berufliche Erfahrung ___ eine gute Ausbildung.", solution: ["sowohl", "als auch"] },
				{ text: "Sie ist ___ kreativ ___ zuverlässig.", solution: ["sowohl", "als auch"] },
				{ text: "Wir suchen jemanden, der ___ motiviert ___ teamfähig ist.", solution: ["sowohl", "als auch"] },
				{ text: "Die Stadt hat ___ moderne Gebäude ___ historische Sehenswürdigkeiten.", solution: ["sowohl", "als auch"] },
				{ text: "Ich möchte ___ meine Sprachkenntnisse verbessern ___ neue Leute kennenlernen.", solution: ["sowohl", "als auch"] },
				{ text: "Er arbeitet ___ schnell ___ sorgfältig.", solution: ["sowohl", "als auch"] },
				{ text: "Sie hat ___ ein Auto ___ ein Fahrrad.", solution: ["sowohl", "als auch"] },
				{ text: "Wir bieten ___ praktische Übungen ___ theoretische Inhalte.", solution: ["sowohl", "als auch"] },
				{ text: "Das Projekt ist ___ anspruchsvoll ___ spannend.", solution: ["sowohl", "als auch"] }
			]
		},
	
		// 2. nicht nur ... sondern auch ...
		{
			pair: "nicht nur ... sondern auch",
			connectors: ["nicht nur", "sondern auch"],
			sentences: [
				{ text: "Der Kurs vermittelt ___ theoretisches Wissen ___ praktische Fähigkeiten.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Sie ist ___ freundlich ___ sehr hilfsbereit.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Er hat ___ die Prüfung bestanden ___ ein sehr gutes Ergebnis erzielt.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Wir bieten ___ moderne Technik ___ professionelle Betreuung.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Das Unternehmen ist ___ international ___ sehr innovativ.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Ich möchte ___ meine Kenntnisse erweitern ___ Berufserfahrung sammeln.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Sie spricht ___ fließend Deutsch ___ sehr gut Englisch.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Er arbeitet ___ schnell ___ sehr genau.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Wir besuchen ___ Museen ___ Ausstellungen.", solution: ["nicht nur", "sondern auch"] },
				{ text: "Das Buch ist ___ spannend ___ lehrreich.", solution: ["nicht nur", "sondern auch"] }
			]
		},
	
		// 3. weder ... noch ...
		{
			pair: "weder ... noch",
			connectors: ["weder", "noch"],
			sentences: [
				{ text: "Er hat ___ Zeit ___ Lust, ins Kino zu gehen.", solution: ["weder", "noch"] },
				{ text: "Sie spricht ___ Spanisch ___ Italienisch.", solution: ["weder", "noch"] },
				{ text: "Das Essen ist ___ frisch ___ lecker.", solution: ["weder", "noch"] },
				{ text: "Wir haben ___ Geld ___ eine Idee, was wir machen sollen.", solution: ["weder", "noch"] },
				{ text: "Er ist ___ motiviert ___ konzentriert heute.", solution: ["weder", "noch"] },
				{ text: "Sie hat ___ ein Auto ___ ein Fahrrad.", solution: ["weder", "noch"] },
				{ text: "Die Wohnung ist ___ groß ___ hell.", solution: ["weder", "noch"] },
				{ text: "Ich sehe ___ den Chef ___ die Kollegen heute.", solution: ["weder", "noch"] },
				{ text: "Wir fahren ___ nach Berlin ___ nach Hamburg.", solution: ["weder", "noch"] },
				{ text: "Er arbeitet ___ heute ___ morgen.", solution: ["weder", "noch"] }
			]
		},
	
		// 4. entweder ... oder ...
		{
			pair: "entweder ... oder",
			connectors: ["entweder", "oder"],
			sentences: [
				{ text: "Wir können ___ heute Abend essen gehen ___ zu Hause kochen.", solution: ["entweder", "oder"] },
				{ text: "Er fährt ___ mit dem Auto ___ mit dem Zug.", solution: ["entweder", "oder"] },
				{ text: "Sie arbeitet ___ im Büro ___ im Homeoffice.", solution: ["entweder", "oder"] },
				{ text: "Ich kaufe ___ ein neues Handy ___ einen Laptop.", solution: ["entweder", "oder"] },
				{ text: "Wir treffen uns ___ im Park ___ im Café.", solution: ["entweder", "oder"] },
				{ text: "Du kannst ___ hier bleiben ___ nach Hause gehen.", solution: ["entweder", "oder"] },
				{ text: "Er geht ___ ins Fitnessstudio ___ joggen.", solution: ["entweder", "oder"] },
				{ text: "Ich trinke ___ Wasser ___ Saft.", solution: ["entweder", "oder"] },
				{ text: "Wir fahren ___ nach Köln ___ nach Düsseldorf.", solution: ["entweder", "oder"] },
				{ text: "Sie liest ___ ein Buch ___ eine Zeitschrift.", solution: ["entweder", "oder"] }
			]
		},
	
		// 5. zwar ... aber ...
		{
			pair: "zwar ... aber",
			connectors: ["zwar", "aber"],
			sentences: [
				{ text: "Ich habe ___ wenig Zeit, ___ ich helfe dir trotzdem.", solution: ["zwar", "aber"] },
				{ text: "Der Kurs ist ___ schwierig, ___ ich lerne viel.", solution: ["zwar", "aber"] },
				{ text: "Er ist ___ müde, ___ er arbeitet weiter.", solution: ["zwar", "aber"] },
				{ text: "Das Wetter ist ___ schlecht, ___ wir gehen spazieren.", solution: ["zwar", "aber"] },
				{ text: "Die Wohnung ist ___ klein, ___ sehr gemütlich.", solution: ["zwar", "aber"] },
				{ text: "Das Essen ist ___ teuer, ___ sehr lecker.", solution: ["zwar", "aber"] },
				{ text: "Ich bin ___ nervös, ___ ich freue mich.", solution: ["zwar", "aber"] },
				{ text: "Die Stadt ist ___ laut, ___ interessant.", solution: ["zwar", "aber"] },
				{ text: "Er ist ___ jung, ___ sehr erfahren.", solution: ["zwar", "aber"] },
				{ text: "Der Film war ___ lang, ___ spannend.", solution: ["zwar", "aber"] }
			]
		},
	
		// 6. einerseits ... andererseits ...
		{
			pair: "einerseits ... andererseits",
			connectors: ["einerseits", "andererseits"],
			sentences: [
				{ text: "___ möchte ich mehr Freizeit, ___ brauche ich das Geld.", solution: ["einerseits", "andererseits"] },
				{ text: "___ ist die Stadt laut, ___ gibt es viele Möglichkeiten.", solution: ["einerseits", "andererseits"] },
				{ text: "___ mag ich meinen Job, ___ ist er sehr stressig.", solution: ["einerseits", "andererseits"] },
				{ text: "___ ist das Angebot teuer, ___ ist die Qualität sehr gut.", solution: ["einerseits", "andererseits"] },
				{ text: "___ möchte ich reisen, ___ muss ich sparen.", solution: ["einerseits", "andererseits"] },
				{ text: "___ ist das Projekt spannend, ___ kostet es viel Zeit.", solution: ["einerseits", "andererseits"] },
				{ text: "___ gefällt mir die Wohnung, ___ ist sie zu klein.", solution: ["einerseits", "andererseits"] },
				{ text: "___ ist das Auto schnell, ___ verbraucht es viel Benzin.", solution: ["einerseits", "andererseits"] },
				{ text: "___ möchte ich umziehen, ___ habe ich Angst vor Veränderungen.", solution: ["einerseits", "andererseits"] },
				{ text: "___ ist der Kurs anspruchsvoll, ___ lerne ich viel.", solution: ["einerseits", "andererseits"] }
			]
		},
	
		// 7. je ... desto / umso ...
		{
			pair: "je ... desto",
			connectors: ["je", "desto"],
			sentences: [
				{ text: "___ mehr ich übe, ___ besser spreche ich Deutsch.", solution: ["je", "desto"] },
				{ text: "___ früher du anfängst, ___ schneller bist du fertig.", solution: ["je", "desto"] },
				{ text: "___ länger man wartet, ___ schwieriger wird es.", solution: ["je", "desto"] },
				{ text: "___ mehr Erfahrung du hast, ___ sicherer wirst du.", solution: ["je", "desto"] },
				{ text: "___ intensiver der Kurs ist, ___ schneller lernt man.", solution: ["je", "desto"] },
				{ text: "___ besser die Vorbereitung ist, ___ erfolgreicher wird das Projekt.", solution: ["je", "desto"] },
				{ text: "___ höher die Anforderungen sind, ___ größer ist der Druck.", solution: ["je", "desto"] },
				{ text: "___ mehr du liest, ___ größer wird dein Wortschatz.", solution: ["je", "desto"] },
				{ text: "___ genauer man plant, ___ weniger Probleme gibt es.", solution: ["je", "desto"] },
				{ text: "___ länger die Reise dauert, ___ müder wird man.", solution: ["je", "desto"] }
			]
		}
	],
    B2: [
    // 1. sowohl ... als auch ...
    {
        pair: "sowohl ... als auch",
        connectors: ["sowohl", "als auch"],
        sentences: [
            { text: "Das neue Konzept ist ___ innovativ ___ gut durchdacht.", solution: ["sowohl", "als auch"] },
            { text: "Er verfügt über ___ umfangreiche Erfahrung ___ ausgezeichnete Kommunikationsfähigkeiten.", solution: ["sowohl", "als auch"] },
            { text: "Die Firma investiert ___ in moderne Technologien ___ in die Weiterbildung der Mitarbeiter.", solution: ["sowohl", "als auch"] },
            { text: "Sie ist ___ fachlich kompetent ___ sozial sehr engagiert.", solution: ["sowohl", "als auch"] },
            { text: "Das Projekt erfordert ___ präzise Planung ___ zuverlässige Umsetzung.", solution: ["sowohl", "als auch"] },
            { text: "Wir müssen ___ die Kosten reduzieren ___ die Qualität sichern.", solution: ["sowohl", "als auch"] },
            { text: "Er zeigt ___ Motivation ___ Verantwortungsbewusstsein.", solution: ["sowohl", "als auch"] },
            { text: "Die Stadt bietet ___ kulturelle Vielfalt ___ wirtschaftliche Chancen.", solution: ["sowohl", "als auch"] },
            { text: "Sie hat ___ theoretisches Wissen ___ praktische Erfahrung.", solution: ["sowohl", "als auch"] },
            { text: "Das Unternehmen legt Wert auf ___ Nachhaltigkeit ___ Innovation.", solution: ["sowohl", "als auch"] }
        ]
    },

    // 2. nicht nur ... sondern auch ...
    {
        pair: "nicht nur ... sondern auch",
        connectors: ["nicht nur", "sondern auch"],
        sentences: [
            { text: "Der Bewerber bringt ___ hervorragende Fachkenntnisse ___ langjährige Berufserfahrung mit.", solution: ["nicht nur", "sondern auch"] },
            { text: "Die neue Software spart ___ Zeit ___ reduziert Fehler.", solution: ["nicht nur", "sondern auch"] },
            { text: "Sie hat ___ die Prüfung bestanden ___ eine der besten Bewertungen erhalten.", solution: ["nicht nur", "sondern auch"] },
            { text: "Das Unternehmen bietet ___ attraktive Gehälter ___ flexible Arbeitszeiten.", solution: ["nicht nur", "sondern auch"] },
            { text: "Er spricht ___ fließend Deutsch ___ verhandlungssicher Englisch.", solution: ["nicht nur", "sondern auch"] },
            { text: "Die Stadt ist ___ kulturell interessant ___ wirtschaftlich stark.", solution: ["nicht nur", "sondern auch"] },
            { text: "Wir möchten ___ die Qualität verbessern ___ die Produktionskosten senken.", solution: ["nicht nur", "sondern auch"] },
            { text: "Sie ist ___ sehr zuverlässig ___ äußerst belastbar.", solution: ["nicht nur", "sondern auch"] },
            { text: "Das Projekt erfordert ___ Kreativität ___ analytisches Denken.", solution: ["nicht nur", "sondern auch"] },
            { text: "Er hat ___ ein hohes Verantwortungsbewusstsein ___ eine starke Motivation.", solution: ["nicht nur", "sondern auch"] }
        ]
    },

    // 3. weder ... noch ...
    {
        pair: "weder ... noch",
        connectors: ["weder", "noch"],
        sentences: [
            { text: "Der Bericht enthält ___ klare Ergebnisse ___ nachvollziehbare Argumente.", solution: ["weder", "noch"] },
            { text: "Er zeigt ___ Interesse ___ Engagement für das Projekt.", solution: ["weder", "noch"] },
            { text: "Die Firma hat ___ die Frist eingehalten ___ die notwendigen Dokumente geliefert.", solution: ["weder", "noch"] },
            { text: "Sie ist ___ zufrieden ___ motiviert nach dem Gespräch.", solution: ["weder", "noch"] },
            { text: "Das Produkt ist ___ hochwertig ___ zuverlässig.", solution: ["weder", "noch"] },
            { text: "Wir haben ___ genügend Zeit ___ ausreichende Ressourcen.", solution: ["weder", "noch"] },
            { text: "Er besitzt ___ ein Auto ___ ein Fahrrad.", solution: ["weder", "noch"] },
            { text: "Die Präsentation war ___ klar ___ gut strukturiert.", solution: ["weder", "noch"] },
            { text: "Sie arbeitet ___ heute ___ morgen.", solution: ["weder", "noch"] },
            { text: "Das Angebot ist ___ attraktiv ___ sinnvoll.", solution: ["weder", "noch"] }
        ]
    },

    // 4. entweder ... oder ...
    {
        pair: "entweder ... oder",
        connectors: ["entweder", "oder"],
        sentences: [
            { text: "Wir müssen ___ die Strategie ändern ___ das Projekt komplett neu planen.", solution: ["entweder", "oder"] },
            { text: "Er entscheidet sich ___ für eine Weiterbildung ___ für einen Jobwechsel.", solution: ["entweder", "oder"] },
            { text: "Sie arbeitet ___ im Hauptbüro ___ in der neuen Niederlassung.", solution: ["entweder", "oder"] },
            { text: "Das Unternehmen investiert ___ in neue Maschinen ___ in digitale Lösungen.", solution: ["entweder", "oder"] },
            { text: "Ich werde ___ den Bericht heute fertigstellen ___ ihn morgen abschließen.", solution: ["entweder", "oder"] },
            { text: "Wir treffen uns ___ online ___ persönlich.", solution: ["entweder", "oder"] },
            { text: "Er fährt ___ mit dem Zug ___ mit dem Flugzeug.", solution: ["entweder", "oder"] },
            { text: "Sie kauft ___ ein neues Handy ___ ein Tablet.", solution: ["entweder", "oder"] },
            { text: "Wir können ___ die Präsentation kürzen ___ zusätzliche Informationen hinzufügen.", solution: ["entweder", "oder"] },
            { text: "Ich arbeite ___ im Team ___ alleine.", solution: ["entweder", "oder"] }
        ]
    },

    // 5. zwar ... aber ...
    {
        pair: "zwar ... aber",
        connectors: ["zwar", "aber"],
        sentences: [
            { text: "Der Kurs ist ___ anspruchsvoll, ___ er bringt große Vorteile.", solution: ["zwar", "aber"] },
            { text: "Das Projekt ist ___ komplex, ___ wir haben genug Ressourcen.", solution: ["zwar", "aber"] },
            { text: "Er ist ___ müde, ___ er arbeitet weiter.", solution: ["zwar", "aber"] },
            { text: "Die Aufgabe ist ___ schwierig, ___ sie ist machbar.", solution: ["zwar", "aber"] },
            { text: "Die Wohnung ist ___ teuer, ___ sie liegt sehr zentral.", solution: ["zwar", "aber"] },
            { text: "Der Bericht ist ___ lang, ___ sehr informativ.", solution: ["zwar", "aber"] },
            { text: "Sie ist ___ nervös, ___ gut vorbereitet.", solution: ["zwar", "aber"] },
            { text: "Das Wetter ist ___ schlecht, ___ wir gehen trotzdem raus.", solution: ["zwar", "aber"] },
            { text: "Er hat ___ wenig Zeit, ___ er hilft uns trotzdem.", solution: ["zwar", "aber"] },
            { text: "Die Präsentation war ___ kompliziert, ___ verständlich erklärt.", solution: ["zwar", "aber"] }
        ]
    },

    // 6. einerseits ... andererseits ...
    {
        pair: "einerseits ... andererseits",
        connectors: ["einerseits", "andererseits"],
        sentences: [
            { text: "___ möchte ich mehr verdienen, ___ will ich weniger Stress.", solution: ["einerseits", "andererseits"] },
            { text: "___ ist die Stadt teuer, ___ bietet sie viele Chancen.", solution: ["einerseits", "andererseits"] },
            { text: "___ mag ich meinen Job, ___ ist er sehr anstrengend.", solution: ["einerseits", "andererseits"] },
            { text: "___ ist das Angebot attraktiv, ___ habe ich Zweifel.", solution: ["einerseits", "andererseits"] },
            { text: "___ möchte ich reisen, ___ muss ich sparen.", solution: ["einerseits", "andererseits"] },
            { text: "___ ist das Projekt spannend, ___ kostet es viel Zeit.", solution: ["einerseits", "andererseits"] },
            { text: "___ gefällt mir die Wohnung, ___ ist sie zu klein.", solution: ["einerseits", "andererseits"] },
            { text: "___ ist das Auto schnell, ___ verbraucht es viel Benzin.", solution: ["einerseits", "andererseits"] },
            { text: "___ möchte ich umziehen, ___ habe ich Angst vor Veränderungen.", solution: ["einerseits", "andererseits"] },
            { text: "___ ist der Kurs anspruchsvoll, ___ lerne ich viel.", solution: ["einerseits", "andererseits"] }
        ]
    },

    // 7. je ... desto / umso ...
    {
        pair: "je ... desto",
        connectors: ["je", "desto"],
        sentences: [
            { text: "___ mehr ich lese, ___ besser verstehe ich komplexe Texte.", solution: ["je", "desto"] },
            { text: "___ früher du beginnst, ___ schneller bist du fertig.", solution: ["je", "desto"] },
            { text: "___ intensiver man übt, ___ größer wird der Erfolg.", solution: ["je", "desto"] },
            { text: "___ genauer die Analyse ist, ___ zuverlässiger sind die Ergebnisse.", solution: ["je", "desto"] },
            { text: "___ besser die Vorbereitung ist, ___ erfolgreicher wird die Präsentation.", solution: ["je", "desto"] },
            { text: "___ mehr Verantwortung man übernimmt, ___ wichtiger wird die eigene Rolle.", solution: ["je", "desto"] },
            { text: "___ länger das Projekt dauert, ___ höher werden die Kosten.", solution: ["je", "desto"] },
            { text: "___ mehr man investiert, ___ größer ist der mögliche Gewinn.", solution: ["je", "desto"] },
            { text: "___ klarer die Ziele sind, ___ einfacher ist die Umsetzung.", solution: ["je", "desto"] },
            { text: "___ stärker der Wettbewerb ist, ___ wichtiger wird Innovation.", solution: ["je", "desto"] }
        ]
    }
]

};
