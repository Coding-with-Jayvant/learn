import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      
  
  );
}

export default App;
