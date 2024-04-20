import './ComponentStyles/Footer.css'
import logo from '../assets/Icons/logoOryginalne.svg'
function Footer() {
    return (
        <>
            <footer className={'footer-container'}>
                <div className={'footer'}>
                    <div className={'footer-section'}>
                        <img src={logo} alt={'logo'}/>
                        <div className={'times-section'}>
                            <h3>Godziny otwarcia: </h3>
                            <h4>Pn - Wt: 7 - 16<br/>Sobota: 10 - 14<br/> Niedziela: Nieczynne</h4>
                        </div>

                    </div>
                    <div className={'footer-spacer'}></div>
                    <div className={'footer-section'}>
                        <ul>
                            <li>costam</li>
                            <li>costam</li>
                            <li>costam</li>
                        </ul>
                    </div>
                    <div className={'footer-spacer'}></div>
                    <div className={'footer-section'}>
                        <ul>
                            <li>costam</li>
                            <li>costam</li>
                            <li>costam</li>
                        </ul>
                    </div>
                </div>
                <div className={'copyrights'}>
                    © 2024 BioSfera
                    <br/>
                    Projekt i Realizacja - Jakub Grych
                </div>
            </footer>

        </>
    )
}

export default Footer