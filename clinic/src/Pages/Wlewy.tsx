import './PageStyles/Wlewy.css'
import photo from '../assets/gabinet.jpg'
import plus from '../assets/Icons/plus.svg'
import bioresonance from '../assets/wlewy.jpg'
import {useState} from "react";

function Wlewy() {
    const dropdownNames = [
        'Kroplówka nawadniająca',
        'Kwas Alfa-Liponowy - Król antyoksydantów',
        'Kroplówka regeneracyjna',
        'Kroplówka odmładzająca!',
        'Bomba minerałowa!',
        'Kroplówka witaminowa na odchudzanie!',
        'Chelatacja',
        'Kroplówka aminokwasowa',
    ]

    const dropdownContent = [
        ['Odpowiednie nawodnienie organizmu jest głównym, najważniejszym czynnikiem dla dobrego funkcjonowania oraz ma bezpośredni wpływ na nasze samopoczucie. Kroplówka nawadniająca to odpowiednio opracowany skład płynu oraz elektrolitów niezbędnych do prawidłowego funkcjonowania organizmu. Podany w formie dożylnej, pozwala szybko i skutecznie uzupełnić poziom tych składników. Terapie nawadniającą poprzedza konsultacja lekarska. Lekarz, na podstawie badań i analizy krwi, ustala zapotrzebowanie pacjenta na płyny i elektrolity. Po przygotowaniu preparatu oraz samego pacjenta, wykonuje się zabieg, który polega na podaniu dożylnie kroplówki nawadniającej. Zabieg trwa tylko kilkanaście minut. Terapia przynosi natychmiastowe efekty. Już po chwili od rozpoczęcia zabiegu mijają zawroty i ból głowy, serce bije spokojnie i mocno, błony śluzowe odzyskują właściwą sobie wilgotność, zmęczenie mija. Zadbaj o nawodnienie swojego organizmu i zastosuj kroplówkę na odwodnienie, która szybko i skutecznie przywróci Ci doskonałe samopoczucie.'],

        ['Jest to czołówka najskuteczniejszych antyoksydatnów, który oddziałuje na układ nerwowy. Numer jeden w profilaktyce i wsparciu leczenia chorób układu nerwowego takich jak stwardnienie rozsiane czy choroba Alzheimer’a. Kwas alfa-liponowy bardzo skutecznie wspomaga Pacjentów z przypadłością wysokiego poziomu trójglicerydów i cholesterolu frakcji LDL, niosących za sobą ryzyko na wystąpienie chorób układu sercowo – naczyniowego.Kroplówkę z kwasem alfa-liponowym polecamy również osobom chorym na cukrzycę. Oprócz tego wlewy dożylne z kwasu alfa-liponowego wspierają sportowców w okresie wysiłku wspomagając regenerację mięśniową i odbudowę zapasów glikogenu w wątrobie. Ponad to wykazano przy regularnym przyjmowaniu wspierające działanie kwasu alfa-liponowego podczas usuniecie metali ciężkich z organizmu.'],

        [`Nie czekaj, zareaguj już teraz. Żyjemy w ciągłym stresie i nie odpoczywamy efektywnie.` +
        'Skutkiem stresu jest ciągłe uczucie zmęczenia, brak sił, energii do życia, osłabienie, bezsenność, spadek odporności. W związku z tym polecamy Państwu wlewy regeneracyjne. Kroplówki regenerujące w naszej ofercie dedykowane są osobom młodym i starszym, które odczuwają spadek formy, wypalenie zawodowe, brak motywacji i energii. Terapia regeneracyjna to szybka i skuteczna pomoc po dużym wysiłku fizycznym, wyczerpujących treningach, w ciągłym stresie i przemęczeniu a także w okresie rekonwalescencji. ' +
        'W skład kroplówki regenerującej wchodzi:\n' +
        '\n' +
        '– witamina C która wzmacnia naczynia krwionośne i błony komórkowe;\n' +
        '\n' +
        '– witamina D która wpływ na siłę i wytrzymałość kości, poza tym wspiera układ immunologiczny;\n' +
        '\n' +
        '– witamina E która reguluje przepływ krwi, poprawia ukrwienie tkanek i wydolność organizmu;\n' +
        '\n' +
        '– witamina A która przyspiesza regenerację, wzmacnia system immunologiczny;\n' +
        '\n' +
        '– witamina PP odpowiedzialna za układ nerwowy, poprawia wygląd skóry poprzez stymulację syntezy kolagenu;\n' +
        '\n' +
        '– witamina H bierze udział w przemianach cukrów i białek, poprawia wygląd skóry, paznokci i włosów;\n' +
        '\n' +
        '– witamina B5 odgrywa ważną rolę w syntezie hormonów sterydowych i cholesterolu oraz przemianach metabolicznych kwasów tłuszczowych.\n' +
        '\n' +
        'Poza tym kroplówka regenerująca zawiera także:\n' +
        '\n' +
        '– sód (Na) – wpływa na funkcjonowanie układu nerwowego oraz gospodarkę kwasowo – zasadową, uczestniczy w regulacji napięcia mięśniowego i ilości oraz rozmieszczenia wody w organizmie;\n' +
        '\n' +
        `– potas (K) – wpływa na  przemianach białek i węglowodanów, poprawia funkcjonowanie układu nerwowego, mięśni, pomaga regulować gospodarkę wodną, pracę nerek i ciśnienie krwi. `],

        [`Wszyscy chcemy zatrzymać czas, zniwelować oznaki starzenia się a suchą, zmęczoną skórę pozbawioną sprężystości i blasku zamienić na piękną i jędrną. Efekt ten można osiągnąć w skuteczny, bezpieczny i niechirurgiczny sposób. Sposobem na odzyskanie młodzieńczego wyglądu skóry, jest kroplówka przeciwstarzeniowa, której skład pozwala na dogłębne odżywienie, nawilżenie i odmłodzenie skóry. 

Kroplówka skład się z:

witaminy A – wspomaga procesy widzenia, poprawia odporność organizmu i ma działanie antyoksydacyjne, a więc usuwa wolne rodniki przyspieszające procesy starzenia się skóry,

witaminy E – witamina młodości, silnym antyoksydant. Zatrzymuje starzenie się skóry i działa przeciwnowotworowo. Reguluje także poziom insuliny we krwi

witaminy D3 – wpływa na stan kości i zębów, chroni układ sercowo – naczyniowy, pomaga chronić przed cukrzycą i wzmacnia system immunologiczny;

witaminy C – ma działanie antyoksydacyjne, poprawia odporność organizmu, bierze udział w procesach metabolicznych, wspiera funkcjonowanie układu nerwowego i oddechowego, przynosi ulgę w stanach wyczerpania.

Odzyskanie młodego wyglądu teraz jest proste. Po terapii Państwa skóra odzyska dawną sprężystość i blask, stanie się jędrna, doskonale nawilżona oraz dogłębnie odżywiona. Takiego efektu nie zapewnią żadne domowe metody odmładzające. Unikną Państwo także bolesnych ingerencji chirurgicznych. Kroplówki polecane są z terapią biorezonansową Aparatem Mora® Beauty „program przeciwzmarszczkowy lub przebarwienia skóry oraz wzmacniający włosy i paznkcie”`],

        [`Kroplówka minerałowa – magnez, sód, potas, jod, chrom, cynk, selen, molibden, mangan uzupełniają niedobór witamin, które odpowiedzialne są za kondycję naszej skóry, paznokci oraz włosów. Pierwiastki te regulują prawidłową funkcję mięśnia sercowego oraz mięśni szkieletowych.

Bomba minerałowa w szczególności polecana jest:

– pacjentom z niedoborami żelaza,

– pacjentom chcącym powstrzymać apetyt na słodycze,

– pacjentom mającym problemy z nadwagą,

– osobą odchudzającym się,

– pacjentkom planującym zajście w ciążę,

– pacjentom z zaburzeniami pracy tarczycy,

– pacjentom na dietach odchudzających chcących powstrzymać łaknienie na słodycze,

– kroplówki zalecane z terapią biorezonanasową – Aparat Mora® Beauty  z dobranym program Biofonii.`],

        [`Odpowiednio dobrany skład witamin wspomaga nas w dążeniu do zdrowej szczupłej sylwetki, ułatwiając odchudzanie. Kroplówki witaminowe na odchudzanie to dobrany skład witamin wspomagających procesy metabolizmu tłuszczów i węglowodanów. Wykazują dużą skuteczność. Dzięki formie wlewu dożylnego wszystkie składniki trafiają prosto do układu krwionośnego. 
        
Kroplówka skład się z:
        
witaminy B1 oraz B2 – które wspomagają procesy spalania węglowodanów i skutecznie regulują proces odchudzania.

witaminy B6 oraz B12 – działają wspomagająco na pracę czerwonych krwinek i usprawniają proces dostarczania tlenu.

witaminy B7 – działa wspomagająco na procesy metabolizmu kwasów tłuszczowych.

witaminy C – zapobiega nadwadze, uczestniczy w procesie, który zapobiega gromadzeniu się tłuszczu w organizmie.

Tak skomponowana kroplówka skutecznie poprawia metabolizm i funkcjonowanie całego organizmu, co prowadzi do utraty zbędnych kilogramów i ma pozytywny wpływ na wygląd sylwetki. Doskonale sprawdza się z terapią biorezonansową Aparatem Mora® Beauty „program kontrola wagi”`],

        ['Chelatacja to metoda oczyszczania organizmu z toksyn, wapnia i metali ciężkich, które odkładają się w tętnicach tworząc złogi i zatory. Chelatacja działa kompleksowo na nasz organizm. Usuwa wapń z blaszek miażdżycowych oczyszczając naczynia krwionośne ze złogów lipidowo-cholesterolowych. Uwapnione złogi miażdżycowe, utrudniają przepływ krwi, oraz doprowadzanie tlenu i substancji odżywczych do tkanek i komórek. Terapia wpływa pozytywnie na stan i drożność naczyń krwionośnych oraz na przepływ krwi. Dzięki chelatacji krążenie krwi w całym ciele jest dużo lepsze a poszczególne tkanki i narządy są lepiej odżywione. Chelatację przeprowadzamy kiedy mamy do czynienia  z zatruciem metalami ciężkimi. Powietrze, które wdychamy oraz żywność, którą jemy każdego dnia to  jedna z przyczyn do profilaktyki zabiegami chelatacji w celu usunięcia metali ciężkich. Nagromadzenie tych pierwiastków przez wiele może być źródłem rozwój groźnych chorób oraz nowotworów. Chelatacja jest bardzo pomocna w przypadku miażdżycy i zmian zwyrodnieniowych, rozwijających się latami i w początkowej fazie bezobjawowo.\n' +
        '\n' +
        'Chelatacja poprawia ukrwienie przez co nasz organizm może lepiej funkcjonować. Wskazania do chelatacji to:\n' +
        '\n' +
        '– choroba wieńcowa \n' +
        '\n' +
        '– po przebytym zawale serca \n' +
        '\n' +
        '– przewlekłe niedokrwienie kończyn, \n' +
        '\n' +
        '– zaburzenia krążenia mózgowego \n' +
        '\n' +
        '– zwężeniem światła tętnic szyjnych i kręgowych,\n' +
        '\n' +
        '– zaburzeń równowagi, czucia, niedowładów\n' +
        '\n' +
        '– po przebytym udarze \n' +
        '\n' +
        '– dla osób starszych\n' +
        '\n' +
        '– cukrzyca typu II \n' +
        '\n' +
        '– choroba Alzheimera\n' +
        '\n' +
        '– w chorobach oczu spowodowanych zwapnieniem siatkówki,\n' +
        '\n' +
        '– zaburzeniach słuchu, potencji, migrenie, zaburzeniach równowagi oraz w wielu innych chorobach spowodowanych zaburzeniami gospodarki wapnia w organizmie\n' +
        '\n' +
        '– przy zapobieganiu chorobom nowotworowym'],

        ['Rzadko kto potrafi tak przygotowywać posiłki, aby zapewnić optymalną dawkę każdego z aminokwasów. Dlatego super wyjściem są aminokwasy w kroplówce. \n' +
        '\n' +
        'W kroplówce aminokwasowej znajduje się:\n' +
        '\n' +
        '– glutamina uczestnicząca w procesach spalania tłuszczu i budowy mięśni, pełni również rolę neuroprzekaźnikiem;\n' +
        '\n' +
        '– leucyna zapobiegająca zniszczeniu mięśni przy większym wysiłku fizycznym, pobudza hormony takie jak somatotropina, insulina i hormony tarczycy;\n' +
        '\n' +
        '– walina podnosi odporność organizmu, ma pozytywny wpływ na układ nerwowy, reguluje ilość azotu i glukozy;\n' +
        '\n' +
        '– seryna jest niezbędna do prawidłowego funkcjonowania układu nerwowego, bierze udział w procesach metabolicznych;\n' +
        '\n' +
        '– metionina ma działanie antyoksydacyjne, reguluje pracę tarczycy;\n' +
        '\n' +
        '– fenyloalanina reguluje pracę układu nerwowego, tarczycy i nadnerczy, poprawia samopoczucie i poziom energii;\n' +
        '\n' +
        '– alanina podnosi wydolność organizmu i koncentrację;\n' +
        '\n' +
        '– izoleucyn stymuluje układ immunologiczny, poprawia metabolizm pomaga regulować poziom krwi w organizmie;\n' +
        '\n' +
        '– glicyna jest jednym z budulców kolagenu, wpływa także na syntezę glukozy i kreatyny;\n' +
        '\n' +
        '– lizyna wspomaga wchłanianie wapnia i syntezę białek, uczestniczy w produkcji hormonów, enzymów oraz przeciwciał;\n' +
        '\n' +
        '– metionina antyoksydant, zapobiega stłuszczeniu wątroby, reguluje pracę tarczycy;\n' +
        '\n' +
        '– arginina uczestniczy w regulacji ciśnienia krwi, zmniejsza ryzyko zawału serca, reguluje działanie insuliny i hormonu wzrostu;\n' +
        '\n' +
        '– cytrulina poprawia napływ krwi do mięśni poddawanych wysiłkowi w szczególnie polecana sportowcom;\n' +
        '\n' +
        '– tauryna przyspiesza regenerację mięśni po wysiłku, ma działanie detoksykujące, zwiększa siłę skurczów serca.\n' +
        '\n' +
        'Aminokwasy pełnią w organizmie wiele bardzo ważnych zadań. Niedobory mogą zaburzyć funkcjonowanie niektórych układów, a następnie całego ustroju. Dlatego warto korzystać z możliwości, jakie oferują aminokwasy w kroplówce. To szybki i skuteczny sposób na uzupełnienie ich poziomu. Zabieg poprzedzony jest konsultacją lekarską i badaniem krwi. Podania aminokwasów dożylnie to optymalne rozwiązanie ominięcia układu pokarmowego, a do krwiobiegu dostarczana jest dokładnie taka ilość aminokwasów, jaka jest potrzebna.'],

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
                                        <a href={'tel:577-935-145'}><h3>Zarejestruj się!</h3></a>
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