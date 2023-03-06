import { Link } from "react-router-dom";
import {BsTwitter, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs"
import { logo } from "./files/images";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-section">
        <img src={logo} className="footer-logo" alt="..." />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 quick-links">
            <h4>Our Services</h4>
            <hr />
            <ul>
              <li>
                <Link to="/">Frontend Development</Link>
              </li>
              <li>
                <Link to="/">Backend Development</Link>
              </li>
              <li>
                <Link to="/">Product Design</Link>
              </li>
              <li>
                <Link to="/">Project Management</Link>
              </li>
              <li>
                <Link to="/">Business Analytics</Link>
              </li>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 quick-links">
            <h4>Contact Us</h4>
            <hr />
            <ul>
              <li>Address: <p>Development & Innovation Centre No 23, Ven Adefila Street, Off Lajorin Road, G.R.A Ilorin, Kwara State, Nigeria.</p></li>
              <li>Phone Number: +23408090901234</li>
              <li>Email Address: info@mcgeorge.com</li>
            </ul>
          </div>
          <div className="col-md-6 ">
            <div className="foot-note">
              <div className="d-flex justify-content-center">
                <h4>Our Vision</h4>
              </div>
              <hr />
              <p>
                Our client list is drawn from the competitive world of stand-up
                comedy and our boutique, focused company works closely with them
                to develop talents learned on the circuit into the skills needed
                for a long-lasting career performing and writing for
                television."
              </p>
            </div>

            <div className="social-media">
              <ul>
                <li><Link to="/"><BsFacebook/></Link></li>
                <li><Link to="/"><BsLinkedin/></Link></li>
                <li><Link to="/"><BsTwitter/></Link></li>
                <li><Link to="/"><BsInstagram/></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center">
        <span>&copy; Copyright 2021 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
