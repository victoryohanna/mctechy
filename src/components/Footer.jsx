import { Link } from "react-router-dom";
import {MdLocationOn} from 'react-icons/md'
import Seprator from "./elements/Seprator";

import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 foot-note">
            <div className=" header-text">
              <span>Any Question</span>
              <h1>Contact Us</h1>
            </div>
            <Seprator />
            <div className="footer-text">
              <p>
                "Our client list is drawn from the competitive world of stand-up
                comedy and our boutique, focused company works closely with them
                to develop talents learned on the circuit into the skills needed
                for a long-lasting career performing and writing for
                television."
              </p>
            </div>
          </div>
          <div className="col-md-3 quick-links">
            <ul>
              <li>
                <Link to="/">Dance Classes</Link>
              </li>
              <li>
                <Link to="/">Classes TimeTable</Link>
              </li>
              <li>
                <Link to="/">Member Subscription</Link>
              </li>
              <li>
                <Link to="/">hire a dance studio</Link>
              </li>
              <li>
                <Link to="/">become a professional</Link>
              </li>
              <li>
                <Link to="/">contact us anytime</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 contact-section">
            <ul>
              <li>
                Address
              </li>
              <li>
               Phone Number
              </li>
              <li>
                Email Address
              </li>
            </ul>
            <div className="social-media">
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center">
        <span>&copy; Copyright 2021. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
