import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Seprator from "./elements/Seprator";

import "../styles/programs.css";

const OurPrograms = () => {
  const [key, setKey] = useState("frontend");
  return (
    <div className="container programs-container">
      <div className="header-text">
        <span>Over 20+ Classes per week</span>
        <h1>Explore Our Programs</h1>
      </div>
      <Seprator />
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-2 programs-tabs"
        >
          <Tab eventKey="frontend" title="Frontend Dev">
            <div className="container table-container">
              <table className="table">
                <tbody>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="backend" title="Backend Dev">
          <div className="container table-container">
              <table className="table">
                <tbody>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="product-design" title="Product Design">
          <div className="container table-container">
              <table className="table">
                <tbody>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="project-mgt" title="Project Management">
          <div className="container table-container">
              <table className="table">
                <tbody>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="business-analytics" title="Business Anaytics">
          <div className="container table-container">
              <table className="table">
                <tbody>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                  <tr>
                    <td>8 : 30</td>
                    <td>
                      <h5>Ballet</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                      <h5>Studio #7</h5>
                      <span>Kids/Beginners</span>
                    </td>
                    <td>
                    <div className="percetile">
                        <h5>Availability</h5>
                        <h5>87%</h5>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar "></div>
                      </div>
                    </td>
                    <td>
                      <button>book this class</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          
        </Tabs>
      </div>
    </div>
  );
};

export default OurPrograms;
