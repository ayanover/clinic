import './PageStyles/Home.css'
import photo from '../assets/lobby1.jpg'
import ThreeBoxSection from "../Components/threeBoxSection.tsx";

function Home() {
    return(
        <div className={'home-container'}>
            <div className={'photo-container'}>
                <img src={photo} alt={'reception-desk'}/>
                <a>Najnowszy sprzęt w nowej placówce w centrum <span>Rzeszowa</span></a>
            </div>
            <ThreeBoxSection/>
        </div>
    )
}

export default Home