import "../styles/optionslist.css";

import { programs } from "./files/programlist";
const schedules = [
  "Full Time (3 Months)",
  "Evenings Only (6 Months)",
  "Weekends Only (6 Months)",
];

const OptionList = () => {
  return (
    <div className="container options-container">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="" className="form-label">
                Program
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Program</option>
                {programs.map((program, index) => {
                  return <option key={index}>{program}</option>;
                })}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="" className="form-label">
                Schedule
              </label>
              <select
                className="form-select"
                aria-label="Default select"
              >
                <option>Select Time</option>
                {schedules.map((schedule, i) => {
                  return <option key={i}>{schedule}</option>;
                })}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="" className="form-label">
                Contact
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Your email address"
              />
            </div>
            <div className="col-md-3 btn-section">
              <button type="submit">
                I'm interested
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OptionList;
