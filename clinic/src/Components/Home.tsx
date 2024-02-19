import '../Styles/Home.css'
import photo from '../assets/bg.jpeg'
function Header() {
    return (
        <div className={'home-container'}>
            <div className={'photo-container'}>
                <img src={photo} alt={'registration-photo'}/>
            </div>
        </div>
    )
}

export default Header