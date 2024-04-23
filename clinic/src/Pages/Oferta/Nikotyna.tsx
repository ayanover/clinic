import '../PageStyles/Biorezonans.css'
import photo from '../../assets/gabinet.jpg'
import bioresonance from '../../assets/papieros.jpg'

function Nikotyna() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <div className={'section-container-bio'}>
                    <h2>Terapia <span>Antynikotynowa</span></h2>

                    <div className={'content-section-bio photo-section-bio'}>
                        <img src={bioresonance} alt={'biores'}/>
                        <a>
                            Opisaną poniżej terapię po raz pierwszy zastosował w leczeniu niemiecki lekarz Franz Morell.
                            Urządzenia komputerowe do terapii antynikotynowej produkowane są w RFN od 1977r. W 1993
                            pierwsze egzemplarze trafiły do Polski.
                            <br/>
                            Na terapię antynikotynową pacjenci zgłaszają się z niedopałkami papierosów, które umieszcza
                            się w elektrodzie detekcyjnej aparatu w celu analizy przez urządzenie rodzaju uzależnienia, na
                            jakie chce się oddziaływać.
                            <br/>
                            <br/>

                        </a>

                    </div>
                    <div className={'content-section-bio'}>
                        <a>

                            W czasie terapii dochodzi do eliminacji głodu nikotynowego. Palacze tytoniu zgłaszają się
                            szczególnie chętnie, ponieważ jest to zabieg w pełni bezbolesny i bezinwazyjny.
                            <br/>
                            Nie ma skutków ubocznych i każdy palący może się jemu poddać. Niezależnie od ilości wypalonych dziennie
                            papierosów oraz stażu palenia metoda ta jest tak skuteczna, że wystarczy jeden 15-20 min.
                            zabieg. Głód nikotynowy ustępuje w chwilę lub kilka – kilkanaście godzin po zabiegu. Najczęściej
                            od następnego dnia rano chęci palenia już nie ma.
                            <br/>
                            Odruchowo zagląda się jeszcze w miejsca w których przechowywane były papierosy, lecz odruch ten słabł będzie z każdym dniem, a po mniej
                            więcej 2 tygodniach ustąpi zupełnie. Dlatego też, aby nie paść ofiarą własnego odruchu wszelkie
                            posiadane papierosy należy wyrzucić, a wprowadzić „środki zastępcze”, np.: gumy do żucia,
                            nasiona słonecznika, orzeszki. Pozwoli to bezpiecznie i łatwiej wygasić odruch.
                            <br/>
                            Rano po przebudzeniu kieruje się wzrok w miejsca, w których papierosy były, ale chęci palenia już być nie
                            powinno.
                            <br/>
                            <br/>
                            Efekt terapii antynikotynowej utrzymuje się nawet w towarzystwie osób palących. Bierne
                            palenie jest w pełni bezpieczne i nie wyzwala potrzeby zapalenia. Dopiero aktywnie wypalony
                            papieros spowoduje nawrót głodu nikotynowego. Zatem najważniejszym zadaniem wszystkich
                            poddających się temu zabiegowi jest,przy braku głodu nikotynowego, nie pozwolenie sobie
                            nawet na jednego papierosa ( za tydzień, dwa, czy nawet rok i więcej).
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nikotyna