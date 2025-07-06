import { Link } from 'react-scroll';
import Button from './Button';
import { useState } from 'react';
import './Style.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>SAKSHI</h1>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="home" // NOT "/"
              className="navlink"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="navlink" spy={true} smooth={true} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="project" className="navlink" spy={true} smooth={true} duration={500} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="education" className="navlink" spy={true} smooth={true} duration={500} onClick={closeMenu}>
              Education
            </Link>
          </li>
        </ul>


        <div className='toggle-bar'>
          {/* hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <Button
            text="Get in Touch"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });

            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
