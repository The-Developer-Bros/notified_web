import './App.css';
import Navbar from "./components/Navbar.js";
import SocialMediaSideBar from './components/SocialMediaSideBar';

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

          <Route path="/about">
            <About />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>

          <Route path="/events">
            <Events />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/signin">
            <Signin />
          </Route>

          <Route path="/signout">
            <Signout />
          </Route>

        </Switch>


      </Router>
    </div>
  );
}

export default App;
