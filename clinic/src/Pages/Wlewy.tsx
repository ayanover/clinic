import './PageStyles/Wlewy.css'
import photo from '../assets/gabinet.jpg'
import plus from '../assets/Icons/plus.svg'
import bioresonance from '../assets/wlewy.jpg'
import {useState} from "react";

function Wlewy() {
    const dropdownNames = [
        'Glutation (TAD) - Cudowna Molekuła',
        'Kwas Alfa-Liponowy - Król antyoksydantów',
        'Solcoseryl - Regeneracja w ampułce',
        'Witamina C - "Molekuła dająca życie"',
        'Magnez - "Pierwiastek życia"',
        'Multiwitamina z ADEK - "Zastrzyk energii dla organizmu"',
        'Kroplówka nawadniająca',
        'Kroplówka wzmacniająca',
        'Kroplówka na wsparcie wątroby',
        'Kroplówka minerałowa',
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
        'witaminy C i N-acetylocysteiny. Naturalnie występuje w naszym organizmie we wszystkich\n' +
        'komórkach, narządach i tkankach. Bierze udział w syntezie białek, detoksykacji a przede\n' +
        'wszystkim naprawie naszego DNA.'],

        ['Kwas Alfa-liponowy inaczej nazywany kwasem ALA, należy do grupy nasyconych kwasów\n' +
        'tłuszczowych. Jest to związek, który posiada zdolność przenikania, co pozwala mu na dotarcie do\n' +
        'każdej komórki naszego organizmu. Metabolizuje się w wątrobie, a jego produkty wydalane są\n' +
        'wraz z moczem i potem. Zatem suplementacja tego kwasu jest niezwykle bezpieczna i nie\n' +
        'stwarza zagrożenia dla zdrowia. Wykazuje on działanie podobne do witamin, lecz niestety nasz\n' +
        'organizm nie jest w stanie sam syntetyzować ALA. Posiada szerokie spectrum działania,\n' +
        'ponieważ nazywany jest „ królem antyoksydantów”. Jego korzystne działanie to przede\n' +
        'wszystkim:'],

        ['Solcoseryl to bezbiałkowy dializat z krwi cieląt. Jest on preparatem szeroko stosowanym w\n' +
        'medycynie, ponieważ ułatwia procesy regeneracyjne. Pozwala on przyśpieszyć odnowę\n' +
        '\n' +
        'uszkodzonych czy rozerwanych tkanek. Dzięki działaniu tego leku, komórki na nowo podejmują\n' +
        'czynność, regenerując się. Posiada wiele właściwości leczniczych. Do najważniejszych zalicza się :\n' +
        '\n' +
        '• Poprawę krążenia krwi\n' +
        '• Usprawnienie procesów naprawczych uszkodzonych tkanek\n' +
        '• Nasila syntezę kolagenu\n' +
        '• Wpływa na przyśpieszenie transportu glukozy oraz substancji odżywczych do komórek\n' +
        '• Niweluje stany zapalne\n' +
        '• Posiada właściwości radio-ochronne\n' +
        '• Zapobiega i zmniejsza wtórne zmiany zwyrodnieniowe\n' +
        '• Stanowi nośnik energii chemicznej używanej w metabolizmie komórki\n' +
        '• Przyczynia się do aktywizacji transportu tlenu i jego wykorzystania przez komórki\n' +
        'organizmu\n' +
        '• Wspomaga układ nerwowy\n' +
        '• Przyśpiesza proces gojenia\n' +
        '\n' +
        'Efekty podania pojawiają się szybko po zakończonej kuracji i wyraźnie przyśpieszają elekty\n' +
        'procesu samonaprawy organizmu i jego regeneracji. Komórki są lepiej ukrwione, dotlenione i\n' +
        'odżywione. Solcoseryl jest zalecany nie tylko przy wszelakich schorzeniach, ale rownież polecany\n' +
        'sportowcom w celu wzmocnienia i regeneracji potreningowej oraz zapobiega spadkom kondycji.\n' +
        'Wlewy wyróżnia fakt, że przynoszą one wiele korzyści bez powodowania istotnych skutków\n' +
        'ubocznych.'],

        ['Układ odpornościowy to jeden z ważniejszych układów naszego organizmu. Chroni nas przed\n' +
        'infekcjami, ale także likwiduje powstające komórki nowotworowe. Gromadzi się ona w\n' +
        'komórkach, a głównie w leukocytach, które wytwarzają przeciwciała potrzebne do walki z\n' +
        'zagrożeniami. Witamina C, którą wiele osób nazywa „ witaminą życia” jest bardzo silnym\n' +
        'antyoksydantem. Przygotowuje nasz organizm do walki z każdym zagrożeniem. Bierze udział w\n' +
        'procesie tworzenia kolagenu, więc poprawia elastyczność stawów i zmniejsza ryzyko kontuzji.'],

        ['Magnez jest pierwiastkiem, który ma ogromny wpływ na funkcjonowanie naszego organizmu.\n' +
        'Jeśli w naszym organizmie jest go za mało, możemy z łatwością rozpoznać jego niedobór.\n' +
        'Pierwsze objawy przejawiają się najczęściej jako:\n' +
        '• drętwienie i mrowienie kończyn\n' +
        '• bóle głowy\n' +
        '• ogólne osłabienie organizmu\n' +
        '• niechęć i pogorszenie samopoczucia\n' +
        '• skurcze w szczególności łydek\n' +
        '• wszelkiego rodzaju drgania tkanek np. powiek\n' +
        '• obniżenie jakości snu\n' +
        'W naszych gabinetach, podaż magnezu odbywa się w formie dożylnej. Skutki odczuwalne są od\n' +
        'razu, a czas trwania kroplówki z magnezem wynosi około 60 minut.'],

        ['Witaminy są to niezbędne elementy, dzięki którym nasz organizm prawidłowo funkcjonuje.\n' +
        'Dzięki nimi mamy dobre samopoczucie a nasze układy i narządy prawidłowo funkcjonują.\n' +
        'Organizm ludzki nie jest w stanie samodzielnie wytwarzać witamin, dlatego niezbędne jest ich\n' +
        'zewnętrzne dostarczanie, m.in. poprzez suplementy doustne czy odpowiednio zbilansowana\n' +
        'dieta. Niestety, wchłanialność witamin z zewnątrz nie jest wystarczająca. By zapewnić naszemu\n' +
        'organizmowi szybszy efekt terapeutyczny, przygotowaliśmy odpowiednio dobrany Kompleks\n' +
        'Witaminowy, który składa się z 12 najważniejszych witamin łatwo przyswajalnych przez nasz\n' +
        'organizm. Dzięki kroplówce z multiwitaminą ADEK nasz organizm dostanie nieprawdopodobny\n' +
        'zastrzyk energii.'],

        ['Kroplówka nawadniająca ma na celu utrzymanie odpowiedniego nawodnienia naszego\n' +
        'organizmu. Zalecana jest, kiedy tracimy płyny przez chorobę, biegunkę, wymioty, gorączkę lub\n' +
        'nie jesteśmy w stanie przyjmować odpowiedniej ilości płynów doustnych.\n' +
        '\n' +
        'W swoim składzie ma elektrolity (sód, potas, magnez, wapń). Aby działanie takiej kroplówki było\n' +
        'jeszcze silniejsze możemy dodać dodatkową porcję magnezu, by przywrócić odpowiednią\n' +
        'równowagę elektrolitową.\n' +
        '\n' +
        'Dobrze nawodniony organizm to wiele korzyści dla zdrowia i ogólnego samopoczucia.'],

        ['Custom Dropdown Content 1'],
        ['Custom Dropdown Content 2'],
        ['Custom Dropdown Content 3'],

        ['Kwas foliowy, inaczej witamina B9, odgrywa kluczową rolę w wielu procesach metabolicznych w\n' +
        'organizmie.\n' +
        'Oto niektóre z głównych korzyści związanych z dostatecznym spożyciem kwasu foliowego:\n' +
        '1. Podział komórkowy: - jest niezbędny do prawidłowego podziału komórek, co jest istotne\n' +
        'dla wzrostu, naprawy tkanek i regeneracji organizmu.\n' +
        '2. Synteza DNA i RNA: - jest niezbędny do syntezy kwasów nukleinowych - DNA i RNA. Jest\n' +
        'to istotne zarówno dla utrzymania zdrowej struktury genetycznej komórek, jak i dla\n' +
        'przekazywania informacji genetycznych podczas podziału komórkowego.\n' +
        '\n' +
        '3. Zdrowie układu nerwowego: - jest kluczowy dla zdrowia układu nerwowego. Jest\n' +
        'szczególnie ważny w okresie prenatalnym, pomagając w zapobieganiu wadom cewy\n' +
        'nerwowej u rozwijającego się płodu.\n' +
        '4. Produkcja krwinek czerwonych: - jest niezbędny do produkcji nowych krwinek\n' +
        'czerwonych. Niedobór może prowadzić do niedokrwistości, co objawia się osłabieniem,\n' +
        'zmęczeniem i innymi problemami zdrowotnymi.\n' +
        '5. Zdrowe serce i układ krążenia: - może pomagać w regulacji poziomu homocysteiny we\n' +
        'krwi. Wysokie poziomy homocysteiny są związane z większym ryzykiem chorób serca i\n' +
        'naczyń krwionośnych. Spożycie wystarczającej ilości kwasu foliowego może pomóc w\n' +
        'zmniejszeniu tego ryzyka.\n' +
        '6. Wsparcie dla układu immunologicznego: - może wspomagać funkcjonowanie układu\n' +
        'immunologicznego, pomagając w ochronie organizmu przed infekcjami i chorobami.\n' +
        '7. Zdrowe funkcje mózgu: - istnieją badania sugerujące, że kwas foliowy może wpływać na\n' +
        'zdrowie mózgu, wspomagając funkcje poznawcze i zmniejszając ryzyko związane z\n' +
        'występowaniem chorób neurodegeneracyjnych, takich jak choroba Alzheimera.\n' +
        '8. Zdrowa skóra: - jest zaangażowany w procesy regeneracji komórek skóry i może\n' +
        'przyczyniać się do utrzymania zdrowego wyglądu skóry.'],

        ['Koenzym Q10 (ubichinon, potocznie nazywany CoQ10) to związek chemiczny obecny w\n' +
        'komórkach ludzkich i wielu innych organizmów. Pełni on istotną rolę w procesach\n' +
        'energetycznych wewnątrzkomórkowych oraz działa jako silny antyoksydant, pomagając w\n' +
        'ochronie komórek przed uszkodzeniami spowodowanymi stresem oksydacyjnym.' +
        'Dlaczego watro skorzystać z kroplówki z Koenzymem Q10\n' +
        'Koenzym Q10 występuje naturalnie w niektórych produktach spożywczych, takich jak mięso,\n' +
        'ryby, orzechy, nasiona, oleje roślinne i warzywa. Jednak jego ilość w diecie może być\n' +
        'ograniczona, a stężenia w organizmie mogą maleć wraz z wiekiem. Z tego powodu,\n' +
        'suplementacja Q10 jest zalecana osobom, zwłaszcza w celach zdrowotnych, a najszybszym i\n' +
        'najbardziej skutecznym rozwiązaniem są wlewy dożylne.'],

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
            </div>
            <div className={'banner'}>
                <h1>W naszej placówce oferujemy szeroką gamę wlewów witaminowych: </h1>
            </div>
            <div className={'content-container-bio'}>
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
                                        {content}
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