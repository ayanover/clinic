import './ComponentStyles/threeBoxSection.css'
import info from '../assets/info.svg'
import map from '../assets/map.svg'
import phone from '../assets/phone.svg'
function threeBoxSection() {
    return (
        <div className={'three-block-container'}>
            <div className={'single-block first'}>
                <div className={'title'}>
                    <img src={info} alt={'info'}/>
                    <h2> Doweidz <br/>się więcej! </h2>
                </div>
            </div>
            <div className={'single-block second'}>
                <div className={'title'}>
                    <img src={map} alt={'map'}/>
                    <h2> Znajdź nas na mapie! </h2>
                </div>
            </div>
            <div className={'single-block third'}>
                <div className={'title'}>
                    <img src={phone} alt={'phone'}/>
                    <h2> Skontaktuj<br/> się z nami! </h2>
                </div>
            </div>
        </div>
    )
}

export default threeBoxSection