export const About = () => {
  return (
    <div className="container about-background text-center py-4"> 

      <div className="row align-items-center">
        <div className="col-lg-6">
          {/* Updated image with reduced size */}
          <img
            src="https://i.pinimg.com/564x/3d/91/b7/3d91b7f624dbf6ac8980887553b05db4.jpg"
            alt="Company"
            className="img-fluid rounded"
            style={{ maxWidth: '50%', maxHeight: '30%' }} // Reduced image size
          />
        </div>
        <div className="col-lg-6">
          <div className="about-section-text-container text-left" style={{backgroundColor:'lightcyan', padding:'20px'}}>
          <p className="h3 text-uppercase mb-3" style={{ color: 'black',fontFamily:'cursive'}}> {/* Changed text color to blue */}
              ABOUT US
            </p>
            <div className="lead" style={{ color: 'black' }}> {/* Changed text color to green */}
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.I'm a paragraph. Click here to add your own text and edit me.
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.I'm a paragraph. 
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '50px' }}>
       
       </div>
    </div>
  );
};

export default About;
