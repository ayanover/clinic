import './PageStyles/Home.css'
import photo from '../assets/droga.jpg'
import ThreeBoxSection from "../Components/threeBoxSection.tsx";


function Home() {
    return(
        <div className={'home-container'}>
            <div className={'photo-container-home'}>
                <img src={photo} alt={'reception-desk'}/>
                <div className={'content-container-desc'}>
                    <a>Twoja droga do <span>Zdrowia</span></a>
                    <h4>Z diagnostyką przy użyciu renomowanego<br/>na całym świecie, urządzenia <span>Bicom Optima</span></h4>
                </div>
            </div>
            <ThreeBoxSection/>
        </div>
    )
}

export default Home