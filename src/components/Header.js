import React from "react";
import Logo from "./pics/logo2.png";
import Searchicon from "./pics/searchicon.jpg";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
//import Cake from "./Cake";

function Header(props) {
  let [recipepage, setrecipepage] = React.useState("");
  let History = useHistory();

  function handleinputChange(event) {
    setrecipepage(event.currentTarget.value);
  }

  function handlePageChange(event) {
    event.preventDefault();
    switch (recipepage) {
      case "Chicken Nuggets":
        History.push("/ChickenNuggets");
        break;
      case "Bread Rolls":
        History.push("/breadRolls");
        break;
      case "Beef Samosa":
        History.push("/beefSamosa");
        break;
      case "Chana Chat":
        History.push("/ChanaChat");
        break;
      default:
        History.push("/");
    }
  }

  function handledropdown(event) {
    event.preventDefault();
    switch (event.currentTarget.value) {
      case "Chicken Nuggets":
        History.push("/ChickenNuggets");
        break;
      case "Bread Rolls":
        History.push("/breadRolls");
        break;
      case "Beef Samosa":
        History.push("/beefSamosa");
        break;
      case "Chana Chat":
        History.push("/ChanaChat");
        break;
      case "Veggie Samosa":
        History.push("/Veggiesamosa");
        break;
      default:
        History.push("/");
    }
  }

  return (
    <div className="header">
      <div className="heading-child1">
        <img src={Logo} alt={"Site Logo"} className="logo" />
        <div>
          <select className="dropdown" value="" onChange={handledropdown}>
            <option value="" defaultValue disabled>
              Browse
            </option>
            <optgroup label="Appetizers & Snacks">
              <option value="Beef Samosa">Beef Samosa</option>
              <option value="Bread Rolls">Bread Rolls</option>
              <option value="Chana Chat">Chana Chat</option>
              <option value="Chicken Nuggets">Chicken Nuggets</option>
              <option value="Chicken Patties">Chicken Patties</option>
              <option value="Chicken Wings">Chicken Wings</option>
              <option value="Pakora">Pakora</option>
              <option value="Veggie Samosa">Veggie Samosa</option>
            </optgroup>
            <optgroup label="Breakfast & Brunch">
              <option value="French Toast">French Toast</option>
              <option value="Masala Omelette">Masala Omelette</option>
              <option value="Omelette Curry">Omelette Curry</option>
              <option value="Omelette Stuffed Paratha">
                Omelette Stuffed Paratha
              </option>
              <option value="Pan Cake">Pan Cake</option>
              <option value="Poori">Poori</option>
              <option value="Stuffed Paratha">Potato Stuffed Paratha</option>
            </optgroup>
            <optgroup label="Dessert ">
              <option value="Gulab Jaman">Gulab Jaman</option>
              <option value="Fruit Trifle">Trifle</option>
            </optgroup>
            <optgroup label="Burger & Sandwiches ">
              <option value="Street Style spicy Burger">
                Street Style spicy Burger
              </option>
              <option value="Club Sandwich">Club Sandwich</option>
            </optgroup>
            <optgroup label="Chicken">
              <option value="Butter Chicken">Butter Chicken</option>
              <option value="Chicken Korma">Chicken Korma</option>
            </optgroup>
            <optgroup label="Kababs & Cutlets ">
              <option value="Beef Shami Kabab">Beef Shami Kabab</option>
              <option value="Gola Kabab">Gola Kabab</option>
            </optgroup>
            <optgroup label="Curries ">
              <option value="Nihari">Nihari</option>
              <option value="Kofta Curry">Kofta Curry</option>
            </optgroup>
            <optgroup label="Veggies, Beans & Lentils ">
              <option value="Dhaba Daal">Dhaba Daal</option>
              <option value="Curry ">Curry</option>
            </optgroup>
            <optgroup label="Pasta, Pizza & Pies ">
              <option value="Chicken ">Chicken</option>
              <option value="Curry ">Curry</option>
            </optgroup>
            <optgroup label="Pickel, Chutney & Dips ">
              <option value="Chicken ">Chicken</option>
              <option value="Curry ">Curry</option>
            </optgroup>
            <optgroup label="Soup ">
              <option value="Chicken ">Chicken</option>
              <option value="Curry ">Curry</option>
            </optgroup>
            <optgroup label="Seafood ">
              <option value="Chicken ">Chicken</option>
              <option value="Curry ">Curry</option>
            </optgroup>
            <optgroup label="Rice Meals ">
              <option value="Chicken ">Chicken</option>
              <option value="Curry ">Curry</option>
            </optgroup>
          </select>
        </div>

        <form className="search-container" onSubmit={handlePageChange}>
          <input
            placeholder="Find a Recipe"
            value={recipepage}
            type="text"
            className="search-input "
            onChange={handleinputChange}
          />

          <img
            className="search-img"
            src={Searchicon}
            onClick={handlePageChange}
            alt=""
          />
        </form>
      </div>
      <div className="heading-child2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
        </svg>
        <Link to="/Favorites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
          </svg>
        </Link>
        <p>{props.username}</p>
        <Link to="/Login" className="Link">
          Login
        </Link>
        |
        <Link to="/Register" className="Link">
          Register
        </Link>
        |
        <Link to="/Articles" className="Link">
          Articles
        </Link>
      </div>
    </div>
  );
}

export default Header;
