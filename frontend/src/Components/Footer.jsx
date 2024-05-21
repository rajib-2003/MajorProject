import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="mr-3"><a href="#" className="text-white"><FaFacebookF /></a></li>
              <li className="mr-3"><a href="#" className="text-white"><FaTwitter /></a></li>
              <li className="mr-3"><a href="#" className="text-white"><FaInstagram /></a></li>
              <li className="mr-3"><a href="#" className="text-white"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-3">
        <div className="container">
          <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
