import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nuggets from "../components/pics/chickennuggets.jpg";
import Images from "../components/Images";
import "../App.css";
import Recipebar from "../components/Recipebar";

function Recipepage(props) {
  function addToFav(recipe) {
    let newfav = props.fav.slice(0);
    newfav.push(recipe);
    props.setFav(newfav);
  }
  return (
    <div>
      <Header />
      <h1 className="page-heading">Hi {props.username}</h1>

      <div>
        <Recipebar Title="Chicken Nuggets" />
        <div className="page-divider">
          <div className="Recipe-section">
            <img src={Nuggets} />
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
                imgadd={Nuggets}
                Title="Rice Meals"
                pageUrl="./RiceMeal"
              />
              <Images
                imgadd={Nuggets}
                Title="Rice Meals"
                pageUrl="./RiceMeal"
              />
              <Images
                imgadd={Nuggets}
                Title="Rice Meals"
                pageUrl="./RiceMeal"
              />
              <Images
                imgadd={Nuggets}
                Title="Rice Meals"
                pageUrl="./RiceMeal"
              />
              <Images
                imgadd={Nuggets}
                Title="Rice Meals"
                pageUrl="./RiceMeal"
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
