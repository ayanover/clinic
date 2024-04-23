import '../PageStyles/Biorezonans.css'
import photo from '../../assets/gabinet.jpg'
import bioresonance from '../../assets/pasozyty.webp'

function Pasozyty() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <div className={'section-container-bio'}>
                    <h2>Kuracja  <span>antypasożytnicza</span></h2>

                    <div className={'content-section-bio photo-section-bio'}>
                        <img src={bioresonance} alt={'biores'}/>
                        <a><span>Pasożyty </span> stanowią spore zagrożenie dla naszego organizmu. Żywią się komórkami ludzkiego
                    organizmu oraz powodują poważne problemy zdrowotne. Utrudnienie w rozpoznaniu i leczeniu
                    zakażenia stanowi fakt, że pasożyty mogą bytować w różnych organach, gdzie wydalają
                    szkodliwe toksyny. Do objawów zakażenia pasożytniczego należą m.in.:
                        <br/>
                    - chroniczne zmęczenie,
                            <br/>
                    - problemy ze snem,
                            <br/>
                    - problemy skórne,
                            <br/>
                    - zaburzenia psychiczne,
                            <br/>
                    - stany zapalne w różnych częściach ciała,
                            <br/>
                    - problemy z układem moczowym
                            <br/>
                    - bóle stawów lub mięśni
                        </a>

                    </div>
                    <div className={'content-section-bio'}>
                        <a>
                            Jeżeli zauważysz u siebie coś niepokojącego, to skontaktuj się z nami i postaw na skuteczną
                            diagnostykę oraz terapię biorezonansową.
                            <br/>
                            <h3><span>Terapia biorezonansowa na pasożyty</span></h3>

                            Leczenie pasożytów biorezonansem wykazuje dużą skuteczność. Na początku z wykorzystaniem
                            aparatu BICOM Optima przeprowadzimy testy, które pozwolą nam na dokładne rozpoznanie
                            szkodliwego pasożyta lub pasożytów w Twoim organizmie. Obecnie jesteśmy w stanie z dużą
                        <br/>
                            skutecznością rozpoznać większość sklasyfikowanych pasożytów, które występują w ciele
                            człowieka. To m.in.: tasiemiec, glista ludzka, motylica wątrobowa, tęgoryjec dwunastnicy,
                            lamblie, przywry krwi, pierwotniaki czy też nicienie.
                        <br/>Po określeniu drobnoustroju, przechodzimy do właściwej terapii. Polega ona na wykonaniu zabiegów biorezonansowych oraz porady
                            dotyczące suplementacji ziołowej, która wspomaga terapię. Odwrócone fale
                            elektromagnetyczne dostarczane są do organizmu, dzięki czemu redukują, a nawet eliminują
                            szkodliwe działanie pasożytów.
                        <br/>Terapia biorezonansowa może być wykorzystywana jako
                            podstawowe leczenie lub jako wsparcie dla terapii konwencjonalnej.

                            <br/>
                            <h3><span>Kuracja antypasożytnicza</span></h3>
                            Zioła możemy zakupić jako gotowy zestaw lub ziołową mieszankę możemy wykonać sami
                            mieszając w równych proporcjach następujące zioła:
                            <br/>
                            - wrotycz
                            <br/>
                            - piołun
                            <br/>
                            - kora dębu
                            <br/>
                            - kora kruszyny
                            <br/>
                            - goździki
                            <br/>
                            - kocanka
                            <br/>
                            <br/>
                            Zaparzamy łyżkę takiej mieszanki w szklance wrzątku i pijemy dwa razy dziennie po szklance
                            naparu.
                            <br/>
                            Rano na czczo i wieczorem po kolacji.
                            <br/>
                            Kuracja powinna trwać dosyć długo, minimum 2 tygodnie następnie przerwa 1 tydzień i
                            ponownie 2 tygodnie. Najlepiej przedłużyć do 3 miesięcy, jednocześnie oczyszczając i
                            wzmacniając wątrobę, oraz oczyszczanie z metali ciężkich.

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pasozyty