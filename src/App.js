import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/work' element={<Work />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </Router>
  );
}

export default App;
