import './ComponentStyles/Header.css'
import {Link} from 'react-router-dom'
import Home from '../assets/home.svg'
function Header() {
    return (
        <>
            <header className={'header-container'}>
                <div className={'header'}>
                    <div className={'logo-container'}>
                        <Link to={'/'}><img src={'#'} alt={'LOGO'}/></Link>
                    </div>
                    <div className={'name-container'}>
                        <Link to={'/'}>BioSfera</Link>
                    </div>
                    <div className={'nav-container'}>
                        <ul>
                            <li className={'nav-item'}><Link className={'link'} to={'/'}><img src={Home} alt={'Home'}/></Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/biorezonans'} >Biorezonans</Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/wlewy'}>Wlewy witaminowe</Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/oferta'}>Oferta</Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/cennik'}>Cennik</Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/kontakt'}>Kontakt</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header