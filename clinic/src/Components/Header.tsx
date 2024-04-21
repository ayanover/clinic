import './ComponentStyles/Header.css'
import {Link} from 'react-router-dom'
import Home from '../assets/home.svg'
import { MouseEventHandler,useState, useEffect } from 'react';
import logo from '../assets/Icons/logoOryginalne.svg'

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen: MouseEventHandler<HTMLDivElement>  = () => {
        if(!isOpen){
            setIsOpen(true);
        }
        else{
            setIsOpen(false);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) { // Change 100 to the scroll position where you want the style to change
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
                <div className={'header'}>
                    <div className={'logo-container'}>
                        <Link to={'/'}><img src={logo} alt={'LOGO'}/></Link>
                    </div>
                    <div className={'name-container'}>
                        <Link to={'/'}><h1 className={'name-text'}><span>Bio</span>Sfera</h1></Link>
                    </div>
                    <div className={`nav-container ${isOpen ? 'menu-open' : ''}`}>
                        <ul>
                            <li className={'nav-item'}><Link className={'link'} to={'/'}><img src={Home} alt={'Home'}/></Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/biorezonans'} >Biorezonans</Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/wlewy'} >Wlewy witaminowe</Link></li>
                            <li className={'nav-item'}><div className={'link dropdown-link'} to={'/oferta'}>Oferta
                                <div className={'link-dropdown-content'}>
                                    <Link className={'dropdown-item'} to={'/oferta/alergie'}>Terapia alergii</Link>
                                    <Link className={'dropdown-item'} to={'/oferta/nikotyna'}>Terapia antynikotynowa</Link>
                                    <Link className={'dropdown-item'} to={'/oferta/bolerioza'}>Leczenie boleriozy</Link>
                                    <Link className={'dropdown-item'} to={'/oferta/odpornosc'}>Terapia na odporność</Link>
                                    <Link className={'dropdown-item'} to={'/oferta/candida'}>Terapia Candidy</Link>
                                    <Link className={'dropdown-item'} to={'/oferta/grzyby'}>Terapia grzybów</Link>
                                    <Link className={'dropdown-item'} to={'/oferta/pasozyty'}>Terapia antypasożytnicza</Link>
                                </div>
                            </div></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/cennik'}>Cennik</Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/kontakt'}>Kontakt</Link></li>
                            <li className={'nav-item'}><Link className={'link'} to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className={'hamburger'} onClick={handleMenuOpen}>
                        <div className={'bar first-bar'}></div>
                        <div className={'bar second-bar'}></div>
                        <div className={'bar third-bar'}></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header