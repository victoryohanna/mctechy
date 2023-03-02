import { Link } from "react-router-dom";
import "../styles/bootcamp.css";
import image3 from "../assets/bootcamp1.jpg";

const BootcampSection = () => {
  return (
    <div className=" container-bootcamp">
      <div className="container header-text">
        <span>unlock your potential with our tech bootcamp</span>
        <h1>Get Job-Ready in no time</h1>
      </div>
      <div className="container">
        <div className="seperator"></div>
        <div className="main-section">
          <div className="items-list">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <h2>Evenings Only</h2>
                  <span>Got a day job? We have program for you</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <h2>Weekends Only</h2>
                  <span>Busy Week? We offer Weekend Only classes</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <h2>Become Certified</h2>
                  <span>Get jon ready with the right certifications</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <h2>Onsite Classes</h2>
                  <span>Get one on one interactions with tutors</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="image-section">
            <img className="imag" src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampSection;
