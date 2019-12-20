import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrendingRecipe from "../components/TrendingRecipe";

function About(props) {
  // function
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "80px", width: "80px" }}>
            Home >
          </Link>
          <Link to="/About" style={{ marginLeft: "0px", width: "80px" }}>
            About >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>
      <div className="heading">
        <h1 className="page-heading">About Us</h1>
      </div>
      <div className="favpage-divider">
        <p className="about">
          Kitchen Queen is for all QUEENS who love cooking. It is all about
          redefining ‘Cooking’ for you! It’s the solution to that never ending
          problem of preparing high quality delicious food and curtailing the
          eating out habits of your loved ones! With modernized and yet simple
          cooking methods, you are surely in for a flavorsome treat with our
          recipes that will surely make you the next talk of the town! Being
          Pakistan’s first authentic digital food portal, we understand your
          difficulty of being unable to execute that perfect dish just by going
          through those long recipes & ending up with something not as good as
          the one you see on paper.{" "}
        </p>
        <div className="related-part" style={{ marginLeft: "40px" }}>
          <TrendingRecipe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
