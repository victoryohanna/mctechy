import { Link } from "react-router-dom";
import Seprator from "./elements/Seprator";

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
                <Link>Dance Classes</Link>
              </li>
              <li>
                <Link>Classes TimeTable</Link>
              </li>
              <li>
                <Link>Member Subscription</Link>
              </li>
              <li>
                <Link>hire a dance studio</Link>
              </li>
              <li>
                <Link>become a professional</Link>
              </li>
              <li>
                <Link>contact us anytime</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 contact-section">
            <ul>
              <li>
                <Link>Address</Link>
              </li>
              <li>
                <Link>Phone Number</Link>
              </li>
              <li>
                <Link>Email Address</Link>
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
