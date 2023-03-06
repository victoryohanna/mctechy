import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/bootcamp.css";

import { bootcamp1, bootcamp2, bootcamp3, bootcamp4 } from "./files/images";

import Seprator from "./elements/Seprator";

const BootcampSection = () => {
  const [events, setEvents] = useState();
  const [weekends, setWeekends] = useState();
  const [certified, setCertified] = useState();
  const [proClasses, setProClasses] = useState();

  const renderImgEvents = () => {
    setEvents(true);
    setCertified(false);
    setProClasses(false);
    setWeekends(false);
  };

  const renderImgWeekend = () => {
    setEvents(false);
    setCertified(false);
    setProClasses(false);
    setWeekends(true);
  };

  const renderImgCert = () => {
    setEvents(false);
    setWeekends(false);
    setProClasses(false);
    setCertified(true);
  };

  const renderImgClasses = () => {
    setEvents(false);
    setWeekends(false);
    setCertified(false);
    setProClasses(true);
  };

  return (
    <div className=" container-bootcamp">
      <div className="container header-text">
        <span>unlock your potential with our tech bootcamp</span>
        <h1>Get Job-Ready in no time</h1>
      </div>
      <div className="container">
        <Seprator />
        <div className="main-section row">
          <div className="items-list col-md-6 ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" onClick={renderImgEvents} className="nav-link">
                  <h2>Evenings Only</h2>
                  <span>Got a day job? We have program for you</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={renderImgWeekend}
                  className="nav-link "                 
                >
                  <h2>Weekends Only</h2>
                  <span>Busy Week? We offer Weekend Only classes</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={renderImgCert} className="nav-link">
                  <h2>Become Certified</h2>
                  <span>Get jon ready with the right certifications</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={renderImgClasses} className="nav-link">
                  <h2>Onsite Classes</h2>
                  <span>Get one on one interactions with tutors</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="image-section col-md-6">
            {events ? (
              <img className="imag img-fluid" src={bootcamp1} alt="" />
            ) : weekends ? (
              <img className="imag img-fluid" src={bootcamp2} alt="" />
            ) : certified ? (
              <img className="imag img-fluid" src={bootcamp3} alt="" />
            ) : proClasses ? (
              <img className="imag img-fluid" src={bootcamp4} alt="" />
            ) : (
              <img className="imag img-fluid" src={bootcamp1} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampSection;
