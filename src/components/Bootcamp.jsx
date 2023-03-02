import { Link } from "react-router-dom";
import "../styles/bootcamp.css";

import image3 from "../assets/bootcamp1.jpg";

const BootcampSection = () => {
  return (
    <div className="container container-bootcamp">
      <div className="header-text">
        <p>Unlock Your Potential with Our Tech Bootcamp</p>
        <h1>Get Job-Ready in no time</h1>
      </div>
      <div className="main-section">
        <div className="items-list">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h2>Evenings Only</h2>
                <span>Got a day job? we have program for you</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <h2>Weekends Only</h2>
                <span>Busy Week? We offer weekend classes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h2>Become Certified</h2>
                <span>Got ready with the right certificate</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h2>Onsite Classes</h2>
                <span>Get one on one interaction with tutors</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="image-section">
          <img className="imag" src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BootcampSection;
