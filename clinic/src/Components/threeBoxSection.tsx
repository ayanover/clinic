import './ComponentStyles/threeBoxSection.css'
import info from '../assets/info.svg'
function threeBoxSection() {
    return (
        <div className={'three-block-container'}>
            <div className={'single-block first'}>
                <div className={'title'}>
                    <img src={info} alt={'info'}/>
                    <h2> O nas </h2>
                </div>
            </div>
            <div className={'single-block second'}>

            </div>
            <div className={'single-block third'}>

            </div>
        </div>
    )
}

export default threeBoxSection