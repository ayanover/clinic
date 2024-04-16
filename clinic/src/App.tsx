import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header.tsx";
import Home from "./Pages/Home.tsx"
import Biorezonans from "./Pages/Biorezonans.tsx";

function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path={'/'} Component={Home}/>
            <Route path={'/biorezonans'} Component={Biorezonans}/>
            <Route path={'/wlewy'} Component={Home}/>
            <Route path={'/oferta'} Component={Home}/>
            <Route path={'/cennik'} Component={Home}/>
            <Route path={'/kontakt'} Component={Home}/>
          </Routes>
          <footer>

          </footer>
        </Router>
    </>
  )
}

export default App
