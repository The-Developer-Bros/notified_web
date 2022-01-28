import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import ButtonAppBar from "./components/ButtonAppBar";
import SocialMediaSideBar from './components/SocialMediaSideBar';
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ProductsAdd from './pages/products/ProductsAdd';
import ProductsList from './pages/products/ProductsList';
import ProductsSearch from './pages/products/ProductsSearch';
import ProductSubscription from './pages/products/ProductSubscription';
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>

        <SocialMediaSideBar />
        <ButtonAppBar />

        {/* Header */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={<Signout />} />


          <Route path="/products" element={<Products />} >
            <Route path="search" element={<ProductsSearch />} />
            <Route path="list" element={<ProductsList />} />
            <Route path="add" element={<ProductsAdd />} />
            <Route path=":id" element={<ProductSubscription />} />
          </Route>

        </Routes>
        {/* <Footer /> */}

      </Router>
    </div>
  );
}

export default App;
