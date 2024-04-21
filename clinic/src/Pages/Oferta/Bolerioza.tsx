import '../PageStyles/Biorezonans.css'
import photo from '../../assets/gabinet.jpg'
import bioresonance from '../../assets/bolerioza.jpg'

function Bolerioza() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <div className={'section-container'}>
                    <h2>Terapia <span>Boleriozy</span></h2>

                    <div className={'content-section photo-section'}>
                        <img src={bioresonance} alt={'biores'}/>
                        <a><span>Borelioza </span>  to bardzo poważne zagrożenie. Niewłaściwie zdiagnozowana i leczona może
                            powodować dotkliwe konsekwencje zdrowotne dotyczące m.in. tkanki łącznej, mięśniowej i
                            nerwowej. Testy wykonywane z krwi np. Elisa czy Western Blot mają skutecznośc diagnostyczną
                            w przedzialle tylko ok 40%.
                            <br/>
                            W naszym gabinecie proponujemy skuteczne diagnozowanie i
                            terapię boreliozy biorezonansem BICOM Optima oraz doradztwo w terapii ziołowej.
                            <br/>
                            Zapraszamy
                            do zapoznania się z naszą ofertą leczenia alternatywnego.
                        </a>

                    </div>
                    <div className={'content-section'}>
                        <a>
                            <br/>
                            <span>Diagnostyka i leczenie boreliozy biorezonansem</span>
                            <br/>
                            W gabinetach BioSfera w Rzeszowie oferujemy terapię boreliozy za pomocą biorezonansu oraz
                            indywidualnie dobranych protokołow ziołowych.
                            <br/>
                            Posiadamy obszerny i nowoczesny test, dzięki
                            któremu jesteśmy w stanie zdiagnozować występowanie aż 61 patogenów powiązanych z
                            chorobami odkleszczowymi. Na tej podstawie przygotowujemy skuteczneą terapię. Terapia
                            leczenia boreliozy biorezonansem BICOM Optima polega na analizie wzorów częstotliwości i
                            występowania patogenów, a następnie na wysyłaniu do organizmu odpowiedzi zwrotnej. Jej
                            celem jest zredukowanie, a z czasem wyeliminowanie problemu zdrowotnego.
                            <br/>
                            Biorezonans stanowi również cenne wsparcie dla klasycznego leczenia boreliozy z
                            wykorzystaniem środków farmakologicznych. Bakterie ulegają zniszczeniu, a organizm jest
                            stymulowany do jeszcze skuteczniejszej walki z zagrożeniem. Dzięki temu biorezonans pozwala
                            na poradzenie sobie z formami borelii, które są oporne na działanie antybiotyków. Czas trwania
                            terapii zależy od stopnia rozsiania infekcji, typu bakterii oraz obecnego stanu organizmu
                            pacjenta.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bolerioza