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
          className="mb-3 programs-tabs"
        >
          <Tab eventKey="frontend" title="Frontend Dev">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eos
              laboriosam voluptatibus voluptatem earum fugiat ratione assumenda
              incidunt minus quo, accusamus non perspiciatis repellat aliquid
              tenetur. Fugiat facilis quibusdam animi.
            </p>
          </Tab>
          <Tab eventKey="backend" title="Backend Dev">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eos
              laboriosam voluptatibus voluptatem earum fugiat ratione assumenda
              incidunt minus quo, accusamus non perspiciatis repellat aliquid
              tenetur. Fugiat facilis quibusdam animi.
            </p>
          </Tab>
          <Tab eventKey="product-design" title="Product Design" >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eos
              laboriosam voluptatibus voluptatem earum fugiat ratione assumenda
              incidunt minus quo, accusamus non perspiciatis repellat aliquid
              tenetur. Fugiat facilis quibusdam animi.
            </p>
          </Tab>
          <Tab eventKey="project-mgt" title="Project Management" >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eos
              laboriosam voluptatibus voluptatem earum fugiat ratione assumenda
              incidunt minus quo, accusamus non perspiciatis repellat aliquid
              tenetur. Fugiat facilis quibusdam animi.
            </p>
          </Tab>
          <Tab eventKey="business-analytics" title="Business Anaytics" >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eos
              laboriosam voluptatibus voluptatem earum fugiat ratione assumenda
              incidunt minus quo, accusamus non perspiciatis repellat aliquid
              tenetur. Fugiat facilis quibusdam animi.
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default OurPrograms;
