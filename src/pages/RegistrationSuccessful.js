import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useHistory } from "react-router-dom";
import "../App.css";

function RegistrationSuccessful(props) {
  let [isInvalid, setInvalid] = React.useState(false);
  let History = useHistory();

  function handleUsernameChange(event) {
    props.setUsername(event.currentTarget.value);
  }
  function handlePassword(event) {
    props.setPassword(event.currentTarget.value);
  }

  function validateForm(event) {
    event.preventDefault();
    if (props.username === "") alert("Enter username");
    else if (
      props.username.toLowerCase() === "basharah" &&
      props.password === "1234"
    )
      History.push("/");
    else setInvalid(true);
  }

  return (
    <div>
      <Header />
      <div className="Login-main">
        <h3 className="success-message">
          Registered Successfully, please login..!
        </h3>
        <h1>Login</h1>
        {isInvalid && (
          <p style={{ color: "red" }}>
            You have entered an incorrect username/password combination.Please
            try again.
          </p>
        )}
        <form className="Login-form" onSubmit={validateForm}>
          <div className="label-input">
            <label>Username</label>
            <input
              type="text"
              value={props.username}
              required
              onChange={handleUsernameChange}
            />
          </div>
          <div className="label-input">
            <label>Password</label>
            <input
              type="password"
              required
              value={props.password}
              onChange={handlePassword}
              minLength="4"
              maxLenght="8"
            />
          </div>
          <div className="check-robot">
            <input type="checkbox" required />
            I'm not a robot
          </div>
          <div className="Login-button">
            <button>Login</button>
          </div>
        </form>
      </div>

      <hr />
      <Footer />
    </div>
  );
}

export default RegistrationSuccessful;
