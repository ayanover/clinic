import './PageStyles/Wlewy.css'
import photo from '../assets/gabinet.jpg'
import plus from '../assets/Icons/plus.svg'
import bioresonance from '../assets/wlewy.jpg'
import {useState} from "react";

function Wlewy() {
    const dropdownNames = [
        'Glutation (TAD) - Cudowna Molekuła',
        'Kwas Alfa-Liponowy - Król antyoksydantów',
        'Solcoseryl - regeneracja w ampułce',
        'Witamina C - Molekuła dająca życie',
        'Magnez - pierwiastek życia',
        'Kroplówka regeneracyjna',
        'Kroplówka nawadniająca',
        'Kroplówka wzmacniająca',
        'Kroplówka - wsparcie wątroby',
        'Kroplówka Detox',
        'Kwas foliowy',
        'Koenzym Q10',
        'Witaminy z grupy B',
    ]

    const dropdownContent = [
        ['Glutation (γ-glutamylocysteinyloglicyna – GSH) to tripeptyd złożony z trzech aminokwasów:\n' +
        'kwasu glutaminowego, cysteiny i glicyny. Nazywany jest najlepszym przeciwutleniaczem,\n' +
        'cudownym antyoksydantem czy nawet manną dla mitochondriów komórkowych naszego\n' +
        'organizmu. Znajdziemy go w prawie każdej żywej komórce – bez jego obecności komórka\n' +
        'umiera. Ten związek chemiczny produkowany jest przez organizm człowieka w wątrobie,\n' +
        'ponadto syntetyzowany jest również bezpośrednio w komórce, gdzie powstaje w obecności\n' +
        'witaminy C i N-acetylocysteiny.ddddd Naturalnie występuje w naszym organizmie we wszystkich\n' +
        'komórkach, narządach i tkankach. Bierze udział w syntezie białek, detoksykacji a przede\n' +
        'wszystkim naprawie naszego DNAddd. Wlewy - kroplówka z Glutationem (TAD)\n' +
        'Czynnikami, które wpływają na jego niedobór w organizmie to przede wszystkim:\n' +
        'starzenie się organizmu\n' +
        'zła dieta\n' +
        'spożywanie wysoko przetworzonych produktów\n' +
        'stres\n' +
        'alkohol i używki\n' +
        '\n' +
        'promieniowanie UV\n' +
        'zanieczyszczanie środowiska\n' +
        'infekcje, zakażenia, urazy\n' +
        'wysoki wysiłek fizyczny\n' +
        'Glutation jest niezbędny do syntezy i naprawy DNA, (…) detoksykacji toksyn i kancerogenów”\n' +
        'The ImmuneSystem Cure, Lorna R.Vanderhaeghe &amp; Dr Patrick J.D. Bouic, 2000\n' +
        '„Bez glutationu pozostałe ważne antyoksydanty, takie jak witamina C i E, nie mogą odpowiednio\n' +
        'spełniać swojej funkcji i chronić organizmu przed chorobami”\n' +
        'BreakthroughIn Cell Defense, dr n. med. Allan Somersall i dr n. med. GustavoBounous, FRCS(C),\n' +
        '2001\n' +
        '„Podwyższony poziom glutationu zwalcza oksydację tłuszczów krążących w krwiobiegu, w tym\n' +
        'cholesterolu, opóźniając proces tworzenia się płytek w tętnicach, które są główną przyczyną\n' +
        'większości chorób serca i udaru”\n' +
        'NutritionReviews 54: 1-30, 1996\n' +
        'Obecnie już powszechnie mówi się o jego niesamowitych właściwościach – odtruwającym\n' +
        'działaniu, detoksyfikacji organizmu z ubocznych produktów przemiany materii, leków i\n' +
        'zanieczyszczeń, zapobieganiu stresowi oksydacyjnemu, ochronie komórek przed szkodliwym\n' +
        'działaniem wolnych rodników, potężnym wsparciu układu immunologicznego, działaniu\n' +
        'przeciwzapalnym, eliminacji ognisk rakotwórczych oraz korzystnym wpływie na syntezę białek i\n' +
        'DNA. Niski poziom glutationu w organizmie powoduje, że komórki poddają się procesowi śmierci\n' +
        'komórkowej (apoptozie). Często wskazuje to na stany chorobowe i spadek odporności.\n' +
        '\n' +
        'Glutation został odkryty pod koniec XIX wieku, a badania nad nim trwały już od początku XX\n' +
        'wieku. Ostatnie 30 lat to renesans w suplementacji Glutationem. Oprócz naturalnie rzecz\n' +
        'ujmując zastosowania w medycynie i leczeniu wielu schorzeń (m.in. nowotworów, zaćmy i\n' +
        'jaskry, autyzmu, choroby Parkinsona, Alzheimera, stwardnienia rozsianego, a nawet AIDS),\n' +
        'początkowo stosowały go modelki i aktorki. Iniekcje poprawiały stan skóry, włosów i paznokci\n' +
        'oraz ogólną kondycję organizmu. Aktualnie przeżywa swoje boom wśród osób które uprawiają\n' +
        'zawodowo sport, szczególnie w sporty walki, dyscypliny wytrzymałościowe oraz sporty\n' +
        'sylwetkowe.\n' +
        '\n' +
        'Korzyści wynikające z wlewu dożylnego z glutationem\n' +
        'Tripeptyd wykazuje szerokie właściwości, które wpływają na poprawę działania naszego\n' +
        'organizmu. Jego zastosowanie to m.in.:\n' +
        'usuwa z organizmu metale ciężkie takich jak: arsen, ołów czy rtęć\n' +
        'niszczy szkodliwe wolne rodników\n' +
        'odpowiada za produkcję koenzymów\n' +
        'naprawia białka, które uległy zniszczeniu\n' +
        'poprawia wydolność organizmu\n' +
        'skraca czas potrzebny na regenerację\n' +
        'oczyszcza organizm\n' +
        'wyrównanie gospodarki wodno-elektrolitowej\n' +
        'usunięcie stresu antyoksydacyjnego\n' +
        'oczyszczenie organizmu\n' +
        'wykazuje właściwości przeciwzapalne\n' +
        'wspiera układ immunologiczny\n' +
        'regeneruje wątrobę\n' +
        'usuwa stres antyoksydacyjny\n' +
        'Podsumowując bez glutationu nasze komórki podlegałyby ciągłemu utlenianiu i niszczeniu, a\n' +
        'nasza odporność praktycznie by nie istniała. Jego brak w organizmie powoduje zwiększony\n' +
        'rozwój komórek nowotworowych, a wątroba ulega zniszczeniu, poprzez gromadzone się w niej\n' +
        'toksyny.\n' +
        'Glutation to niewątpliwie środek warunkujący nasze zdrowie i wpływający pozytywnie na\n' +
        'długowieczność. By podnieść jego poziom, należy stosować dietę bogatą w antyoksydanty czyli\n' +
        'wszelkiego rodzaju pokarmy roślinne. Unikać źródeł wolnych rodników tj. pokarmów wysoko\n' +
        'przetworzonych, tłuszczów trans, papierosów, alkoholu oraz paracetamolu. Pomocne jest\n' +
        'regularne stosowanie ozonoterapii, która zwiększa poziom glutationu w organizmie powodując\n' +
        'kontrolowany stres oksydacyjny.'],

        ['Dropdown Item A'],
        ['Dropdown Item B'],
        ['Dropdown Item C'],
        ['Dropdown Item X'],
        ['Dropdown Item Y'],
        ['Dropdown Item Z'],
        ['Custom Dropdown Content 1'],
        ['Custom Dropdown Content 2'],
        ['Custom Dropdown Content 3'],
        ['Custom Dropdown Content 3'],
        ['Custom Dropdown Content 3'],
        ['Custom Dropdown Content 3'],
    ];
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null); // State to manage open dropdown index

    const toggleDropdown = (index: number): void => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle dropdown visibility
    };
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <div className={'menu-container'}>
                    <h3>Na skróty: </h3>
                    <ul>
                        <li> Costam</li>
                        <li> Costam</li>
                        <li> Costam</li>

                    </ul>
                </div>
                <div className={'section-container'}>
                    <h2>Wlewy <span>witaminowe</span></h2>

                    <div className={'content-section photo-section'}>
                        <a>Gabinety <span>Biosfera</span> oferują także pacjentom wlewy dożylne, które są najbardziej
                            efektywną
                            formą wprowadzenia pożądanych środków do ludzkiego krwioobiegu,dzięki czemu są bardziej
                            skuteczne w odróżnieniu do tradycyjnych metod – np. środków doustnych. Dzieje się tak,
                            ponieważ w przypadku środków doustnych stosowanych w dużych ilościach żołądek zostaje
                            bardzo obciążony, co może prowadzić do różnego rodzaju zaburzeń jelitowych, uniemożliwiając
                            skuteczne wchłanianie przez organizm. Wlewy dożylne działają dużo szybciej od tradycyjnych
                            witamin, dlatego bardzo dobrze sprawdzą się u osób mających ich duże niedobory.
                            <br/>
                            <br/>
                            W terapii biorezonansowej wykorzystuje się istniejące w organizmie człowieka drgania
                            elektromagnetyczne, które są nadrzędne w stosunku do procesów biochemicznych i nimi
                            sterują.
                        </a>
                        <img src={bioresonance} alt={'biores'}/>
                    </div>
                </div>
                <div className={'banner'}>
                    <h1>W naszej placówce oferujemy szeroką gamę wlewów witaminowych: </h1>
                </div>
                <div className={'dropdown-container'}>
                    {dropdownContent.map((content, index) => (
                        <div key={index} className="dropdown">
                            <button className="dropdown-btn" onClick={() => toggleDropdown(index)}>
                                <h3>{dropdownNames[index]}</h3>
                                <div className={'icon-container'}>
                                    <img src={plus}/>
                                </div>
                            </button>
                            {openDropdownIndex === index && (
                                <div className="dropdown-content">
                                    {/* Render dropdown content based on the index */}
                                    <h3>
                                        {dropdownContent[index]}
                                    </h3>
                                    <div className={'price'}>
                                        <h4>Cena od: 250 zł</h4>
                                    </div>
                                    <div className={'link-button'}>
                                        <h3>Czytaj więcej</h3>
                                    </div>
                                    <div className={'contact-button'}>
                                        <h3>Zarejestruj się!</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wlewy