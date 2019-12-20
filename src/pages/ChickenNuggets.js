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

function ChickenNuggets(props) {
  let Purl = window.location.href.split("/").slice(-1);
  let purl = "/" + Purl[Purl.length - 1];
  let [likes, setLikes] = React.useState(0);

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
          {/* <p className="user-name">{purl}</p> */}
        </div>
      </div>
      <div>
        <Recipebar
          Title="Chicken Nuggets"
          image={Nuggets}
          url="/Recipeprint"
          fav={props.fav}
          setFav={props.setFav}
          likes={likes}
          setLikes={setLikes}
          furl={purl}
        />

        <div className="page-divider">
          <div className="Recipe-section">
            <img src={Nuggets} alt="" />
            <h3>Servings : Serves 2-3</h3>
            Perfectly delightful tidbits, enjoyable as finger food or as part of
            a snack/meal with fries or potato wedges, or even enclosed in a wrap
            with some salad and sauce.
            <h2>Ingredients:</h2>
            <ul>
              <li>
                250gm boneless chicken breast, cubed - Marinate the chicken
                cubes in the ingredients below for at least 2 hours.
              </li>
              <li>1 tbsp. soya sauce</li>
              <li>1/2 tsp. salt</li>
              <li>1/2 tsp. ginger-garlic paste</li>
              <li>juice of half a lemon</li>
              <li>1 tsp. black pepper powder</li>
            </ul>
            {/* <h2>Ingredients for coating</h2>
            <ul>
              <li>1 tbsp. yoghurt/curd</li>
              <li> 1-2 cups breadcrumbs</li>
              <li>1 egg, beaten with 1 tsp milk</li>
              <li>pinch of salt and pepper</li>
              <li>oil for deep frying</li>
            </ul> */}
            <h2>Direction:</h2>
            <ol>
              <li>
                Beat one egg with a tsp. of milk. Season with a pinch of salt
                and pepper.
              </li>

              <li>In a separate bowl, pour some breadcrumbs.</li>

              <li>
                Now dip the chicken cubes first in the egg & milk mixture, then
                roll in the breadcrumbs. Fry over medium heat until golden in
                color. Remove and drain any excess oil.
              </li>

              <li>Serve and enjoy!</li>
            </ol>
          </div>
          <div className="related-part">
            <div>
              <h1 className="page-heading">Related Recipes</h1>
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

export default ChickenNuggets;
