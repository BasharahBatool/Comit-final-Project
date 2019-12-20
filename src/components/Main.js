import React from "react";
import Images from "./Images";
import Appetizer from "./pics/appetizer.jpg";
import Biryani from "./pics/Biryani.jpg";
import Breakfast from "./pics/Breakfast.jpg";
import Burger from "./pics/Burger.jpg";
import Chicken from "./pics/Chicken.jpg";
import Curry from "./pics/curry.jpg";
import Deserts from "./pics/deserts.jpg";
import Kabab from "./pics/Kabab.jpg";
import Seafood from "./pics/Seafood.jpg";
import Soup from "./pics/soup.jpg";
import Veggies from "./pics/Veggies.jpg";
import Pickels from "./pics/pickels.jpg";
import Vegsamosa from "./pics/appetizers/VeggSamosa.jpg";
import Breadrolls from "../components/pics/appetizers/Breadrolls.jpg";
import Stuffedchickenbread from "../components/pics/Breakfast/stuffedchickenbread.jpg";
import Pancake from "../components/pics/Breakfast/Pancake.jpg";
import Masalaomlete from "../components/pics/Breakfast/Masala-omelette.jpg";

// import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="main">
        <Images
          imgadd={Appetizer}
          Title="Appetizer & Snacks"
          bradius="100px"
          pageUrl="/Appetizerandsnacks"
        />

        <Images
          imgadd={Breakfast}
          Title="Breakfast & Brunch"
          bradius="100px"
          pageUrl="/BreakfastandBrunch"
        />
        <Images
          imgadd={Biryani}
          Title="Rice Meals"
          bradius="100px"
          pageUrl="./RiceMeal"
        />
        <Images
          imgadd={Deserts}
          Title="Deserts"
          bradius="100px"
          pageUrl="/Deserts"
        />
        <Images
          imgadd={Burger}
          Title=" Burgers & Sandwiches"
          bradius="100px"
          pageUrl="./BurgersAndSandwitches"
        />
        <Images
          imgadd={Chicken}
          Title="Chicken"
          bradius="100px"
          pageUrl="./Chicken"
        />
        <Images
          imgadd={Kabab}
          Title=" Kababs & Cutlet"
          bradius="100px"
          pageUrl="./KababsAndCutlet"
        />
        <Images
          imgadd={Curry}
          Title="Curries"
          bradius="100px"
          pageUrl="./Curries"
        />
        <Images
          imgadd={Veggies}
          Title="Vegetables & Lentils"
          bradius="100px"
          pageUrl="./VegetableAndLentils"
        />
        <Images imgadd={Soup} Title="Soups" bradius="100px" pageUrl="./Soups" />
        <Images
          imgadd={Seafood}
          Title="Seafoods"
          bradius="100px"
          pageUrl="./Seafoods"
        />
        <Images
          imgadd={Pickels}
          Title="Pickels, Chutney & Dips"
          bradius="100px"
          pageUrl="./Curries"
        />
      </div>
      <h1 className="page-heading" style={{ textAlign: "center" }}>
        Trending Recipes
      </h1>
      <div className="main">
        <Images
          imgadd={Vegsamosa}
          Title="Veggie Samosa"
          pageUrl="./Veggiesamosa"
        />
        <Images imgadd={Breadrolls} Title="Bread Roll" pageUrl="./Breadroll" />
        <Images
          imgadd={Stuffedchickenbread}
          Title="Stuffed Chicken Bread"
          pageUrl="./chickenbread"
        />
        <Images imgadd={Pancake} Title="Pan Cake" pageUrl="./Pancake" />
        <Images
          imgadd={Masalaomlete}
          Title="Masala Omelette"
          pageUrl="./masalaomellete"
        />
      </div>
    </div>
  );
}

export default Main;
