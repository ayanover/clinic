import './PageStyles/Kontakt.css'
import photo from '../assets/gabinet.jpg'
import Map from '../Components/Map.tsx'
import phone from '../assets/Icons/phone.svg'
import mail from '../assets/Icons/mail.svg'

function Kontakt() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-contact'}>
                <h2>Skontaktuj się z <span>nami!</span></h2>
                <div className={'bar-vertical'}></div>
                <div className={'half-content-container'}>
                    <div className={'contact-title'}>
                        <img src={phone}/>
                        <h2>Zadzwoń do nas już teraz i umów się na wizytę: </h2>
                    </div>
                    <h2><a href={'tel:577-935-145'}>577 935 145</a></h2><br/><br/>

                    <div className={'contact-title'}>
                        <img src={mail}/>
                        <h2>Napisz na naszego maila </h2>
                    </div>
                    <h2><a href={'mailto:kontakt.biosfera@gmail.com'}>kontakt.biosfera@gmail.com</a></h2>
                </div>
                <div className={'half-content-container'}>
                    <Map/>
                </div>
            </div>
        </div>
    )
}

export default Kontakt