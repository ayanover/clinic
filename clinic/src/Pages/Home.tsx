import './PageStyles/Home.css'
import photo from '../assets/gabinet1.jpg'
import ThreeBoxSection from "../Components/threeBoxSection.tsx";

function Home() {
    return(
        <div className={'home-container'}>
            <div className={'photo-container-home'}>
                <img src={photo} alt={'reception-desk'}/>
                <a>Hot Bio-centrum w <span>TWOJEJ</span> okolicy</a>
            </div>
            <ThreeBoxSection/>
        </div>
    )
}

export default Home