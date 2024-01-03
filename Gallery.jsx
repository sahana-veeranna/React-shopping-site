import React from 'react';

const Gallery = () => {
  return (
    <div className="container">
       <p className="text-center mb-4" style={{ color: 'grey', padding: '20px', fontSize: '40px' }}>GALLERY</p>
      <div className="row" style={{padding:'40px',backgroundColor:'lightcyan'}}>
        <div className="col-md-4">
          <img
            src="https://i.pinimg.com/736x/36/32/09/363209b127086a5a6a9516aedfe8e668.jpg"
            alt="Client 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://i.pinimg.com/originals/45/55/aa/4555aaed4dc1012632236dcffbd60446.jpg"
            alt="Client 3"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://i.pinimg.com/736x/87/64/4a/87644a0b8790ba15fecd68efb485679b.jpg"
            alt="Client 2"
            className="img-fluid"
          />
        </div>
        
       
        <div className="col-md-4"style={{padding:'20px'}}>
          <img
            src="https://www.ensembleindia.com/pub/media/catalog/product//s/a/sab_ens_k_kkp_2003141561.jpg
            "
            alt="Client 4"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4"style={{padding:'20px'}}>
          <img
            src="https://i.pinimg.com/736x/98/18/74/98187409d0c330e243c6e3c872659849.jpg
            "
            alt="Client 4"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4" style={{padding:'20px'}}>
          <img
            src="https://shreefashionwear.com/cdn/shop/products/Online_Cream_Bridal_Lehenga_Heavy_Embroidery_Fully_Stitched_SFAF801.jpg?v=1642456070"
            alt="Client 4"
            className="img-fluid"
          />
        </div>
         </div>
         </div>
   
  );
};

export default Gallery;

