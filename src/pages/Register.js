import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useHistory } from "react-router-dom";
import "../App.css";

function Register(props) {
  let [pass, setpassword] = React.useState("");
  let [confirmpass, setconfirm] = React.useState("");
  let History = useHistory();

  function handlepass(event) {
    setpassword(event.currentTarget.value);
  }

  function matchPassword(event) {
    setconfirm(event.currentTarget.value);
  }
  function validateForm(event) {
    event.preventDefault();
    if (pass !== confirmpass)
      alert("Password does not match. Please try again");
    else History.push("/RegistrationSuccessful");
  }

  return (
    <div>
      <Header />
      <div className="Login-main">
        <h1>Register</h1>
        <form className="Login-form" onSubmit={validateForm}>
          <div className="label-input">
            <label>Username</label>
            <input type="text" required />
          </div>
          <div className="label-input">
            <label>First Name</label>
            <input type="text" required />
          </div>
          <div className="label-input">
            <label>Last Name</label>
            <input type="text" required />
          </div>
          <div className="label-input">
            <label>E-mail Address</label>
            <input type="email" required />
          </div>
          <div className="label-input">
            <label>Password</label>
            <input
              type="password"
              required
              onChange={handlepass}
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <div className="label-input">
            <label>Confirm Password</label>
            <input type="password" required onChange={matchPassword} />
          </div>
          <div className="check-robot">
            <input type="checkbox" required />
            I'm not a robot
          </div>
          <div className="Login-button">
            <button>Register</button>
          </div>
        </form>
      </div>

      <hr />
      <Footer />
    </div>
  );
}

export default Register;
