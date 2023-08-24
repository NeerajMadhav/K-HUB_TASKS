import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;