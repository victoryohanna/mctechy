import { Link } from "react-router-dom";
import "../styles/membership.css";

import image5 from "../assets/015-idea.png";
import image6 from "../assets/018-pointer.png";
import Seprator from "./elements/Seprator";

const Membership = () => {
  return (
    <div className="container member-container">
      <div className="header-text">
        <span>Get Started and Join our club</span>
        <h1>Become a Member of Mctechy</h1>
      </div>
      <Seprator/>
      <div className="member-main row">
        <div className="section-text col-md-6">
          <div className="p-text">
            <p>
              Our client list is drawn from the competitive world of stand-up
              comedy and our boutique, focused company works closely with them
              to develop talents learned on the circuit into the skills needed
              for a long-lasting career performing and writing for television,
              radio and film, writing for television, radio and film.
            </p>
          </div>
          <div className="p2-text">
            <p>Socialize & Make New Friends</p>
            <p>Attend to Any dance Class We Offer</p>
            <ul className="ul1 d-flex">
              <img src={image5} alt="" />
              <li>Learn and Imporve Your Dance Moves</li>
            </ul>
            <ul className="ul2 d-flex">
              <img src={image6} alt="" /> <li>Kickstart Your Dancing Career</li>
            </ul>
          </div>
        </div>
        <div className="section-card col-md-6">
          <div className="crd-body">
            <div className="price-tag">
              <div className="amount-tag">
                <h1>&#8358;90k</h1>
              </div>
              <div className="sub-text">
                <span className="sub-o">Only</span>
                <br />
                <span className="text-p">
                  Per <br /> Course
                </span>
              </div>
            </div>
            <div className="list-items">
              <ul>
                <li>Earn a recognized Certificate of Completion</li>
                <li> Become Job Ready</li>
                <li>Learn and Build Your Portfolio</li>
                <li> Internship Opportunities</li>
                <li> Potential for Business Funding</li>
              </ul>
            </div>
            <div className="btn-sect">
              <button className="button" type="button">
                Get Started
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <p>
              Want to attend a free demo class first?{" "}
              <Link to="/">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
