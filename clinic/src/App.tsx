import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header.tsx";
import Home from "./Pages/Home.tsx"

function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path={'/'} Component={Home}/>
            <Route path={'/o-nas'}/>
            <Route path={'/oferta'}/>
            <Route path={'/cennik'}/>
            <Route path={'/kontakt'}/>
          </Routes>
          <footer>

          </footer>
        </Router>
    </>
  )
}

export default App
