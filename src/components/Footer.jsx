import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import '../components/comp-styles/Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <img src={logo} className='footer-logo' />
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>
              TourMyMangalore
              <br />
              Email: info@tourmymanglore.com
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className='footer-nav'>
              <Link to='/'><li>Home</li></Link>
              <Link to='/Aboutus'><li>About Us</li></Link>
              <Link to=''><li>Contact</li></Link>
            </ul>
          </div>


          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#" target="_blank"><i className="fab fa-facebook"><FaFacebook /></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram"><FaInstagram /></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-x"><RiTwitterXFill /></i></a></li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="footer-row">
          <p>&copy; {new Date().getFullYear()} TourMyMangalore. All rights reserved. </p>
          {/* <a href="/privacy" className='footer-pri'>Privacy Policy</a> | <a href="/terms" className='footer-pri'>Terms of Service</a></p> */}
        </div>
      </footer>
    </>
  )
}

export default Footer