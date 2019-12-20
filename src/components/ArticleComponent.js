import React from "react";
import Logo from "./pics/Logo.png";
import "../App.css";
import { useHistory } from "react-router-dom";

function ArticleComponent(props) {
  let History = useHistory();

  function handleClick(event) {
    History.push(props.url);
  }
  return (
    <div>
      <div className="article-entry">
        <div className="article-heading">
          <img src={Logo} alt="Logo" />
          <h2>Kitchen Queen</h2>
        </div>
        <div>
          <h3 className="article-h">{props.heading}</h3>
          <em>
            Posted on <span title={props.title}>{props.date}</span>
          </em>
          <br />
          <br />
          <span>{props.description}</span>
        </div>
        <button className="button" onClick={handleClick}>
          Read More
        </button>
      </div>
      <hr />
    </div>
  );
}

export default ArticleComponent;
