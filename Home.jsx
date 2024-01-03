import React from 'react';
import Items1 from './Items1';
import Items2 from './Items2';
import Items3 from './Items3';
import Gallery from './Gallery';
import { About } from './About';
import Contactform from './Contactform';
import Services from './Services';
import Footer from './Footer';
import Client from './Client';

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0"> 
        <div className="imagecontainer">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/indian-fashion-designers-1605211357.jpg"
            alt="Your Image"
            className="img-fluid w-100"
            style={{ height: '60vh', paddingTop: '10px' }} // Set the image height to 70% of the viewport height
          />
         <div className="overlay-content">
            <p className="display-4" style={{  fontSize: '3rem',  border: '4px solid white',
                padding: '20px',}}>
             SABYASACHI 
            </p>
          </div>
        </div>
        <div style={{ paddingBottom: '50px' }}>
       
       </div>
      </div>
      
      {/* Components */}
     <div id='items1'>< Items1/></div>
     <div id='about'>< About/></div>
     <div id='services'><Services /></div>
     <div id='gallery'><Gallery/></div>
     <div id='client'><Client/></div>
     <div id='contact'><Contactform/></div>
     <Footer />
    </>
  );
};

export default Home;
