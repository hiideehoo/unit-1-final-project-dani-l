import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoBox from './pages/DemoBox';
import FrontPage from './pages/FrontPage';
import LoadPage from "./pages/LoadPage";
import AboutPage from "./pages/AboutPage";
import './App.css'

function App() {

// manages save data between pages for new and resumed characters
  const [currentSave, setCurrentSave] = useState();
  const [currentWorld, setCurrentWorld] = useState();

  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<FrontPage currentSave={currentSave} setCurrentSave={setCurrentSave} currentWorld={currentWorld} setCurrentWorld={setCurrentWorld}/>} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/load" element={<LoadPage currentSave={currentSave} setCurrentSave={setCurrentSave} currentWorld={currentWorld} setCurrentWorld={setCurrentWorld} />} />
            <Route exact path="/game" element={<DemoBox currentSave={currentSave} setCurrentSave={setCurrentSave} currentWorld={currentWorld} setCurrentWorld={setCurrentWorld}/>} />
        </Routes>
    </Router>
  )
}

export default App;