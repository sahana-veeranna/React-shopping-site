import React from 'react';
import './App.css';
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home/Home';
import Items1 from './views/Home/Items1';
import  Items2  from "./views/Home/Items2";
import  Items3  from "./views/Home/Items3";
import  Services  from "./views/Home/Services";
import { About } from "./views/Home/About";
import Gallery from './views/Home/Gallery';
import  Client  from "./views/Home/Client"
import Contactform  from './views/Home/Contactform';
import Login from './views/auth/Login';
import Footer from './views/Home/Footer';
import ShopNow from './components/ShopNow';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    // <Router>
    //     <Route exact path="/login" component={Login} />
    //     <Route exact path="/" component={Home} />
     
    // </Router>
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    
    <Route exact path="/" element={<Login />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/items1" element={<Items1 />} />
    <Route path="/items2" element={<Items2 />} />
    <Route path="/items3" element={<Items3 />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/client" element={ <Client />} />
    <Route path="/contact" element={<Contactform />} />
    <Route path="/shopNow" element={<ShopNow />} />
    
      </Routes>
      </BrowserRouter>
      </>
  );
};

export default App;
