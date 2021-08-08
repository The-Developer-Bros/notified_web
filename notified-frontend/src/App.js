import './App.css';
import Navbar from "./components/Navbar";
import SocialMediaSideBar from './components/SocialMediaSideBar';
import Home from "./pages/Home";
import About from "./pages/About";
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
        <Navbar />
        <SocialMediaSideBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
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
