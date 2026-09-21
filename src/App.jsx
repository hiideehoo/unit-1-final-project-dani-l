import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoBox from './pages/DemoBox';
import FrontPage from './pages/FrontPage';
import LoadPage from "./pages/LoadPage";
import AboutPage from "./pages/AboutPage";
import './App.css'

function App() {

  const [saveFilesList, setSaveFilesList] = useState([]);

  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<FrontPage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/load" element={<LoadPage saveFilesList={saveFilesList} setSaveFilesList={setSaveFilesList}/>} />
            <Route exact path="/game" element={<DemoBox />} />
        </Routes>
    </Router>
  )
}

export default App;