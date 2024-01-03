import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items2 = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <p className="text-center mb-4" style={{ color: 'grey', padding: '20px', fontSize: '40px', fontFamily: 'cursive' }}>Mens Ethnic Wear</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'lightblue' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">FANCY</h5>
              <img src="https://i.pinimg.com/originals/41/b6/9f/41b69f607ee99af17ca8b4adec5165e2.png"
                className="card-img-top mx-auto"
                style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'lightblue' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">TREND</h5>
              <img src="https://i.pinimg.com/736x/c9/90/13/c99013e3d27c7e8b373629c0af3fccb6.jpg"
                className="card-img-top mx-auto"
                style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'lightblue' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">SUITS</h5>
              <img src="https://i.pinimg.com/originals/a4/97/c5/a497c56e3be2788a716a5f149ad69a33.jpg"
                className="card-img-top mx-auto"
                style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'lightblue' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">ETHNIC</h5>
              <img src="https://i.etsystatic.com/19536903/r/il/fa6c57/3219450896/il_570xN.3219450896_t9p2.jpg"
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
    </div>
  );
};

export default Items2;




