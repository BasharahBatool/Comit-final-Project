import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../App.css";

function Samosaprint(props) {
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
          <Link to="/Veggiesamosa" style={{ width: "170px" }}>
            Veggie Samosa >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>
      <div className="main-recipe">
        <div className="heading">
          <h1>Veggie Samosa</h1>
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
            <h3>Servings : Makes 12 Samosas</h3>
            These delicious potato samosas are made with a crisp and flaky
            pastry dough and stuffed with a spicy potato filling. They are
            incredibly easy to prepare.
            <h2>Ingredients:</h2>
            <h3>For wraps</h3>
            <ul>
              <li>
                Maida (All-purpose flour), 2 Cups Namak (Salt), ½ tsp Ajwain
                (Carom seeds)
              </li>
              <li>½ tsp Ghee 3 tbs Pani (Water) ½ Cup or as required</li>
            </ul>
            <h3>For potato filling</h3>
            <li>
              Potatoes: Boiled ½ kg Matar, Coriander: ½ Cup, Green chilies:
              Chopped
            </li>
            <li>
              1 tbs Salt, 1 tsp or to taste Red chili powder, 1 tsp Coriander
              powder
            </li>
            <li>
              1 tsp Turmeric powder, ¼ tsp Chaat masala, ½ tsp Whole spice
              powder
            </li>
            <li>½ tsp Oil, 1-2 tbs Cumin seeds 1, ½ tsp Oil for frying</li>
            <h2>Direction:</h2>
            <ol>
              <li>Mix all ingredients for wraps and knead a soft dough .</li>
              <li>
                Take a small dough,make a ball and coat in dry flour and roll
                out in oval shape with the help of rolling pin and cut into two
                pieces.
              </li>
              <li>
                On one side of dough,apply water,join two sides/edges to make a
                cone and press gently to seal the cone.
              </li>

              <li>
                Fill the cone with potato stuffing,apply water on the edges and
                bring the edges together and seal the edges properly.
              </li>

              <li>In wok,heat oil and fry on medium low flame until golden.</li>
            </ol>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Samosaprint;
