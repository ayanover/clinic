import './ComponentStyles/threeBoxSection.css'
import info from '../assets/Icons/info.svg'
import map from '../assets/Icons/map.svg'
import phone from '../assets/Icons/phone.svg'


function threeBoxSection() {
    return (

        <div className={'three-block-container'}>
            <div className={'single-block first'}>
                <div className={'title'}>
                    <img src={info} alt={'info'}/>
                    <h2> Doweidz <br/>się więcej! </h2>
                </div>
                <div className={'content'}>
                    <h3>Nasz gabinet używa urządzenia Bicom Optima, czyli jednego z najlepszych urządzeń dostępnych na rynku pod względem </h3>
                </div>
            </div>
            <div className={'single-block second'}>
                <div className={'title'}>
                    <img src={map} alt={'map'}/>
                    <h2> Znajdź nas na mapie! </h2>
                </div>
                <div className={'content'}>
                    <h3>Nasz gabinet znajduję się pod adresem:</h3>
                </div>
            </div>
            <div className={'single-block third'}>
                <div className={'title'}>
                    <img src={phone} alt={'phone'}/>
                    <h2> Skontaktuj<br/> się z nami! </h2>
                </div>
                <div className={'content'}>
                    <h3>Zapraszamy do kontaktowania się z nami mailowo:<br/><br/>
                        <span>agnieszka.szeligahomik@gmail.com</span><br/><br/>
                        Bądź pod numer telefonu: <br/><br/>
                        <span>577935145</span></h3>
                </div>
            </div>
        </div>
    )
}

export default threeBoxSection