import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items3 = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <p className="text-center mb-4" style={{ color: 'grey', padding: '20px', fontSize: '40px', fontFamily: 'cursive' }}>Family Ethnic Wear</p>
      <div className="row justify-content-around">
      <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'pink' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">FESTIVE</h5>
              <img src="https://mcmscache.epapr.in/post_images/website_326/post_27945940/full.jpg"
                className="card-img-top mx-auto"
                style={{ maxWidth: '70%', maxHeight: '40%' }} // Reduced image size
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgr2q4gP-Wu3Z5S0qJ94iTAGTujakNqBkdQ&usqp=CAU"
                className="card-img-top mx-auto"
                style={{ maxWidth: '70%', maxHeight: '40%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex flex-column" style={{ backgroundColor: 'pink' }}>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">TREND</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuPt-00dWLnMkn6Crj88QSXhBAxWhDO7dWAAWvUMuYoj8z690DJJm4UUNr9UoO8Qp9Us&usqp=CAU"
                className="card-img-top mx-auto"
                style={{ maxWidth: '70%', maxHeight: '45%' }} // Reduced image size
                alt="Bandhani"
              />
              <button onClick={()=>{navigate('/shopNow')}} className="btn btn-primary mt-3" style={{backgroundColor:'white', color:'black'}}>Shop Now</button>
            </div>
          </div>
        </div>
      
      </div>
      <div style={{ paddingBottom: '100px' }}></div>
    </div>
  );
};

export default Items3;


