import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleComponent from "../components/ArticleComponent";
import TrendingRecipe from "../components/TrendingRecipe";
import { Link } from "react-router-dom";
import "../App.css";

function Articles(props) {
  return (
    <div>
      <Header />
      <div className="subheader-link">
        <div>
          <Link to="/" style={{ marginLeft: "80px", width: "80px" }}>
            Home >
          </Link>

          <Link to="/Articles" style={{ width: "90px" }}>
            Articles >
          </Link>
        </div>
        <div>
          <p className="user-name">{props.username}</p>
        </div>
      </div>
      <div className="heading">
        <h1 className="page-heading" style={{ marginLeft: "20px" }}>
          Articles
        </h1>
      </div>
      <div className="page-divider">
        <div className="Recipe-section">
          <ArticleComponent
            heading="How To Make Flour & Self-Rising Flour"
            title="2019-12-10 08:15:36"
            date="Dec 10, 2019"
            description="How to Turn All-Purpose Flour into Cake Flour Step 1: Measure out the all-purpose flour that you’ll need for your recipe. Step 2: For every…  "
            url="/FullArticle"
          />
          <ArticleComponent
            heading="How to Freeze Bread/Buns/Pastries"
            title="2019-11-06 04:10:40"
            date="Nov 06, 2019"
            description="I've been asked this question many times, so figured it would be
        good to have it on the discussion board. You can freeze most of…"
            url="/Article2"
          />
          <ArticleComponent
            heading="Cake Mistakes…Find Out Why"
            title="2019-10-20 02:20:19"
            date="Oct 20, 2019"
            description="Here's a list of very common 'Cake Mistakes' and their causes. Below I have added a list of tips to prevent these mistakes from recurring:…"
            url="/Article3"
          />
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

export default Articles;
