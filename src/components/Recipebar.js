import React from "react";
import Printer from "../components/pics/printer.png";
import Fav from "../components/pics/heart1.png";
import Share from "../components/pics/share.png";
import Popup from "../components/Popup";
import Like from "../components/pics/like.png";
import Cross from "../components/pics/redcross.jpg";
import { useHistory } from "react-router-dom";

function Reacipebar(props) {
  let [showpopup, setShowpopup] = React.useState(false);
  let History = useHistory();

  function togglepopup() {
    setShowpopup(!showpopup);
  }

  function addToFav() {
    let newfav = props.fav.slice(0);
    newfav.push({ Title: props.Title, image: props.image, furl: props.furl });
    props.setFav(newfav);
  }

  function incrementlikes() {
    props.setLikes(props.likes + 1);
    console.log(props.furl);
  }

  function openprint() {
    History.push(props.url);
  }
  return (
    <div className="heading">
      <div>
        <h1>{props.Title}</h1>
      </div>
      <div className="heading2">
        <input
          type="image"
          src={Fav}
          alt="Submit"
          title="Add to Favorites"
          style={{ width: "60px" }}
          onClick={addToFav}
        />
        <button onClick={togglepopup}>
          <img className="share-icon" alt="" src={Share} title="Share recipe" />
        </button>
        {showpopup ? <Popup image={Cross} closePopup={togglepopup} /> : null}
        <button onClick={openprint}>
          <img
            className="share-icon"
            alt=""
            src={Printer}
            title="Print the recipe"
          />
        </button>
        {/* <Link to={abc}>
          <input
            type="image"
            src={Printer}
            alt="Submit"
            title="Print the recipe"
          /> */}
        {/* </Link> */}
        <div style={{ marginTop: "30px" }}>
          <input
            type="image"
            src={Like}
            alt="Like"
            title="Like the recipe"
            onClick={incrementlikes}
          />
          <p className="likes">{props.likes} Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Reacipebar;
