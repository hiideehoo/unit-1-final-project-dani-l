import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoBox from './pages/DemoBox';
import FrontPage from './pages/FrontPage';
import AboutPage from "./pages/AboutPage";
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