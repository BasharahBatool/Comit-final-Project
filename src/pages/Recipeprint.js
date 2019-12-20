import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../App.css";

function Recipeprint(props) {
  function printrecipe() {
    window.print();
  }

  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "60px", width: "80px" }}>
            Home >
          </Link>
          <Link
            to="/Appetizerandsnacks"
            style={{ marginLeft: "0px", width: "190px" }}
          >
            Apetizers & Snacks >
          </Link>
          <Link to="/ChickenNuggets" style={{ width: "170px" }}>
            Chicken Nuggets >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>
      <div className="main-recipe">
        <div className="heading">
          <h1>Chicken Nuggets</h1>
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
        <div className="page-divider">
          <div className="Recipe-section">
            {/* <img src={Nuggets} /> */}
            <h2>Ingredients:</h2>
            <ul>
              <li>Chicken Mince 1 kg</li>
              <li>Bread Slice 2</li>
              <li>Onion</li>
            </ul>
            <h2>Direction:</h2>
            <ol>
              <li>Mix all ingredients in chicken mince</li>
              <li>Shape them into nuggets</li>
              <li>Quote cornflour, egg and bread crumbs</li>
              <li>Heat oil and deep or shallow fry</li>
            </ol>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Recipeprint;
