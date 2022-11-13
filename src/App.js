import Home from './Components/js/Home.js'
import About from './Components/js/About.js'
import Contact from './Components/js/Contact.js'
import Login from './Components/js/Login.js'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <>
    <Router >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element= {<About />} />
        <Route exact path="/contact" element= {<Contact />} />
        <Route exact path="/login" element= {<Login />} />
      </Routes>
    </Router>
    
    </>
  
  );
  
}

export default App;
