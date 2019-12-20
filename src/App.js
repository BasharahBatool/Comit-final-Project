import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Appetizerandsnacks from "./pages/Appetizerandsnacks";
import RecipePage from "./pages/Recipepage";
import Recipeprint from "./pages/Recipeprint";
import Register from "./pages/Register";
import RegistrationSuccessful from "./pages/RegistrationSuccessful";
import Favorites from "./pages/Favorites";
import Articles from "./pages/Articles";
import FullArticle from "./pages/FullArticle";
import BreakfastandBrunch from "./pages/BreakfastandBrunch";
import ChickenNuggets from "./pages/ChickenNuggets";
import Veggiesamosa from "./pages/Veggiesamosa";
import Samosaprint from "./pages/Samosaprint";
import About from "./pages/About";

function App() {
  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [fav, setFav] = React.useState([]);
  // let recipe = [
  //   {
  //     id: 'ChickenNuggets',
  //     name: 'Chicken Nuggets',
  //     image : Nuggets,
  //     ingred: ["Chicken Mince",  ]
  //     related: [
  //       {
  //         title
  //       }
  //     ]

  // }]
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <Home
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/Login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/Register">
          <Register username={username} />
        </Route>
        <Route exact path="/FUllArticle">
          <FullArticle username={username} />
        </Route>

        <Route exact path="/Appetizerandsnacks">
          <Appetizerandsnacks
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/BreakfastandBrunch">
          <BreakfastandBrunch
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/Recipeprint">
          <Recipeprint
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/Samosaprint">
          <Samosaprint
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>
        <Route exact path="/RecipePage">
          <RecipePage
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            fav={fav}
            setFav={setFav}
          />
        </Route>
        <Route exact path="/ChickenNuggets">
          <ChickenNuggets
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            fav={fav}
            setFav={setFav}
          />
        </Route>
        <Route exact path="/Veggiesamosa">
          <Veggiesamosa
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            fav={fav}
            setFav={setFav}
          />
        </Route>
        <Route exact path="/Favorites">
          <Favorites username={username} fav={fav} setFav={setFav} />
        </Route>
        <Route exact path="/About">
          <About username={username} fav={fav} setFav={setFav} />
        </Route>

        <Route exact path="/Register" />
        <Route exact path="/RegistrationSuccessful">
          <RegistrationSuccessful
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route>

        <Route exact path="/Articles">
          <Articles username={username} />
        </Route>
        <Route exact path="/FullArticle" />
      </div>
    </BrowserRouter>
  );
}

export default App;
