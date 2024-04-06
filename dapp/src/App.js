import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.js";
import Policy from './pages/Policy.js';
import AddPol from './pages/AddPol.js';


function App() {

  return (
    <div>
    
         <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/form" element={<AddPol />} />
             
            </Routes>
          </Router>
     
    </div>
  );
}

export default App;