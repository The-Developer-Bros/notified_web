import './App.css';
import ButtonAppBar from "./components/ButtonAppBar";
import SocialMediaSideBar from './components/SocialMediaSideBar';
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <SocialMediaSideBar />
        <ButtonAppBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/Products">
            <Products />
          </Route>

          <Route exact path="/blogs">
            <Blogs />
          </Route>

          <Route exact path="/events">
            <Events />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/signin">
            <Signin />
          </Route>

          <Route exact path="/signout">
            <Signout />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
