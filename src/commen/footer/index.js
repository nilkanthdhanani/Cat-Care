import React from 'react';
import './footer.scss';
import { facebook, instagram, message, twitter } from '../../assets/images/png.js';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container-hf">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We strive to make every visit a purrfect experience for your beloved pets. At Purrfection Cat Care, we treat every cat as if they were our own, with love, compassion, and the utmost respect. Join our family and let us help your cat live a happy, healthy, and contented life.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li>123 Nevada Street, City, Country</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: contact@catcare.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/catcare"}>Cat Care</Link></li>
              <li><Link to={"/petguide"}>Pet Guide</Link></li>
              <li><Link to={"/contactus"}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us:</h4>
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={message} alt="message" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Cat Care. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
