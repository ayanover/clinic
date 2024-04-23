import '../PageStyles/Biorezonans.css'
import photo from '../../assets/gabinet.jpg'
import bioresonance from '../../assets/grzyby.jpg'

function Grzyby() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <div className={'section-container-bio'}>
                    <h2>Usuwanie <span>Grzybów</span>, <span>Wirusów</span>, <span>Bakterii</span></h2>

                    <div className={'content-section-bio photo-section-bio'}>
                        <img src={bioresonance} alt={'biores'}/>
                        <a><span>Terapia biorezonansowa</span> wykazuje dużą skuteczność w obszarze diagnostyki
                            zakażenia grzybami,
                            bakteriami i wirusami, a następnie w procesie leczenia tego typu zakażeń. Podczas
                            podstawowego testu z dużą dokładnością określimy szkodliwe drobnoustroje, którezainfekowały
                            Twój organizm. Mogą one bytować w różnych miejscach organizmu orazpowodować szeroki
                            zakres infekcji i niebezpiecznych objawów.
                            <br/>
                            <br/>
                            <span>Terapia biorezonansowa</span> pozwala na
                            wyszczególnienie patogenów będących obciążeniem dla Twojego organizmu.
                            Leczenie polega na przeprowadzeniu sekwencji zabiegów, które zneutralizują działanie
                            szkodliwych drobnoustrojów oraz wyeliminują je z organizmu. W przypadku wybranych grzybów
                            z rodziny Candida, w tym m.in. Candida albicans, nieocenionym wsparciem w terapii okazuje
                            się
                            dedykowana dieta.
                        </a>

                    </div>
                    <div className={'content-section-bio'}>
                        <a>
                            <span>Zabiegi</span> biorezonansem w naszym gabinecie mogą być stosowane jako
                            podstawowa niekonwencjonalna metoda leczenia lub jako wsparcie dla środków
                            farmakologicznych. Każdy przypadek rozpatrujemy indywidualnie. Zakres zabiegów dostosujemy
                            do Twoich potrzeb i stanu zdrowia.
                            <br/>
                            <br/>
                            Proponujemy Ci bezinwazyjną i w pełni bezpieczną terapię. Leczenie biorezonansem grzybów,
                            bakterii i wirusów wykazuje dużą skuteczność. Leczenie polega na przeprowadzeniu sekwencji
                            zabiegów, które zneutralizują działanie szkodliwych drobnoustrojów oraz wyeliminują je z
                            organizmu. W przypadku wybranych grzybów z rodziny Candida, w tym m.in. Candida albicans,
                            nieocenionym wsparciem w terapii okazuje się dedykowana dieta. Zabiegi biorezonansem w
                            naszym gabinecie mogą być stosowane jako podstawowa niekonwencjonalna metoda leczenia
                            lub jako wsparcie dla środków farmakologicznych. Każdy przypadek rozpatrujemy indywidualnie.
                            Zakres zabiegów dostosujemy do Twoich potrzeb i stanu zdrowia.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grzyby