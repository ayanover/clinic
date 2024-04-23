import './PageStyles/Home.css'
import photo from '../assets/droga.webp'
import ThreeBoxSection from "../Components/threeBoxSection.tsx";


function Home() {
    return(
        <div className={'home-container'}>
            <div className={'photo-container-home'}>
                <img src={photo} alt={'reception-desk'}/>
                <div className={'content-container-desc'}>
                    <a>Gabinet Bicom <span>Optima</span> Rzeszów</a>
                    <h4>Twoja droga do zdrowia</h4>
                </div>
            </div>
            <ThreeBoxSection/>
        </div>
    )
}

export default Home