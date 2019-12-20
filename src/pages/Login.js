import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import "../App.css";

function Login(props) {
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
    if (
      props.username.toLowerCase() === "comit" &&
      props.password === "Comit@2019"
    )
      History.push("/");
    else setInvalid(true);
  }

  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "80px", width: "80px" }}>
            Home >
          </Link>

          <Link to="/Login" style={{ width: "80px" }}>
            Login >
          </Link>
        </div>
      </div>
      <div className="Login-main">
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
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
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

export default Login;
