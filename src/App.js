import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";
import BookShop from "./BookShop";
import Home from "./Home";
import About from "./About";


function App() {
  return(
  <Router>
    <nav>
      <h2 id="logo">BookNet</h2>
      <Link to="/" className="link">Home</Link>
      <Link to="/bookshop" className="link">BookShop</Link> 
      <Link to="/about" className="link">Top Facts</Link>
      
    </nav>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path ="/bookshop" element={<BookShop/>}/>
    <Route path='/about' element={<About/>}/>
      
    </Routes>
  </Router>
  )
}

export default App;

