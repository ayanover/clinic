import './ComponentStyles/threeBoxSection.css'
import info from '../assets/Icons/info.svg'
import map from '../assets/Icons/map.svg'
import phone from '../assets/Icons/phone.svg'
import Map from './Map.tsx'


function threeBoxSection() {
    return (

        <div className={'three-block-container'}>
            <div className={'single-block first'}>
                <div className={'title'}>
                    <img src={info} alt={'info'}/>
                    <h2> Doweidz <br/>się więcej! </h2>
                </div>
                <div className={'content'}>
                    <h3>
                        Jesteśmy certyfikowanym gabinetem Biorezonansu w Rzeszowie. Zapewniamy diagnostyke niezawodnym sprzętem Bicom Optima.<br/><br/>
                        W naszej ofercie znajdziesz zarówno diagnostykę, terapię jak i wlewy witaminowe.<br/><br/>
                        W ramach tej samej placówki współpracujemy także z fizjoterapeutą: <a href={'https://marina-gawel.pl'} target="_blank">p. Mariną Gaweł</a>
                    </h3>
                </div>
            </div>
            <div className={'single-block second'}>
                <div className={'title'}>
                    <img src={map} alt={'map'}/>
                    <h2> Znajdź nas na mapie! </h2>
                </div>
                <div className={'content'}>
                    <Map/>
                </div>
            </div>
            <div className={'single-block third'}>
                <div className={'title'}>
                    <img src={phone} alt={'phone'}/>
                    <h2> Skontaktuj<br/> się z nami! </h2>
                </div>
                <div className={'content'}>
                    <h3>Umów się na diagnozę lub terapię biorezonansem Bicom Optima w Rzeszowie już teraz.
                        Zapraszamy również na zapisanie się na wlewy witaminowe!<br/><br/>
                        Zapraszamy do kontaktowania się z nami mailowo:<br/>
                        <span><a href={'mailto:kontakt.biosfera@gmail.com'}>kontakt.biosfera@gmail.com</a></span><br/><br/>
                        Bądź pod numer telefonu: <br/>
                        <span><a href={'tel:577-935-145'}>577935145</a></span></h3>
                </div>
            </div>
        </div>
    )
}

export default threeBoxSection