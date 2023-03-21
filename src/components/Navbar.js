import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-News
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link  dropdown-toggle"
                  to="/"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  Country{" "}
                </Link>
                <ul className="dropdown-menu" style={{ width: "500px" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <li>
                        <button className="dropdown-item" to="/ar/technology">
                          {" "}
                          ARGENTINA
                        </button>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Australia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Austria
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Belgium
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Brazil
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Bulgaria
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Canada
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          China
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Colombia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Cuba
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Czechia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Egypt
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          France
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Germany
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Greece
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Hong Kong
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Hungary
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          India
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Indonesia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Ireland
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Israel
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Italy
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Japan
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Latvia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Lithuania
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Malaysia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Mexico
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Morocco
                        </Link>
                      </li>
                    </div>{" "}
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Netherlands
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          New Zealand
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Nigeria
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Norway
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Philippines
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Poland
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Portugal
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Romania
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Russia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Saudi Arabia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Serbia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Singapore
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Slovakia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Slovenia
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          South Africa
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          South Korea
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Sweden
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Switzerland
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Taiwan
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Thailand
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Turkey
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Ukraine
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          UAE
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          United Kingdom
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          USA
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-4">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          Venezuela
                        </Link>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
