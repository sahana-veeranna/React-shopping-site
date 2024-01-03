import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container">
        <p className="text-center mb-4" style={{ color: 'grey',paddingTop:'100px', fontSize: '40px' }}>CONTACT</p>
        <div className="lead" style={{ color: 'grey',fontFamily:'cursive',fontSize:'20px',textAlign:'center',padding:'30px' }}>
             Any Query?? You May Comtact Us Any Time..
            </div>

        <div className="row" style={{padding:'40px',backgroundColor:'#383635'}}>
      
            <form onSubmit={handleSubmit}>
        <div className="row" >
          <div className="col-md-6" >
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
