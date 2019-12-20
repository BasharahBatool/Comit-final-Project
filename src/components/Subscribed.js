import React from "react";
import "../App.css";

function Subscribed(props) {
  return (
    <div className="popup">
      <div className="popup\_inner">
        <button className="cross-button" onClick={props.closePopup}>
          <img src={props.image} style={{padding:"0px"}} />
        </button>
      </div>
      <h2 className="popup-message">
        You have been successfully subscribed for our newsletter
      </h2>
    </div>
  );
}

export default Subscribed;
