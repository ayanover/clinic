import '../PageStyles/Biorezonans.css'
import photo from '../../assets/gabinet.jpg'
import bioresonance from '../../assets/candidy.jpeg'

function Candida() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <div className={'section-container-bio'}>
                    <h2 className={'title'}>Terapia <span>Candidy</span></h2>

                    <div className={'content-section-bio photo-section-bio'}>
                        <img src={bioresonance} alt={'biores'}/>
                        <a><span>Grzyby candida albicans </span> stały się plagą XXI wieku! Powodują one szereg dolegliwości całego
                        organizmu, takich jak alergie pokarmowe i wziewne, bóle brzucha, brak odporności, wrażliwość
                        na zapachy, depresja, zmęczenie czy przewlekłe zapalenie zatok. Choroba jest trudna do
                        zdiagnozowania a pacjent jest leczony jedynie objawowo, co nie przynosi długotrwałej poprawy.
                        <br/>
                            <span>Co to jest candida albicans?</span>
                            <br/>
                        Candida albicans jest grzybem, który w niewielkich ilościach żyje u każdego zdrowego człowieka
                        w jelitach i nie wyrządza żadnych szkód. Dopiero jego przerost zaczyna być chorobotwórczy. Nad
                        tym, aby grzyb candida był trzymany w ryzach czuwają dobroczynne bakterie kwasu mlekowego.
                        Niestety często dochodzi do ich zniszczenia i candida zaczyna się rozrastać, przebijaj się przez
                        ścianę jelit i zakaża cały organizm! Wtedy dochodzi o szeregu uciążliwych chorób.
                        </a>

                    </div>
                    <div className={'content-section-bio'}>
                        <a>
                            <br/>
                            <br/>
                            <span>
                                Technologia biorezonansu </span> jest niemiecką koncepcją nowoczesnej diagnostyki. Stosowana jest w
                                medycynie niekonwencjonalnej. Ma bardzo dużą potwierdzalność wyników a terapie oparte na
                                nich charakteryzują się bardzo dużą skutecznością. Za pomocą biorezonansu Bicom można badać
                                cały organizm, nie tylko candidę.
                            <br/>
                            W naszym gabinecie stosujemy kompleksowe podjecie i nawet
                                jeśli mamy przypadek osoby z podejrzeniem candidy to analizujemy cały organizm. Sprawdzamy
                                stan narządów wewnętrznych, kondycje systemu immunologicznego, tolerancje pokarmowe,
                                obciążenia toksynami środowiskowymi takimi jak metale ciężkie oraz wiele innych potencjalnie
                                szkodliwych czynników tym także inne patogeny takie jak bakterie i pasożyty. Jest to ważne,
                                ponieważ kuracje musi zawierać pełne podejście do danego organizmu. Samo wytrucie grzyba
                                jest często mało pomocne, ponieważ nie zostają usunięte przyczyny, dla których ten grzyb się
                                rozrósł i za chwile choroba wraca.
                            <br/>
                            <br/>

                                Wiarygodność pomiarów biorezonansowych jest różna i zależy od jakości sprzętu jak i od
                                doświadczenia osoby wykonującej. Urządzenia Bicom są najlepszymi urządzeniami na świecie,
                                potwierdzalność wyników sięga 98 procent, co jest najwyższym wynikiem wśród innych
                                aparatów na rynku. Nasi terapeuci posiadają odpowiednie certyfikowane szkolenia i są
                                specjalistami w zakresie diagnostyki i terapii Bicom.
                            <br/>
                            <br/>

                            <span>Leczenie alternatywne candidy albicans</span>
                            <br/>
                                Na podstawie wyników stosujemy indywidualnie dobrane kompleksowe kuracje. Podstawą jest
                                działania mające na celu wytrucie grzybów jednak nie można pominąć innych rzeczy
                                wpływających na kondycje organizmu i układu immunologicznego. Bardzo ważne jest
                                przywrócenie naturalnej flory bakteryjnej jelit, odpowiednio dobrana dieta oraz inne
                                ukierunkowane działania w zależności od wyniku.
                            <br/>
                            Często pacjenci z grzybica są także zakażeni
                                pasożytami lub bakteriami i bez ich wytrucia nie da się wyleczyć candidy. Wydawać by się mogło,
                                że środki na candidę usuną także inne patogeny ale nie zawsze tak jest i trzeba wówczas dobrać
                                kilka preparatów.
                            <br/>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Candida