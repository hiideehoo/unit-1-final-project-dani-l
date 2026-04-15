import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoBox from './components/DemoBox';
import FrontPage from './components/FrontPage';
import AboutPage from "./components/AboutPage";
import './App.css'

function App() {

  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<FrontPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/game" element={<DemoBox />} />
        </Routes>
    </Router>
  )
}

export default App;