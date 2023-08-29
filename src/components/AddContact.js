import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center text-uppercase">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group mb-3">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group my-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group mt-4">
              <input
                type="submit"
                className="btn btn-block btn-dark form-control"
                value="ADD"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
