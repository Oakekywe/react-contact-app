import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = useSelector((state) => state);
  const checkEmail = contact.find((c) => c.email === email && email);
  const checkPhone = contact.find(
    (c) => c.number === parseInt(number) && number
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number) {
      toast.warning("Please fill all the fields");
      return false;
    }
    if (checkEmail) {
      toast.warning("Email already Exist");
      return false;
    }
    if (checkPhone) {
      toast.warning("Phone already Exist");
      return false;
    }
    let data = {
      id: contact.length > 0 ? contact[contact.length - 1].id + 1 : 0, //if there is no data, id:1 index = 0
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Successfully Added!");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center text-uppercase">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
