import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ImagesR({ imgadd, Title, pageUrl, descrp }) {
  return (
    <div className="recipe-link">
      <Link to={pageUrl} style={{ textDecoration: "none" }}>
        <img src={imgadd} alt="" />
        <h3>{Title}</h3>
        <p>{descrp}</p>
      </Link>
    </div>
  );
}

export default ImagesR;
