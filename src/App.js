import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Main from './pages/Components/Main';
import './pages/Components/style.css'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/allpokemon" element={<Main />} />
        </Routes>
      </div>
    </>
  )
}

export default App
