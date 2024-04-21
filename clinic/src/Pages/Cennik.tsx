import './PageStyles/Cennik.css'
import photo from '../assets/gabinet.jpg'

function Cennik() {
    return(
        <div className={'home-container-bio'}>
            <div className={'photo-container-bio'}>
                <img src={photo} alt={'reception-desk'}/>
            </div>
            <div className={'content-container-bio'}>
                <h2>Cennik <span>usług</span></h2>
                <div className={'prices-section-container'}>
                    <h1>Diagnostyka</h1>
                    <div className={'banner-separator'}></div>
                    <div className={'prices'}>
                        <div className={'price-container'}><h4>Test pokarmowy ( żywność, barwniki, aromaty, słodziki, konsrwanty- ok. 150 alergenów)</h4><div className={'price-item'}><h3>300zł</h3></div></div>
                        <div className={'price-container'}><h2></h2><div className={'price-item'}><h3>300zł</h3></div></div>
                        <div className={'price-container'}><h2></h2><div className={'price-item'}><h3>300zł</h3></div></div>
                        <div className={'price-container'}><h2></h2><div className={'price-item'}><h3>300zł</h3></div></div>
                        <div className={'price-container'}><h2></h2><div className={'price-item'}><h3>300zł</h3></div></div>
                        <div className={'price-container'}><h2></h2><div className={'price-item'}><h3>300zł</h3></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cennik