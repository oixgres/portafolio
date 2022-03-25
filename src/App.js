import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </Router>
  );
}

export default App;
