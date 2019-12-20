import React from "react";
import "../App.css";
import fblogo from "./pics/fblogo.png";
import twitterlogo from "./pics/twitterlogo.png";
import instalogo from "./pics/instalogo.jpg";
import envelop from "./pics/envelop.jpg";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup\_inner">
        <button className="cross-button" onClick={props.closePopup}>
          <img src={props.image} alt="" />
        </button>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="popup-link">
            <img src={fblogo} alt="Facebook Logo" />
            <span>Facebook</span>
          </div>
        </a>
        <a
          href="https://www.twitter.com/intent/tweet?text="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="popup-link">
            <img src={twitterlogo} alt="Twitter" />
            <span>Twitter</span>
          </div>
        </a>
        <a
          href="https:/www.instagram.com/accounts/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="popup-link">
            <img src={instalogo} alt="Insta" />
            <span>Instagram</span>
          </div>
        </a>
        <a
          href="mailto:your_mail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="popup-link">
            <img src={envelop} alt="email" />
            <span>Email</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Popup;
