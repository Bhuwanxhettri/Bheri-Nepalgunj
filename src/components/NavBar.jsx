import React,{useState} from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { FaEquals  } from 'react-icons/fa'
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Services from "../pages/Services";
import Why from "../pages/Why";


function NavBar() {
  const [showNavBar,setNavbar] = useState();
  return (
    <>
      <Router>
        <nav className="navBar">
         <div className="container flex justify-between items-center">
            <Link to="/" className="siteTitlle px-8"> Bheri Nepalgunj <span> Tours & Travels Pvt. Ltd.</span></Link>
            <div className="hidden lg:block">
                <ul className="list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/aboutUs">About Us</Link></li>
                  <li><Link to="/Services">Our Services</Link></li>
                  <li><Link to="/blogs">Blog's</Link></li>
                  <li><Link to="/whyUs">Why Travel with us ? </Link></li>
                </ul>
                
            </div>
            <div className="hamburger-menu lg:hidden px-8 text-2xl">
                  <a href="#"><FaEquals/> </a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" className="siteTitlle" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/whyUs" element={<Why />}></Route>
          {/* 👇️ only match this when no other routes match */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavBar;
