import './ComponentStyles/Cookies.css'
import cookie from '../assets/Icons/cookie.svg'
import {MouseEventHandler, useState} from "react";

function Cookies() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleCookieClose: MouseEventHandler<HTMLDivElement>  = () => {
        if(!isOpen){
            setIsOpen(true);
        }
        else{
            setIsOpen(false);
        }
    }
    return (
        <>
            <div className={`cookie-container `} onClick={handleCookieClose}>
                <img src={cookie} alt={'Cookie'}/>
            </div>
            <div className={`cookie-preferences ${isOpen ? 'menu-open' : ''}`}>

            </div>
        </>
    )
}

export default Cookies