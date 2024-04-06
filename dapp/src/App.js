import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.js"
import Policy from './pages/Policy.jsx';

function App() {

  return (
    <div>
    
         <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/policy" element={<Policy />} />
            </Routes>
          </Router>
     
    </div>
  );
}

export default App;