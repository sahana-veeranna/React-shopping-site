import React from 'react';

const Services = () => {
  return (
    <div className="container">
       <p className="text-center mb-4" style={{ color: 'grey', padding: '20px', fontSize: '40px' }}>SERVICES</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card" >
            <img src="https://media.istockphoto.com/id/1147463141/photo/woman-cutting-fabric-with-pinking-shears.webp?b=1&s=170667a&w=0&k=20&c=EqMrVUYe2CiL4KU5Wgg-FgHExfqtwPnLdPESTRc2auY=" className="card-img-top" alt="Services" />
            <div className="card-body" style={{textAlign:'center'}}>
              <h5 className="card-title">Custom Tailoring</h5>
              <p className="card-text">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add
                your own content and make changes to the font. 
              </p>
              <button className="btn btn-primary" style={{backgroundColor:'grey'}}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://www.looksmartalterations.com.au/wp-content/uploads/2017/04/LookSmart-A-Woman%E2%80%99s-Guide-to-Clothing-Measurements-450x300.jpg" className="card-img-top" alt="Projects" />
            <div className="card-body" style={{textAlign:'center'}}>
              <h5 className="card-title">Measurements</h5>
              <p className="card-text">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add
                your own content and make changes to the font.
              </p>
              <button className="btn btn-primary" style={{backgroundColor:'grey'}}>
              Enquire Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://irp.cdn-website.com/0736e700/dms3rep/multi/opt_1699994965.jpg" className="card-img-top" alt="Clients" />
            <div className="card-body" style={{textAlign:'center'}}>
              <h5 className="card-title">Dry Cleaning</h5>
              <p className="card-text">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add
                your own content and make changes to the font.
              </p>
              <button className="btn btn-primary" style={{backgroundColor:'grey'}}>
              Enquire Now
              </button>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: '50px' }}>
       
       </div>
      </div>
    </div>
  );
};

export default Services;
