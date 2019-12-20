import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/pics/Logo.png";
import TrendingRecipe from "../components/TrendingRecipe";
import { Link } from "react-router-dom";
import "../App.css";

function FullArticle(props) {
  function printrecipe() {
    window.print();
  }
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "80px", width: "80px" }}>
            Home >
          </Link>
          <Link to="/Articles" style={{ width: "90px" }}>
            Articles >
          </Link>
          <Link to="/FullArticle" style={{ width: "110x" }}>
            Full Article >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>
      <h1 className="page-heading">How To Make Flour & Self-Rising Flour</h1>
      <div className="page-divider">
        <div className="Recipe-section">
          <div className="article-heading">
            <img src={Logo} alt="Logo" />
            <h2>Kitchen Queen</h2>
            <div>
              <button onClick={printrecipe}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <path
                    fill="#685F55"
                    d="M19 8h-2V5H7v3H5v7h2v4h10v-4h2V8zM8 6h8v2H8V6zm0 12v-5h8v5H8zm9-7c-.533 0-1-.467-1-1 0-.533.467-1 1-1s1 .467 1 1c0 .533-.467 1-1 1zm-2 4v1H9v-1h6z"
                  ></path>
                </svg>{" "}
                <span>Print</span>
              </button>
            </div>
          </div>
          <div style={{ marginLeft: "55px" }}>
            <p>
              Posted on <span title="2019-12-10 08:15:36">Dec 10, 2019</span>
            </p>
          </div>

          <p className="article-detail">
            <b>How to Turn All-Purpose Flour into Cake Flour</b>
            <br /> <br />
            Step 1: Measure out the all-purpose flour that you’ll need for your
            recipe. <br />
            <br />
            Step 2: For every cup of flour you use, take out two tablespoons of
            flour and return it to the flour bin. Throw the cup of flour (minus
            the two tablespoons) into a sifter set over a bowl. <br />
            <br />
            Step 3: Replace the two tablespoons of flour that your removed with
            two tablespoons of cornstarch <br />
            <br /> Step 4: Sift the flour and cornstarch together. Sift it
            again, and again and again. The cornstarch and flour need to be well
            incorporated and the flour aerated. Sift the flour and cornstarch
            mixture about five times. <br /> <br />{" "}
            <b>How to Turn All-Purpose Flour into Self-Rising Flour</b>
            <br />
            <br /> For every cup of flour, add 1 and a half tsp of baking powder
            and a pinch of salt. Sieve together and use.
          </p>
        </div>
        <div className="related-part" style={{ width: "500px" }}>
          <TrendingRecipe />
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default FullArticle;
