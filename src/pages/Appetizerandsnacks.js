import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImagesR from "../components/ImagesR";
import Nuggets from "../components/pics/chickennuggets.jpg";
import Pakora from "../components/pics/appetizers/pakora.jpg";
import Vegsamosa from "../components/pics/appetizers/VeggSamosa.jpg";
import Beefsamosa from "../components/pics/appetizers/Beefsamosa.jpg";
import Breadrolls from "../components/pics/appetizers/Breadrolls.jpg";
import ChickenPatties from "../components/pics/appetizers/chickenpatties.jpg";
import Chanachat from "../components/pics/appetizers/chanachat.jpg";
import Dahibary from "../components/pics/appetizers/Dahibary.jpg";
import { Link } from "react-router-dom";
import "../App.css";

function Appetizerandsnacks(props) {
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "60px", width: "80px" }}>
            Home >
          </Link>

          <Link to="/Appetizerandsnacks" style={{ width: "200px" }}>
            Appetizers & Snacks >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>

      <h1 className="page-heading">Appetizers and Snacks</h1>
      <div className="recipe-main">
        <div>
          <ImagesR
            imgadd={Beefsamosa}
            Title="Beef Samosa"
            pageUrl="/BeefSamosa"
            descrp="Beef samosa is made with all-purpose flour stuffed with a mixture of beef mince, spices and green chilli."
          />
        </div>
        <div>
          <ImagesR
            imgadd={Breadrolls}
            Title="Bread Rolls"
            pageUrl="/BreadRolls"
            descrp="A bread roll is referred to as small, often round bread loaf that is served as a meal accompaniment."
          />
        </div>
        <div>
          <ImagesR
            imgadd={Nuggets}
            Title="Chicken Nuggets"
            pageUrl="/ChickenNuggets"
            descrp="Healthy and yummy chicken nuggets made with chicken mince that is breaded or battered, then deep-fried or baked."
          />
        </div>
        <div>
          <ImagesR
            imgadd={Chanachat}
            Title="Chana Chat"
            pageUrl="/Chanachat"
            descrp="Chickpea salad usually made with lemon juice, chopped vegetables such as tomatoes, boiled potatoes and onions, green chilis, and chaat masala.
            "
          />
        </div>
        <div>
          <ImagesR
            imgadd={ChickenPatties}
            Title="Chicken Patties"
            pageUrl="/ChickenPatties"
            descrp="Spicy Chicken Patties is prepared with chicken seasoning in puff pastry. "
          />
        </div>
        <div>
          <ImagesR
            imgadd={Dahibary}
            Title="Dahi Bary"
            pageUrl="/Dahibary"
            descrp="Lentil fritters in savory yogurt - a classic dish that we love to eat all summer long!"
          />
        </div>
        <div>
          <ImagesR
            imgadd={Pakora}
            Title="Pakora"
            pageUrl="/Pakora"
            descrp=" Pakora is a delicious crisp fried snack made with gram flour, spices & any main ingredient like onion, paneer or veggies."
          />
        </div>
        <div>
          <ImagesR
            imgadd={Vegsamosa}
            Title="Veggie Samosa"
            pageUrl="/Veggiesamosa"
            descrp="Veggie samosa is made with all-purpose flour stuffed with a mixture of mashed potatoes, spices, corriander leaves and green chilli."
          />
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Appetizerandsnacks;
