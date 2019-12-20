import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImagesR from "../components/ImagesR";
import { Link } from "react-router-dom";
import "../App.css";
import Frenchtoast from "../components/pics/Breakfast/frenchtoast.jpg";
import MasalaOmelette from "../components/pics/Breakfast/Masala-omelette.jpg";
import OmeletteCurry from "../components/pics/Breakfast/OmeletCurry.jpg";
import Omlteparatha from "../components/pics/Breakfast/OmeletteStuffedParatha.jpg";
import Pancake from "../components/pics/Breakfast/Pancake.jpg";
import Poori from "../components/pics/Breakfast/Poori.jpg";
import Stuffedchickenbread from "../components/pics/Breakfast/stuffedchickenbread.jpg";
import StuffedParatha from "../components/pics/Breakfast/StuffedParatha.jpg";

function BreakfastandBrunch(props) {
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "60px", width: "80px" }}>
            Home >
          </Link>
          <Link to="/BreakfastandBrunch" style={{ width: "200px" }}>
            Breakfast & Brunch >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>
      <h1 className="page-heading">{props.username}</h1>
      <h1 className="page-heading">Breakfast and Brunch</h1>
      <div className="recipe-main">
        <div>
          <ImagesR
            imgadd={Frenchtoast}
            Title="French Toast"
            pageUrl="/FrenchToast"
            descrp="French toast is a dish made of sliced bread soaked in eggs and milk, then fried."
          />
        </div>
        <div>
          <ImagesR
            imgadd={MasalaOmelette}
            Title="Masala Omellete"
            pageUrl="/masalaomellete"
            descrp="It is a breakfast staple in every Pakistani home. It's made with eggs, onions, green chillies, crushed red chilli and is a great way to spice up brunch!"
          />
        </div>
        <div>
          <ImagesR
            imgadd={OmeletteCurry}
            Title="Omelette Curry"
            pageUrl="/omelettecurry"
            descrp="Anda Aamlet Tarkari/ Omelette Curry is a unique and spicy curry with fluffy pieces of omelette in a robust masala gravy. "
          />
        </div>
        <div>
          <ImagesR
            imgadd={Omlteparatha}
            Title="Egg Stuffed Paratha"
            pageUrl="/eggstuffedparatha"
            descrp="Stuffed Egg parathas are so versatile recipe, because you can pretty much stuff anything inside a paratha. It simply taste good."
          />
        </div>
        <div>
          <ImagesR
            imgadd={Pancake}
            Title="Pan Cake"
            pageUrl="/Pancake"
            descrp="Flat cake, prepared from a all purpose flour batter that may contain eggs, milk and butter and fried on a griddle or frying pan with butter."
          />
        </div>
        <div>
          <ImagesR
            imgadd={Poori}
            Title="Poori Tarkari"
            pageUrl="/pooritarkari"
            descrp=" It's the savoury element to the ultimate Pakistani breakfast. Poori, is a deep fried flatbread served with chickpea curry."
          />
        </div>
        <div>
          <ImagesR
            imgadd={Stuffedchickenbread}
            Title="Stuffed Chicken Bread"
            pageUrl="/stufedchickenbread"
            descrp="A delicious braided bread stuffed with a creamy and spicy chicken filling."
          />
        </div>
        <div>
          <ImagesR
            imgadd={StuffedParatha}
            Title="Potato Stuffed Paratha"
            pageUrl="/stuffedparatha"
            descrp="Aloo paratha/Potato Stuffed Paratha is a classic Pakistani breakfast. It is a whole wheat flatbread which is stuffed with spicy mashed potatoes."
          />
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default BreakfastandBrunch;
