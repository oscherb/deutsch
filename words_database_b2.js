// База слов для изучения немецкого языка
const wordsDatabase = [
    { id: 1, german: "die Kita, -s", russian: "детский сад", turkish: "kreş, anaokulu" },
    { id: 2, german: "halbtags arbeiten", russian: "работать на полставки (полдня)", turkish: "yarım gün çalışmak" },
    { id: 3, german: "das Lager, -", russian: "склад", turkish: "depo" },
    { id: 4, german: "die Ware, -n", russian: "товар", turkish: "mal, ürün" },
    { id: 5, german: "Waren kontrollieren", russian: "проверять / контролировать товары", turkish: "malları kontrol etmek" },
    { id: 6, german: "das Material, -ien", russian: "материал", turkish: "malzeme, materyal" },
    { id: 7, german: "ein Ziel erreichen", russian: "достигать цели", turkish: "bir hedefe ulaşmak" },
    { id: 8, german: "der Bedarf, -e", russian: "потребность, нужда", turkish: "ihtiyaç, gereksinim" },
    { id: 9, german: "aufwachsen (wächst auf, wuchs auf, ist aufgewachsen)", russian: "вырастать, расти", turkish: "büyümek (çocukluk dönemi)" },
    { id: 10, german: "der Abschluss, ⸚e", russian: "окончание (учебного заведения), диплом", turkish: "mezuniyet, bitirme" },
    { id: 11, german: "eine Ausbildung machen zu + D.", russian: "получать проф. образование по специальности...", turkish: "... olarak mesleki eğitim almak" },
    { id: 12, german: "der Job, -s", russian: "работа, подработка", turkish: "iş" },
    { id: 13, german: "tätig als + N.", russian: "работать / быть занятым в качестве...", turkish: "... olarak faaliyet göstermek / çalışmak" },
    { id: 14, german: "sich bewerben (bewirbt, bewarb, hat beworben)", russian: "подавать заявление о приеме на работу", turkish: "iş başvurusu yapmak" },
    { id: 15, german: "Ziel erreichen", russian: "достигать цели", turkish: "hedefe ulaşmak" },
    { id: 16, german: "im selben Jahr", russian: "в том же году", turkish: "aynı yıl içinde" },
    { id: 17, german: "der Krieg, -e", russian: "война", turkish: "savaş" },
    { id: 18, german: "verlassen (verlässt, verließ, hat verlassen)", russian: "покидать, оставлять", turkish: "terk etmek, ayrılmak" },
    { id: 19, german: "verzweifelt", russian: "отчаявшийся, в отчаянии", turkish: "çaresiz, umutsuz" },
    { id: 20, german: "der Nachweis, -e", russian: "подтверждение, доказательство, справка", turkish: "belge, kanıt, ispat" },
    { id: 21, german: "die Abschlussprüfung, -en", russian: "выпускной / итоговый экзамен", turkish: "bitirme sınavı" },
    { id: 22, german: "anspruchsvoll", russian: "требовательный, взыскательный", turkish: "titiz, zorlu, iddialı" },
    { id: 23, german: "eine Prüfung bestehen (besteht, bestand, hat bestanden)", russian: "сдать / выдержать экзамен", turkish: "sınavı geçmek / başarmak" },
    { id: 24, german: "eine Ausbildung abschließen (schließt ab, schloss ab, hat abgeschlossen)", russian: "окончить профессиональное обучение", turkish: "mesleki eğitimi tamamlamak" },
    { id: 25, german: "ein Praktikum machen", russian: "проходить практику / стажировку", turkish: "staj yapmak" },
    { id: 26, german: "aushilfsweise", russian: "временно (в качестве подработки или помощи)", turkish: "geçici olarak, yardımcı olarak" },
    { id: 27, german: "die Aushilfe, -n", russian: "временный помощник / подработка", turkish: "geçici yardımcı eleman" },
    { id: 28, german: "das Berufsfeld, -er", russian: "сфера деятельности / проф. область", turkish: "meslek alanı" },
    { id: 29, german: "das Talent, -e", russian: "талант, способность", turkish: "yetenek, kabiliyet" },
    { id: 30, german: "mit den Händen arbeiten", russian: "работать руками", turkish: "elleriyle çalışmak" },
    { id: 31, german: "präzise", russian: "точный, аккуратный", turkish: "titiz, hassas, tam" },
    { id: 32, german: "handwerklich geschickt", russian: "умелый в ремесле (рукастый)", turkish: "el becerisi olan, zanaatta yetenekli" },
    { id: 33, german: "Maschinen bedienen", russian: "управлять машинами / оборудованием", turkish: "makineleri kullanmak / işletmek" },
    { id: 34, german: "die Schichtarbeit, -en", russian: "сменная работа", turkish: "vardiyalı çalışma" },
    { id: 35, german: "sich etw. räumlich vorstellen", russian: "пространственно представлять что-либо", turkish: "bir şeyi mekansal/üç boyutlu hayal etmek" },
    { id: 36, german: "einfallsreich", russian: "находчивый, изобретательный", turkish: "yaratıcı, becerikli, mucit ruhlu" },
    { id: 37, german: "das Design, -s", russian: "дизайн", turkish: "tasarım, dizayn" },
    { id: 38, german: "die Gestaltung, -en", russian: "оформление, дизайн, организация", turkish: "biçimlendirme, düzenleme, tasarım" },
    { id: 39, german: "konzentriert", russian: "сосредоточенный", turkish: "konsantre, odaklanmış" },
    { id: 40, german: "strukturieren", russian: "структурировать", turkish: "yapılandırmak, organize etmek" },
    { id: 41, german: "der Zusammenhang, ⸚e", russian: "связь, взаимосвязь, контекст", turkish: "bağlam, ilişki, bağlantı" },
    { id: 42, german: "kommunizieren mit + D.", russian: "общаться / коммуницировать с...", turkish: "... ile iletişim kurmak" },
    { id: 43, german: "das Einfühlungsvermögen", russian: "чуткость, способность к сопереживанию (эмпатия)", turkish: "empati yeteneği, duyarlılık" },
    { id: 44, german: "teamfähig", russian: "способный работать в команде", turkish: "ekip çalışmasına yatkın" },
    { id: 45, german: "die Empathie", russian: "эмпатия, сочувствие", turkish: "empati" },
    { id: 46, german: "ein großes Herz haben für + A.", russian: "иметь доброе/большое сердце для...", turkish: "... için büyük bir yüreği olmak" },
    { id: 47, german: "zählen zu + D.", russian: "относиться к..., считаться...", turkish: "... arasında sayılmak / ...-den sayılmak" },
    { id: 48, german: "seinen Meister machen", russian: "получить квалификацию мастера", turkish: "ustalık belgesi almak / usta olmak" },
    { id: 49, german: "die Routine, -n", russian: "рутина, повседневный навык", turkish: "rutin" },
    { id: 50, german: "schwerfallen (fällt schwer, fiel schwer, ist schwergefallen)", russian: "даваться с трудом, тяжело даваться", turkish: "zor gelmek" },
    { id: 51, german: "nach langem Überlegen", russian: "после долгих размышлений", turkish: "uzunca düşündükten sonra" },
    { id: 52, german: "der Jobwechsel, -", russian: "смена работы", turkish: "iş değişikliği" },
    { id: 53, german: "der Neustart, -s", russian: "новый старт / перезапуск", turkish: "yeni başlangıç" },
    { id: 54, german: "der Quereinstieg, -e", russian: "переход в новую профессию без специального образования", turkish: "başka alandan yeni bir mesleğe geçiş" },
    { id: 55, german: "hauptsächlich", russian: "главным образом, в основном", turkish: "esasen, çoğunlukla, başlıca" },
    { id: 56, german: "zur Verfügung stellen", russian: "предоставлять в распоряжение", turkish: "kullanıma sunmak, tahsis etmek" },
    { id: 57, german: "sich richten an + A.", russian: "адресоваться кому-то, направляться на...", turkish: "...-e hitap etmek / yönelmek" },
    { id: 58, german: "vereinzelt", russian: "единичный, редкий, местами", turkish: "tek tük, nadiren, münferit" },
    { id: 59, german: "auf Antrag", russian: "по заявлению / по запросу", turkish: "dilekçe üzerine, talep üzerine" },
    { id: 60, german: "das Konzept, -e", russian: "концепция, план, черновик", turkish: "konsept, taslak, plan" },
    { id: 61, german: "die Dienstleistung, -en", russian: "услуга", turkish: "hizmet" },
    { id: 62, german: "die Reinigung, -en", russian: "чистка, уборка, химчистка", turkish: "temizlik" },
    { id: 63, german: "die Anlage, -n", russian: "оборудование, установка / приложение", turkish: "tesis, sistem, düzenek / ek" },
    { id: 64, german: "individuell", russian: "индивидуальный", turkish: "bireysel, kişiye özel" },
    { id: 65, german: "kompetent", russian: "компетентный", turkish: "yetkin, bilgili, kompetan" },
    { id: 66, german: "das Gehalt, ⸚er", russian: "оклад, зарплата (служащего)", turkish: "maaş" },
    { id: 67, german: "der Führerschein, -e", russian: "водительские права", turkish: "ehliyet, sürücü belgesi" },
    { id: 68, german: "das Diensthandy, -s", russian: "служебный / рабочий мобильный телефон", turkish: "şirket telefonu / iş telefonu" }
    { id: 69, german: "abbauen", russian: " разбирать, демонтировать (также: снижать, сокращать)" }
    { id: 70, german: "anbieten (bietet an, bot an, hat angeboten)", russian: " предлагать" }
    { id: 71, german: "annehmen (nimmt an, nahm an, hat angenommen)", russian: " принимать, брать (например, посылку или товар)" }
    { id: 72, german: "anscheinend", russian: " по-видимому, кажется, очевидно" }
    { id: 73, german: "anspruchsvoll", russian: " требовательный, взыскательный" }
    { id: 74, german: "aufbauen", russian: " монтаж, сборка, структура" }
    { id: 75, german: "aufheben (hebt auf, hob auf, hat aufgehoben)", russian: " сохранять, сберегать (например, чеки)" }
    { id: 76, german: "aufwachsen (wächst auf, wuchs auf, ist aufgewachsen)", russian: " вырастать, расти" }
    { id: 77, german: "aufwendig", russian: " трудоемкий, затратный, требующий больших усилий/расходов" }
    { id: 78, german: "aushilfsweise", russian: " временно (в качестве подработки / помощи)" }
    { id: 79, german: "ausstellen", russian: " выдавать, выписывать (документ, справку)" }
    { id: 80, german: "ausverkauft", russian: " распродано" }
    { id: 81, german: "bedauerlich", russian: " прискорбный, досадный, достойный сожаления" }
    { id: 82, german: "befristet", russian: " ограниченный сроком, временный" }
    { id: 83, german: "beifügen", russian: " прилагать, прикреплять (к письму, документу)" }
    { id: 84, german: "begrenzt", russian: " ограниченный" }
    { id: 85, german: "bereitstehen (steht bereit, stand bereit, ist bereitgestanden)", russian: " быть наготове, стоять наготове (быть доступным)" }
    { id: 86, german: "breit", russian: " широкий" }
    { id: 87, german: "chemisch", russian: " химический" }
    { id: 88, german: "das Angebot, -e", russian: " предложение (коммерческое), оффер" }
    { id: 89, german: "das Berufsfeld, -er", russian: " сфера деятельности / проф. область" }
    { id: 90, german: "das Blueboard / Whiteboard, -s", russian: " маркерная доска" }
    { id: 91, german: "das Design, -s", russian: " дизайн" }
    { id: 92, german: "das Detail, -s", russian: " деталь, подробность" }
    { id: 93, german: "das Diensthandy, -s", russian: " служебный / рабочий мобильный телефон" }
    { id: 94, german: "das Einfühlungsvermögen", russian: " чуткость, способность к сопереживанию" }
    { id: 95, german: "das Fließband, ⸚er", russian: " конвейер" }
    { id: 96, german: "das Gehalt, ⸚er", russian: " оклад, зарплата (служащего)" }
    { id: 97, german: "das Großraumbüro, -s", russian: " офис открытого типа (большое рабочее помещение)" }
    { id: 98, german: "das Kalenderjahr, -e", russian: " календарный год" }
    { id: 99, german: "das Klebeband, ⸚er", russian: " скотч, клейкая лента" }
    { id: 100, german: "das Konzept, -e", russian: " концепция, план, черновик" }
    { id: 101, german: "das Labor", russian: " лаборатория" }
    { id: 102, german: "das Lager, -", russian: " склад" }
    { id: 103, german: "das Material, -ien", russian: " материал" }
    { id: 104, german: "das Sonderangebot, -e", russian: " специальное предложение (акция)" }
    { id: 105, german: "das Talent, -e", russian: " талант, способность" }
    { id: 106, german: "das Teig, -e", russian: " тесто" }
    { id: 107, german: "das Verständnis", russian: " понимание" }
    { id: 108, german: "der Anbieter, -", russian: " провайдер, поставщик услуг, продавец" }
    { id: 109, german: "der Antrittstermin, -e", russian: " дата начала работы (вступления в должность)" }
    { id: 110, german: "der Aufbau, -ten", russian: " монтаж, сборка, структура" }
    { id: 111, german: "der Aushilfsjob, -s", russian: " подработка, временная работа" }
    { id: 112, german: "der Bedarf, -e", russian: " потребность, нужда" }
    { id: 113, german: "der Beleg, -e", russian: " квитанция, чек, подтверждающий документ" }
    { id: 114, german: "der berufliche Werdegang, ⸚e", russian: " профессиональный путь, карьера" }
    { id: 115, german: "der Bestellschein, -e", russian: " бланк заказа" }
    { id: 116, german: "der Einrichtungsgegenstand, ⸚e", russian: " предмет интерьера / обстановки" }
    { id: 117, german: "der Fragebogen, ⸚", russian: " анкета, опросный лист" }
    { id: 118, german: "der Führerschein, -e", russian: " водительские права" }
    { id: 119, german: "der Handwerksbetrieb, -e", russian: " ремесленное (производственное) предприятие" }
    { id: 120, german: "der Job, -s", russian: " работа, подработка" }
    { id: 121, german: "der Jobwechsel, -", russian: " смена работы" }
    { id: 122, german: "der Kassenbon, -s", russian: " кассовый чек" }
    { id: 123, german: "der Kassenzettel, -", russian: " кассовый чек" }
    { id: 124, german: "der Krankheitsfall, ⸚e", russian: " случай заболевания, болезнь" }
    { id: 125, german: "der Krankenschein, -e", russian: " больничный лист, справка о нетрудоспособности" }
    { id: 126, german: "der Krieg, -e", russian: " война" }
    { id: 127, german: "der Kugelschreiber, - / der Kuli, -s", russian: " шариковая ручка" }
    { id: 128, german: "der Lieferschein, -e", russian: " товарно-транспортная накладная" }
    { id: 129, german: "der Locher, -", russian: " дырокол" }
    { id: 130, german: "der Mangel, ⸚", russian: " недостаток, дефект, нехватка" }
    { id: 131, german: "der Minijob, -s", russian: " мини-работа" }
    { id: 132, german: "der Mülleimer, -", russian: " мусорное ведро" }
    { id: 133, german: "der Nachweis, -e", russian: " подтверждение, доказательство, справка" }
    { id: 134, german: "der Neustart, -s", russian: " новый старт / перезапуск" }
    { id: 135, german: "der Probetag, -e", russian: " пробный рабочий день" }
    { id: 136, german: "der Quereinstieg, -e", russian: " переход в новую проф. без спец. образования" }
    { id: 137, german: "der Rabatt, -e", russian: " скидка" }
    { id: 138, german: "der Supermarkt", russian: " супермаркет" }
    { id: 139, german: "der Umsatz, ⸚e", russian: " оборот (товарооборот, выручка)" }
    { id: 140, german: "der Vorrat, ⸚e", russian: " запас, складские запасы" }
    { id: 141, german: "der Workshop, -s", russian: " воркшоп, мастер-класс, практический семинар" }
    { id: 142, german: "der Zusammenhang, ⸚e", russian: " связь, взаимосвязь, контекст" }
    { id: 143, german: "der/die Angehörige, -n", russian: " родственник / родственница, близкий" }
    { id: 144, german: "der/die Angestellte", russian: " служащий / служащая" }
    { id: 145, german: "der/die Ansprechpartner/in, -/-nen", russian: " контактное лицо, представитель для связи" }
    { id: 146, german: "der/die Arbeitnehmende", russian: " работник / работница (наемный рабочий)" }
    { id: 147, german: "der/die Lieferant/in, -en/-nen", russian: " поставщик / поставщица" }
    { id: 148, german: "der/die Praktikant/in, -en/-nen", russian: " практикант / практикантка" }
    { id: 149, german: "der/die Vorgesetzte, -n", russian: " начальник / начальница" }
    { id: 150, german: "derzeit", russian: " в настоящее время, сейчас" }
    { id: 151, german: "die Abteilung, -en", russian: " отдел, подразделение" }
    { id: 152, german: "die Alternative, -n", russian: " альтернатива, другой вариант" }
    { id: 153, german: "die Anfahrt, -en", russian: " подъезд, дорога (путь к месту)" }
    { id: 154, german: "die Anfrage, -n", russian: " запрос (официальный), заявка" }
    { id: 155, german: "die Anlage, -n", russian: " оборудование, установка / приложение" }
    { id: 156, german: "die Arbeitskraft, ⸚e", russian: " рабочая сила, работник" }
    { id: 157, german: "die Arbeitszeiterfassung, -en", russian: " учет рабочего времени" }
    { id: 158, german: "die Ausfertigung, -en", russian: " оформление, составление (документа); экземпляр, копия" }
    { id: 159, german: "die Ausfüllung / die Aushilfe, -n", russian: " временный помощник, подсобный рабочий" }
    { id: 160, german: "die Backware, -n", russian: " хлебобулочное изделие, выпечка" }
    { id: 161, german: "die Beilage / die Bestellung, -en", russian: " заказ" }
    { id: 162, german: "die Bescheinigung, -en", russian: " удостоверение, справка, свидетельство" }
    { id: 163, german: "die Beschwerde, -n", russian: " жалоба" }
    { id: 164, german: "die Bewertung, -en", russian: " оценка, отзыв" }
    { id: 165, german: "die Buchhaltung, -en", russian: " бухгалтерия" }
    { id: 166, german: "die Büroklammer, -n", russian: " скрепка для бумаги" }
    { id: 167, german: "die Dienstleistung, -en", russian: " услуга" }
    { id: 168, german: "die Dienstreise, -n", russian: " командировка" }
    { id: 169, german: "die Digitalisierung", russian: " цифровизация, диджитализация" }
    { id: 170, german: "die Einarbeitung", russian: " введение в работу, ознакомление с обязанностями" }
    { id: 171, german: "die Elektronikbranche, -n", russian: " сфера электроники, электронная отрасль" }
    { id: 172, german: "die Empathie", russian: " эмпатия" }
    { id: 173, german: "die Entschädigung, -en", russian: " компенсация, возмещение ущерба" }
    { id: 174, german: "die Fachkraft", russian: " квалифицированный специалист" }
    { id: 175, german: "die Fahrtkosten (Pl.)", russian: " транспортные расходы (расходы на проезд)" }
    { id: 176, german: "die Filiale, -n", russian: " филиал, отделение" }
    { id: 177, german: "die Garderobe, -n", russian: " гардероб, раздевалка" }
    { id: 178, german: "die Gestaltung, -en", russian: " оформление, дизайн, организация" }
    { id: 179, german: "die Gleitzeit", russian: " гибкий график работы" }
    { id: 180, german: "die Gutschrift, -en", russian: " зачисление на счет (кредит-нота), бонусный купон в счет возврата" }
    { id: 181, german: "die Halle", russian: " цех, павильон, ангар" }
    { id: 182, german: "die Herausforderung, -en", russian: " вызов, сложная задача" }
    { id: 183, german: "die Hektik", russian: " суета, спешка" }
    { id: 184, german: "die Hygiene", russian: " гигиена" }
    { id: 185, german: "die Installation, -en", russian: " установка, инсталляция (оборудования/ПО)" }
    { id: 186, german: "die interne Fortbildung, -en", russian: " внутреннее повышение квалификации" }
    { id: 187, german: "die Karrierechance, -n", russian: " шанс на карьерный рост, карьерная возможность" }
    { id: 188, german: "die Kita, -s", russian: " детский сад" }
    { id: 189, german: "die Krankmeldung, -en", russian: " уведомление о болезни (документ)" }
    { id: 190, german: "die Kritik", russian: " критика" }
    { id: 191, german: "die Kundennummer, -n", russian: " номер клиента" }
    { id: 192, german: "die Langeweile", russian: " скука" }
    { id: 193, german: "die Lieferung, -en", russian: " поставка, доставка" }
    { id: 194, german: "die Logistikbranche, -n", russian: " сфера логистики, логистическая отрасль" }
    { id: 195, german: "die Maschinenbaubranche, -n", russian: " сфера машиностроения, машиностроительная отрасль" }
    { id: 196, german: "die Mehrwertsteuer (MwSt.)", russian: " налог на добавленную стоимость (НДС)" }
    { id: 197, german: "die Minusstunde, -n", russian: " неотработанный час (дефицит рабочего времени)" }
    { id: 198, german: "die Niederlassung, -en", russian: " филиал, отделение" }
    { id: 199, german: "die Packung, -en", russian: " пачка, упаковка" }
    { id: 200, german: "die Personalabteilung, -en", russian: " отдел кадров" }
    { id: 201, german: "die Pinnwand, ⸚e", russian: " пробковая доска (для объявлений/заметок)" }
    { id: 202, german: "die Preisliste, -n", russian: " прайс-лист" }
    { id: 203, german: "die Qualitätssicherung, -en", russian: " обеспечение качества, контроль качества" }
    { id: 204, german: "die Quittung, -en", russian: " квитанция, расписка" }
    { id: 205, german: "die Registrierung, -en", russian: " регистрация" }
    { id: 206, german: "die Reinigung, -en", russian: " чистка, уборка, химчистка" }
    { id: 207, german: "die Rezeptur, -en", russian: " рецептура, рецепт (изготовления)" }
    { id: 208, german: "die Routine, -n", russian: " рутина, повседневный навык" }
    { id: 209, german: "die Rückmeldung, -en", russian: " обратная связь, ответ" }
    { id: 210, german: "die Schicht, -en", russian: " смена (на работе)" }
    { id: 211, german: "die Schichtarbeit, -en", russian: " сменная работа" }
    { id: 212, german: "die Schreibwaren (Pl.)", russian: " канцелярские товары (канцелярия)" }
    { id: 213, german: "die Sonnenenergie", russian: " солнечная энергия" }
    { id: 214, german: "die Spedition, -en", russian: " транспортно-экспедиторская компания (логистика)" }
    { id: 215, german: "die Textilie, -n", russian: " текстильное изделие, текстиль" }
    { id: 216, german: "die Überstunde, -n", russian: " сверхурочный час (работа во внеурочное время)" }
    { id: 217, german: "die Umgebung, -en", russian: " окружение, обстановка / окрестности" }
    { id: 218, german: "die Unannehmlichkeit, -en", russian: " неприятность, неудобство" }
    { id: 219, german: "die Verfügbarkeit", russian: " доступность, наличие" }
    { id: 220, german: "die Vertretung, -en", russian: " замещение (коллеги), временное исполнение обязанностей" }
    { id: 221, german: "die Voraussetzung, -en", russian: " условие, требование, предпосылка" }
    { id: 222, german: "die Vorschrift, -en", russian: " предписание, инструкция, правило" }
    { id: 223, german: "die Ware, -n", russian: " товар" }
    { id: 224, german: "die Werkstatt", russian: " мастерская" }
    { id: 225, german: "die Wochenendzulage, -n", russian: " надбавка за работу в выходные дни" }
    { id: 226, german: "die Zeitarbeit", russian: " временная работа (через агентство занятости)" }
    { id: 227, german: "dringend", russian: " срочно, неотложно" }
    { id: 228, german: "einfallsreich", russian: " находчивый, изобретательный" }
    { id: 229, german: "ein großes Herz haben für + A.", russian: " иметь доброе/большое сердце для..." }
    { id: 230, german: "ein Praktikum machen", russian: " проходить практику / стажировку" }
    { id: 231, german: "einsortieren", russian: " сортировать, раскладывать по местам" }
    { id: 232, german: "einen Account anlegen", russian: " создать учетную запись (аккаунт)" }
    { id: 233, german: "eine Ausbildung abschließen", russian: " окончить профессиональное обучение" }
    { id: 234, german: "eine Ausbildung machen zu + D.", russian: " получать проф. образование по специальности..." }
    { id: 235, german: "eine Bestellung aufgeben (gibt auf, gab auf, hat aufgegeben)", russian: " сделать / оформить заказ" }
    { id: 236, german: "eine Bestellung aufnehmen (nimmt auf, nahm auf, hat aufgenommen)", russian: " принять заказ" }
    { id: 237, german: "eine Entscheidung treffen (trifft, traf, hat getroffen)", russian: " принимать решение" }
    { id: 238, german: "eine Prüfung bestehen", russian: " сдать экзамен" }
    { id: 239, german: "ein Ziel erreichen", russian: " достигать цели" }
    { id: 240, german: "entgegennehmen (nimmt entgegen, nahm entgegen, hat entgegengenommen)", russian: " принимать, получать (официально, из рук в руки)" }
    { id: 241, german: "entwickeln", russian: " развивать, разрабатывать" }
    { id: 242, german: "erledigen", russian: " выполнять, доводить до конца (задачу, дело)" }
    { id: 243, german: "erfolgreich", russian: " успешный" }
    { id: 244, german: "erstellen", russian: " составлять, создавать, разрабатывать" }
    { id: 245, german: "ernst nehmen (nimmt ernst, nahm ernst, hat ernst genommen)", russian: " принимать всерьез" }
    { id: 246, german: "etw. erstattet bekommen (bekommt, bekam, hat bekommen)", russian: " получить возмещение / компенсацию за что-либо" }
    { id: 247, german: "etw. gesetzlich regeln", russian: " регулировать что-либо на законодательном уровне" }
    { id: 248, german: "jdm. etw. ersparen", russian: " избавлять кого-либо от чего-либо (от лишних хлопот)" }
    { id: 249, german: "fällig", russian: " подлежащий оплате / исполнению в срок (срочный)" }
    { id: 250, german: "frühestmöglich", russian: " как можно скорее, в ближайшие сроки" }
    { id: 251, german: "führen zu + D.", russian: " приводить к (чему-либо)" }
    { id: 252, german: "gepflegt", russian: " ухоженный, опрятный" }
    { id: 253, german: "halbtags arbeiten", russian: " работать на полставки (полдня)" }
    { id: 254, german: "hauptsächlich", russian: " главным образом, в основном" }
    { id: 255, german: "hinweisen auf + A. (weist hin, wies hin, hat hingewiesen)", russian: " указывать, обращать внимание на что-либо" }
    { id: 256, german: "im selben Jahr", russian: " в том же году" }
    { id: 257, german: "in der Lage sein zu + D. (ist, war, ist gewesen)", russian: " быть в состоянии (сделать что-либо)" }
    { id: 258, german: "individuell", russian: " индивидуальный" }
    { id: 259, german: "innovativ", russian: " инновационный" }
    { id: 260, german: "jederzeit", russian: " в любое время" }
    { id: 261, german: "kassieren", russian: " принимать деньги (в кассу), рассчитывать покупателей" }
    { id: 262, german: "kommunizieren mit + D.", russian: " общаться / коммуницировать с..." }
    { id: 263, german: "kompetent", russian: " компетентный" }
    { id: 264, german: "konzentriert", russian: " сосредоточенный" }
    { id: 265, german: "krankschreiben (schreibt krank, schrieb krank, hat krankgeschrieben)", russian: " выписывать больничный, освобождать от работы по болезни" }
    { id: 266, german: "lieferbar", russian: " доступный для поставки (в наличии для заказа)" }
    { id: 267, german: "mit den Händen работать", russian: " работать руками" }
    { id: 268, german: "montieren", russian: " монтировать, собирать (оборудование, детали)" }
    { id: 269, german: "motiviert", russian: " мотивированный" }
    { id: 270, german: "nach langem Überlegen", russian: " после долгих размышлений" }
    { id: 271, german: "nachhaltig", russian: " устойчивый, экологичный, долгосрочный" }
    { id: 272, german: "parallel", russian: " параллельно, одновременно" }
    { id: 273, german: "pflegen", russian: " ухаживать, заботиться" }
    { id: 274, german: "pharmazeutisch", russian: " фармацевтический" }
    { id: 275, german: "praxisorientiert", russian: " ориентированный на практику, практический" }
    { id: 276, german: "präzise", russian: " точный, аккуратный" }
    { id: 277, german: "quittieren", russian: " подтверждать распиской (или подписью), квитировать" }
    { id: 278, german: "reinschnuppern in + A.", russian: " присмотреться к чему-то (попробовать себя в какой-то сфере)" }
    { id: 279, german: "reklamieren", russian: " предъявлять претензию (рекламацию), жаловаться на качество товара" }
    { id: 280, german: "rückwirkend", russian: " имеющий обратную силу, задним числом" }
    { id: 281, german: "schmal", russian: " узкий" }
    { id: 282, german: "schwerfallen (fällt schwer, fiel schwer, ist schwergefallen)", russian: " даваться с трудом, тяжело даваться" }
    { id: 283, german: "seinen Meister machen", russian: " получить квалификацию мастера" }
    { id: 284, german: "selbstverständlich", russian: " разумеется, само собой разумеющийся" }
    { id: 285, german: "sich auskennen mit + D. (kennt sich aus, kannte sich aus, hat sich ausgekannt)", russian: " хорошо разбираться в чём-либо" }
    { id: 286, german: "sich bemühen um + A.", russian: " стараться, стремиться к чему-либо / заботиться о чём-либо" }
    { id: 287, german: "sich bewerben (bewirbt, bewarb, hat beworben)", russian: " подавать заявление о приеме на работу" }
    { id: 288, german: "sich etw. räumlich vorstellen", russian: " пространственно представлять что-либо" }
    { id: 289, german: "sich herausstellen", russian: " выясняться, оказываться" }
    { id: 290, german: "sich interessieren für + A.", russian: " интересоваться чем-либо" }
    { id: 291, german: "sich registrieren bei + D.", russian: " регистрироваться где-либо / в какой-либо системе" }
    { id: 292, german: "sich richten an + A.", russian: " адресоваться кому-то, направляться на..." }
    { id: 293, german: "sich wenden an + A. (wendet sich an, wandte sich an, hat sich angewandt)", russian: " обращаться к (кому-либо)" }
    { id: 294, german: "strukturieren", russian: " структурировать" }
    { id: 295, german: "teamfähig", russian: " способный работать в команде" }
    { id: 296, german: "tätig als + N.", russian: " работать / быть занятым в качестве..." }
    { id: 297, german: "übergeben (übergibt, übergab, hat übergeben)", russian: " передавать (что-то кому-то)" }
    { id: 298, german: "umgehen mit + D. (geht um, ging um, ist umgegangen)", russian: " обращаться с (кем-то/чем-то), справляться с" }
    { id: 299, german: "verladen (verlädt, verlud, hat verladen)", russian: " погружать, производить погрузку" }
    { id: 300, german: "verlassen (verlässt, verließ, hat verlassen)", russian: " покидать, оставлять" }
    { id: 301, german: "verpflichtend", russian: " обязательный (к исполнению)" }
    { id: 302, german: "verstärkung suchen", russian: " искать подкрепление (новых сотрудников в команду)" }
    { id: 303, german: "verunreinigen", russian: " загрязнять, засорять" }
    { id: 304, german: "verfügbar", russian: " доступный, свободный" }
    { id: 305, german: "ververeinzelt / vereinzelt", russian: " единичный, редкий, местами" }
    { id: 306, german: "verzweifelt", russian: " отчаявшийся, в отчаянии" }
    { id: 307, german: "vorausgesetzt", russian: " при условии, если; предполагаемый" }
    { id: 308, german: "vorlegen", russian: " предъявлять, предоставлять (документ начальству/в кассу)" }
    { id: 309, german: "vorwerfen (wirft vor, warf vor, hat vorgeworfen)", russian: " упрекать, винить, вменять в вину" }
    { id: 310, german: "zur Probe arbeiten", russian: " работать на испытательном сроке (пробно)" }
    { id: 311, german: "zur Verfügung stellen", russian: " предоставлять в распоряжение" }
    { id: 312, german: "zur Verfügung stehen (steht, stand, hat gestanden)", russian: " находиться в распоряжении" }
    { id: 313, german: "zurückkehren zu + D.", russian: " возвращаться к (чему-либо / кому-либо)" }
    { id: 314, german: "zuverlässig", russian: " надежный" }
    { id: 315, german: "zählen zu + D.", russian: " относиться к..., считаться..." }
];