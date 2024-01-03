import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-light py-4" style={{fontSize:'17px'}}>
      <hr style={{ borderTop: '2px solid black' }}/>
      <div className="row">
        <div className="col-md-5" style={{paddingLeft:'100px'}}>
          <div className="footer-section-one">
            <div className="footer-section-columns">
              <p>SABYASACHI</p>
              <p>500 Terry Francine Street,</p>
              <p>San Francisco, CA 94158</p>
              <p>Mail: info@mysite.com</p>
              <p>Tel: 123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="footer-section-two">
            <div className="row">
              <div className="col-6">
                <div className="footer-section-columns1" style={{paddingTop:'10px'}}>
                  <p>MENU</p>
                  <span>About</span><br></br>
                  <span>Projects</span><br></br>
                  <span>Services</span><br></br>
                  <span>Plans & Pricing</span><br></br>
                  <span>Contact</span><br></br>
                </div>
              </div>
              <div className="col-6">
                <div className="footer-section-columns2">
                  <p>SOCIALS</p>
                  <span>© 2035 Sabyasachi.</span>
                  <span>Powered and secured by Wix</span>
                  <span><img src='data:image/jpeg;base64,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'/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
