import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nuggets from "../components/pics/chickennuggets.jpg";
import Images from "../components/Images";
import Biryani from "../components/pics/Biryani.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import Recipebar from "../components/Recipebar";
import Burger from "../components/pics/Burger.jpg";
import Wings from "../components/pics/appetizers/ChickenWings.jpg";
import ChickenPatties from "../components/pics/appetizers/chickenpatties.jpg";
import Stuffedchickenbread from "../components/pics/Breakfast/stuffedchickenbread.jpg";

function Recipepage(props) {
  let Purl = window.location.href.split("/").slice(-1);
  let purl = "/" + Purl[Purl.length - 1];
  let [likes, setLikes] = React.useState(0);
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <Link to="/" style={{ marginLeft: "60px", width: "80px" }}>
          Home >
        </Link>
        <Link
          to="/Appetizerandsnacks"
          style={{ marginLeft: "0px", width: "190px" }}
        >
          Apetizers & Snacks >
        </Link>
        <Link to="/Recipepage" style={{ width: "170px" }}>
          Chicken Nuggets >
        </Link>
      </div>
      <h1 className="page-heading">{props.username}</h1>

      <div>
        <Recipebar
          Title="Chicken Nuggets"
          image={Nuggets}
          url={purl}
          fav={props.fav}
          setFav={props.setFav}
          likes={likes}
          setLikes={setLikes}
        />

        <div className="page-divider">
          <div className="Recipe-section">
            <img src={Nuggets} alt="Nuggets pic" />
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
          <div className="related-part">
            <div>
              <h1>Related Recipe</h1>
            </div>
            <div className="related-img">
              <Images
                imgadd={Wings}
                Title="Chicken Wings"
                pageUrl="./ChickenWings"
              />
              <Images
                imgadd={Biryani}
                Title="Chicken Biryani"
                pageUrl="./Biryani"
              />
              <Images
                imgadd={Burger}
                Title="Chicken Burger"
                pageUrl="./RiceMeal"
              />
              <Images
                imgadd={ChickenPatties}
                Title="Chicken Patties"
                pageUrl="./Chickenpatties"
              />
              <Images
                imgadd={Stuffedchickenbread}
                Title="Stuffed Chicken Bread"
                pageUrl="./chickenbread"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Recipepage;
