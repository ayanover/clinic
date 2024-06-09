import './ComponentStyles/Footer.css'
import logo from '../assets/Icons/logoOryginalne.svg'
import phone from '../assets/Icons/phone.svg'
import mail from '../assets/Icons/mail.svg'
function Footer() {
    return (
        <>
            <footer className={'footer-container'}>
                <div className={'footer'}>
                    <div className={'footer-section'}>
                        <img className={'logo-img'} src={logo} alt={'logo'}/>
                        <div className={'times-section'}>
                            <h3>Godziny otwarcia: </h3>
                            <h4>Pn - Wt: <span>10 - 18</span><br/>Sobota: <span>9 - 15</span><br/> Niedziela: <span>Nieczynne</span></h4>
                        </div>

                    </div>
                    <div className={'footer-spacer'}></div>
                    <div className={'footer-section'}>
                        <h1>Kontakt</h1>
                        <h2><img src={mail} alt='mail'/>E-mail: <span> kontakt@biosfera-rzeszow.pl</span></h2>
                        <h2><img src={phone} alt='mail'/>Tel: <span> 577 935 145</span></h2>
                    </div>
                    <div className={'footer-spacer'}></div>
                    <div className={'footer-section'}>
                        <ul className={'footer-nav'}>
                            <li>Strona główna</li>
                            <li>Biorezonans</li>
                            <li>Wlewy</li>
                            <li>Oferta</li>
                            <li>Cennik</li>
                            <li>Kontakt</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className={'copyrights'}>
                    © 2024 BioSfera
                </div>
            </footer>

        </>
    )
}

export default Footer