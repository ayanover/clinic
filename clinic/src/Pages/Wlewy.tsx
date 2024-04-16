import './PageStyles/Biorezonans.css'
import photo from '../assets/gabinet.jpg'
import bioresonance from '../assets/wlewy.jpg'

function Wlewy() {
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
                        <a>Gabinety <span>Biosfera</span> oferują także pacjentom wlewy dożylne, które są najbardziej efektywną
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

export default Wlewy