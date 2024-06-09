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
                    <div className={'price-container'}><h4>Pierwsza wizyta - ogólna diagnostyka + pierwsza terapia</h4>
                        <div className={'price-item'}><h3>300 zł</h3></div>
                    </div>
                    <h1>Diagnostyka</h1>
                    <div className={'banner-separator'}></div>
                    <div className={'prices'}>
                        <div className={'price-container'}><h4>Test pokarmowy ( żywność, barwniki, aromaty, słodziki,
                            konsrwanty- ok. 150 alergenów)</h4>
                            <div className={'price-item'}><h3>200 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test pyłkowy (kwiaty, trawy, krzewy, pleśnie, drzewa,
                            zioła, zboża - ok. 100 alergenów)</h4>
                            <div className={'price-item'}><h3>200 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Pełny test alergiczny (ok 400 alergenów)</h4>
                            <div className={'price-item'}><h3>350 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test na obecność pasożytów (80 pasożytów)</h4>
                            <div className={'price-item'}><h3>140 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test na obecność pierwotniaków (40 pierwotniaków)</h4>
                            <div className={'price-item'}><h3>140 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test na boreliozę i koinfekcje (ok. 70 rodzajów)</h4>
                            <div className={'price-item'}><h3>230 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test na obecność bakterii (93 bakterie )</h4>
                            <div className={'price-item'}><h3>130 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test na obecność grzybów ( ok. 85 rodzajów)</h4>
                            <div className={'price-item'}><h3>130 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test niedoborów witamin i mikroelementów (ok. 70
                            rodzajów)</h4>
                            <div className={'price-item'}><h3>130 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Test organów oraz znalezienie przyczyny ich obciążeń (75
                            najważniejszych narządów człowieka)</h4>
                            <div className={'price-item'}><h3>150 zł</h3></div>
                        </div>
                    </div>
                    <br/>

                    <h1>Terapia</h1>
                    <div className={'banner-separator'}></div>
                    <div className={'prices'}>
                        <div className={'price-container'}><h4>Terapia antynikotynowa wraz z detoksykacją organizmu</h4>
                            <div className={'price-item'}><h3>220 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Pakiet - 2 terapie antynikotynowe</h4>
                            <div className={'price-item'}><h3>400 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Terapie: borelioza, pasożyty, grzyby, bakterie wraz z
                            detoksykacją organizmu oraz wsparciem
                            narządów -</h4>
                            <div className={'price-item'}><h3>150 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Pakiet 3 terapie-</h4>
                            <div className={'price-item'}><h3>400 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Sprawdzenie zgodności suplementów przy terapii
                            GRATIS</h4>
                            <div className={'price-item'}><h3>0 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Jedna terapia odczulająca - 2 alergeny wraz z
                            usprawnieniem układu wydalniczego</h4>
                            <div className={'price-item'}><h3>150 zł</h3></div>
                        </div>
                        <div className={'price-container'}><h4>Pakiet: 3 terapie odczulające</h4>
                            <div className={'price-item'}><h3>400 zł</h3></div>
                        </div>
                    </div>
                    <br/>

                </div>
            </div>
        </div>
    )
}

export default Cennik