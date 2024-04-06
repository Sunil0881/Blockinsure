import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.js";
import Header from '../src/components/Header.js';

function App() {

  return (
    <div>
    
         <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
     
    </div>
  );
}

export default App;