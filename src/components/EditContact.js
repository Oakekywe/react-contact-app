import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useSelector((state) => state);
  const currentContact = contact.find((c) => c.id === parseInt(id));

  const checkEmail = contact.find(
    (c) => c.id !== parseInt(id) && c.email === email
  );
  const checkPhone = contact.find(
    (c) => c.id !== parseInt(id) && c.number === parseInt(number)
  );

  useEffect(() => {
    if (currentContact) {
      setEmail(currentContact.email);
      setNumber(currentContact.number);
      setName(currentContact.name);
    }
  }, [currentContact]);

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
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Successfully Updated!");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center text-uppercase">
        Edit Contact
      </h1>
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
            <div className="form-group mt-4 d-flex justify-content-end ">
              <Link to="/" className="btn btn-sm btn-danger me-2">
                CANCEL
              </Link>
              <input
                type="submit"
                className="btn btn-sm btn-dark"
                value="UPDATE"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
