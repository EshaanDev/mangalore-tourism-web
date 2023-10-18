import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../components/comp-styles/Footer.css';

function Footer() {
  return (
    <>
<footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            Tour My Mangalore
            <br />
            Email: info@tourmymanglore.com
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/" className='footer-nav'>Home</a></li>
            {/* <li><a href="/destinations">Destinations</a></li> */}
            {/* <li><a href="/tours">Tours</a></li> */}
            {/* <li><a href="/blog">Blog</a></li> */}
            <li><Link to="/Aboutus" className='footer-nav'/>About Us</li>
            <Link><li className='footer-nav'>Contact</li></Link>
          </ul>
        </div>
        {/* <div className="footer-logo-div">
          <img src={footer_logo} className='footer_logo'/>
          </div> */}

        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#" target="_blank"><i className="fab fa-facebook"><FaFacebook/></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-instagram"><FaInstagram/></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-x"><RiTwitterXFill/></i></a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-row">
        <p>&copy; {new Date().getFullYear()} TourMyMangalore. All rights reserved. | <a href="/privacy" className='footer-pri'>Privacy Policy</a> | <a href="/terms" className='footer-pri'>Terms of Service</a></p>
      </div>
    </footer>
    </>
  )
}

export default Footer