import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Images from "../components/Images";
import Biryani from "../components/pics/Biryani.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import Recipebar from "../components/Recipebar";
import Burger from "../components/pics/Burger.jpg";
import Wings from "../components/pics/appetizers/ChickenWings.jpg";
import ChickenPatties from "../components/pics/appetizers/chickenpatties.jpg";
import Stuffedchickenbread from "../components/pics/Breakfast/stuffedchickenbread.jpg";
import VeggSamosa from "../components/pics/appetizers/VeggSamosa.jpg";

function Veggiesamosa(props) {
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
          <Link to="/Veggiesamosa" style={{ width: "170px" }}>
            Veggie Samosa >
          </Link>
        </div>
        <div>
          <h1 className="user-name">{props.username}</h1>
        </div>
      </div>

      <div>
        <Recipebar
          Title="Veggie Samosa"
          image={VeggSamosa}
          url="Samosaprint"
          fav={props.fav}
          setFav={props.setFav}
          likes={likes}
          setLikes={setLikes}
          furl={purl}
        />

        <div className="page-divider">
          <div className="Recipe-section">
            <img src={VeggSamosa} alt="" />
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
            <ul>
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
            </ul>
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
          <div className="related-part">
            <div>
              <h1>Related Recipe</h1>
            </div>
            <div className="related-img">
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
              <Images
                imgadd={Wings}
                Title="Chicken Wings"
                pageUrl="./ChickenWings"
              />
              <Images
                imgadd={Burger}
                Title="Chicken Burger"
                pageUrl="./RiceMeal"
              />
              <Images
                imgadd={Biryani}
                Title="Chicken Biryani"
                pageUrl="./Biryani"
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

export default Veggiesamosa;
