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
      <Link to="/Home" className="link">Home</Link>
      <Link to="/BookShop" className="link">BookShop</Link> 
      <Link to="/About" className="link">Top Facts</Link>
      
    </nav>

    <Routes>
    <Route path ="/BookShop" element={<BookShop/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      
    </Routes>
  </Router>
  )
}

export default App;

