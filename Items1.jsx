import React from 'react';
import Items2 from './Items2';
import Items3 from './Items3';
import { useNavigate } from 'react-router-dom';

const Items1 = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      {/* <hr style={{ borderTop: '4px solid black' }}/> */}
      <p className="text-center mb-4" style={{ color: 'grey', padding: '20px', fontSize: '40px', fontFamily: 'cursive' }}>Womens Ethnic Wear</p>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'pink' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">BANDHANI</h5>
              <img src="https://assets.vogue.in/photos/5ef5a496800c753aed1a4956/2:3/w_2560%2Cc_limit/anushka%2520sharma%2520indian%2520wear%2520collection.jpg"
                className="card-img-top mx-auto"
                style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'pink' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">SUITS</h5>
              <img src="https://assets.vogue.in/photos/5f1a5ec8a4ac7a9140308cd0/2:3/w_2560%2Cc_limit/Deepika%2520Padukone%2520in%2520a%2520Sabyasachi%2520kurta.jpg
"
                className="card-img-top mx-auto"
                style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'pink' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">NET</h5>
              <img src="https://img.perniaspopupshop.com/catalog/product/m/a/manushi_chillar_in_anita_dongre.jpg?impolicy=listingimagenew
"
                className="card-img-top mx-auto"
                style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'pink' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">FANCY</h5>
              <img src="https://media.vogue.in/wp-content/uploads/2021/11/Alia-Bhatt-Content-Image-11.jpg"
                className="card-img-top mx-auto"
                style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        </div>
      <div style={{ paddingBottom: '70px' }}>
       
      </div>
      <Items2/>
      <Items3/>
    </div>
  );
};

export default Items1;
