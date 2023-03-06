import { Link } from "react-router-dom";
import brand from '../assets/mctechy_logo.png'

import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg container ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           <img src={brand} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item items">
                <Link className="nav-link "  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item items">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item items">
                <Link to="/" className="nav-link ">Blog</Link>
              </li>
              <li className="nav-item items">
                <Link to="/" className="nav-link ">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
