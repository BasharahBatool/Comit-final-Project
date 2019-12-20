import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <Link to="/" style={{ marginLeft: "80px", width: "80px" }}>
          Home >
        </Link>
      </div>
      <h1 className="page-heading">
        Welcome {props.username} To Kitchen Queen
      </h1>
      <h2 className="page-heading">
        Digital Platform for Authentic Pakistani Cuisine
      </h2>
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
