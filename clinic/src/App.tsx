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
          </Routes>
          <Footer/>
          <Cookies/>
        </Router>
    </>
  )
}

export default App
