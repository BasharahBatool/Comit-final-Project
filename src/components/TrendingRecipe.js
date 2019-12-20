import React from "react";
import Images from "./Images";
import Vegsamosa from "./pics/appetizers/VeggSamosa.jpg";
import Breadrolls from "../components/pics/appetizers/Breadrolls.jpg";
import Stuffedchickenbread from "../components/pics/Breakfast/stuffedchickenbread.jpg";
import Pancake from "../components/pics/Breakfast/Pancake.jpg";
import Masalaomlete from "../components/pics/Breakfast/Masala-omelette.jpg";
import "../App.css";

function TrendingRecipe() {
  return (
    <div>
      <h2
        className="page-heading"
        // style={{ marginLeft: "80px", marginTop: "20px" }}
      >
        Trending Recipes
      </h2>
      <div className="related-img">
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

export default TrendingRecipe;
