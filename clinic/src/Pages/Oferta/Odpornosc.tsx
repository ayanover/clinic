import '../PageStyles/Biorezonans.css'
import photo from '../../assets/gabinet.jpg'
import bioresonance from '../../assets/grzyby.jpg'

function Odpornosc() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <div className={'section-container'}>
                    <h2>Terapia <span>Grzybów</span></h2>

                    <div className={'content-section photo-section'}>
                        <img src={bioresonance} alt={'biores'}/>
                        <a><span>Biorezonans</span> jest specjalistyczną metodą diagnostyki i terapii, która
                            zapoczątkowała zupełnie
                            nowe podejście do medycyny. Zasady obowiązujące w tej metodzie potwierdzają najnowsze
                            wyniki badań w dziedzinie biofizyki i mechaniki kwantowej, dotychczasowo pomijane w
                            medycynie konwencjonalnej.
                            <br/>
                            <br/>
                            W terapii biorezonansowej wykorzystuje się istniejące w organizmie człowieka drgania
                            elektromagnetyczne, które są nadrzędne w stosunku do procesów biochemicznych i nimi
                            sterują.
                        </a>

                    </div>
                    <div className={'content-section'}>
                        <a>
                            <br/>
                            <br/>
                            <span>Biorezonans</span> potrafi wykryć nawet ukryte przyczyny choroby i przeprowadzić delikatną formę
                            kuracji leczniczej.
                            Opierając się na znajomości dokładnie określonych wartości liczbowych pól
                            elektromagnetycznych możliwe jest ustalenie, czy narząd emituje pole odpowiadające
                            zdrowemu organowi, czy uległ on procesowi patologicznemu. Co więcej, znane są częstotliwości
                            emitowane przez każdą poszczególną bakterię, pasożyt, wirus. Warto podkreślić, że terapia
                            biorezonansem nie powoduje skutków ubocznych, więc jest całkowicie bezpieczna
                            <br/>
                            <br/>
                            Biorezonansowe testowanie alergenów jest w pełni uznawane przez Światową Organizację
                            Zdrowia WHO (Od 2019 r.) – jako medycyna naturalna oraz komplementarna, a wyniki są na
                            Zachodzie Europy honorowane na równi z testami skórnym, płatkowym lub z krwi.
                            <br/>
                            <br/>
                            Zakres testów BRT jest jednak znacznie szerszy, gdyż sprawdzeniu możemy poddać praktycznie
                            wszystko co spożywamy, używamy lub nas otacza.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Odpornosc