import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px', 
  };

  const location = useLocation();
  const isHome = location.pathname === '/home';

  const scrollToAboutSection = (secId) => {
    const section = document.getElementById(secId);
    const scrollPosition = section.offsetTop;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };
  
  return (
    <div className="nav-main-container" style={{ backgroundColor: '#1b0202', color: 'white', display: 'flex' ,justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      <p style={{ color: 'white' }}>SHOPPING INDIA</p>
      <div className="nav-links-container" style={{ display: 'flex', gap: '10px', }}>
        <Link to="/home" style={linkStyle}>Home</Link>
        {isHome ? (<Link to="#" onClick={() => scrollToAboutSection('about')} style={linkStyle}>About</Link>) : (<Link to="/about" style={linkStyle}>About</Link>)}
        {isHome ? (<Link to="#" onClick={() => scrollToAboutSection('services')} style={linkStyle}>Services</Link>) : (<Link to="/services" style={linkStyle}>Services</Link>)}
        {isHome ? (<Link to="#" onClick={() => scrollToAboutSection('gallery')} style={linkStyle}>Gallery</Link>) : (<Link to="/gallery" style={linkStyle}>Gallery</Link>)}
        {isHome ? (<Link to="#" onClick={() => scrollToAboutSection('client')} style={linkStyle}>Partners</Link>) : (<Link to="/client" style={linkStyle}>Partners</Link>)}
        {isHome ? (<Link to="#" onClick={() => scrollToAboutSection('items1')} style={linkStyle}>Items</Link>) : (<Link to="/items1" style={linkStyle}>Items</Link>)}
        {isHome ? (<Link to="#" onClick={() => scrollToAboutSection('contact')} style={linkStyle}>Contact</Link>) : (<Link to="/contact" style={linkStyle}>Contact</Link>)}
        {isHome ? (<Link to="#" onClick={() => scrollToAboutSection('login')} style={linkStyle}>LogOut</Link>) : (<Link to="/login" style={linkStyle}>LogOut</Link>)}
      </div>
    </div>
  );
};

export default Navbar;
