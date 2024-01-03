import React from 'react';

const Client = () => {
  return (
    <>
      <div className="container">
        <p className="text-center mb-4" style={{ color: 'grey',paddingTop:'90px', fontSize: '40px' }}>PARTNERS</p>
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsIk4Dusjy-bSGtdfXNlD2CyXEWDbKHQMxS_738RuS_IXpHq5Muk63Jfkv41-SKjaoaE&usqp=CAU"
              alt="Client 1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoN9eP7n8fBHsYQFhdPJqCEDtyVdtGWFMU3VeYiczk7INPt7iYU2v2fZZmLC0tGzBYRwM&usqp=CAU"
              alt="Client 2"
              className="img-fluid"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqlGOxhZdABqLYiCljMsNBENj9J8bpMuQH4Q&usqp=CAU"
              alt="Client 3"
              className="img-fluid"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsf2ZeN81sZky-s2zRJwsAiDCGqSCqUakjvWYLx9o58_EIO8x3Run70w_HHBCXyF1ZkQ&usqp=CAU"
              alt="Client 4"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
