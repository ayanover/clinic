import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header.tsx";

function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path={'/Home'}/>
            <Route path={'/O-nas'}/>
            <Route path={'/Oferta'}/>
            <Route path={'/Cennik'}/>
            <Route path={'/Kontakt'}/>
          </Routes>
          <footer>

          </footer>
        </Router>
    </>
  )
}

export default App
