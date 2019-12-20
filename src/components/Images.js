import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Images({ imgadd, Title, bradius, pageUrl, onClick }) {
  return (
    <div>
      <Link to={pageUrl} style={{ textDecoration: "none" }}>
        <img
          src={imgadd}
          className="main-image"
          style={{ borderRadius: bradius }}
          alt=""
        />
        <h3 className="image-descrip">{Title}</h3>
      </Link>
    </div>
  );
}

export default Images;
