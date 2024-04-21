import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header.tsx";
import Home from "./Pages/Home.tsx"
import Biorezonans from "./Pages/Biorezonans.tsx";
import Footer from "./Components/Footer.tsx";
import Wlewy from "./Pages/Wlewy.tsx";
import Cookies from "./Components/Cookies.tsx";
import Blog from "./Pages/Blog.tsx";
import Oferta from "./Pages/Oferta.tsx";
import Cennik from "./Pages/Cennik.tsx";
import Kontakt from "./Pages/Kontakt.tsx";
import Alergie from "./Pages/Oferta/Alergie.tsx";
import Bolerioza from "./Pages/Oferta/Bolerioza.tsx";
import Odpornosc from "./Pages/Oferta/Odpornosc.tsx";
import Pasozyty from "./Pages/Oferta/Pasozyty.tsx";
import Grzyby from "./Pages/Oferta/Grzyby.tsx";
import Nikotyna from "./Pages/Oferta/Nikotyna.tsx";
import Candida from "./Pages/Oferta/Candida.tsx";

function App() {
  return (
      <>
        <Router>
          <Header/>
          <Routes>
            <Route path={'/'} Component={Home}/>
            <Route path={'/biorezonans'} Component={Biorezonans}/>
            <Route path={'/wlewy'} Component={Wlewy}/>
            <Route path={'/oferta'} Component={Oferta}/>
            <Route path={'/cennik'} Component={Cennik}/>
            <Route path={'/kontakt'} Component={Kontakt}/>
            <Route path={'/blog'} Component={Blog}/>
            <Route path={'/oferta/alergie'} Component={Alergie}/>
            <Route path={'/oferta/bolerioza'} Component={Bolerioza}/>
            <Route path={'/oferta/odpornosc'} Component={Odpornosc}/>
            <Route path={'/oferta/pasozyty'} Component={Pasozyty}/>
            <Route path={'/oferta/grzyby'} Component={Grzyby}/>
            <Route path={'/oferta/nikotyna'} Component={Nikotyna}/>
            <Route path={'/oferta/candida'} Component={Candida}/>
          </Routes>
          <Footer/>
          <Cookies/>
        </Router>
      </>
  )
}

export default App
