import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Images from "../components/Images";
import TrendingRecipe from "../components/TrendingRecipe";
import { Link } from "react-router-dom";

function Favorites(props) {
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "80px", width: "80px" }}>
            Home >
          </Link>

          <Link to="/Favorites" style={{ width: "100px" }}>
            Favorites >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>
      <div className="heading">
        <h1 className="page-heading">My Favorite Recipes</h1>
      </div>
      <div className="favpage-divider">
        <div>
          {props.fav.map(function(item) {
            return (
              <div>
                <Images
                  imgadd={[item.image]}
                  Title={item.Title}
                  pageUrl={item.furl}
                />
              </div>
            );
          })}
        </div>
        <div className="trending-part">
          <TrendingRecipe />
        </div>
      </div>

      <hr />
      <Footer />
    </div>
  );
}

export default Favorites;
