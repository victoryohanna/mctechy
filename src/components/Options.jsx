import "../styles/optionslist.css";

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
                <select className="form-select" aria-label="Default select example">
                  <option selected>Frontend Development</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="" className="form-label">
                  Schedule
                </label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Full Time (3 Months)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                <button type="button" className="">I'm interested</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default OptionList;
