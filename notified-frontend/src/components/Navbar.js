import React from 'react';
import "./Navbar.css"
import notes from "../resources/images/notes.jpg"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/#">
                        <img src={notes} height="80px" id="navbar-logo"/>
                    </a>

                    <a className="navbar-brand" href="/#">
                        <h2>Notified</h2>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">

                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about"> <h4>About Us</h4></a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/blogs"> <h4>Blogs</h4></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/events"> <h4>Events</h4></a>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link" href="/#"><h4>Blogs</h4></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href="/#" tabIndex="-1" aria-disabled="true">
                                    <h4>Events</h4>
                                </a>
                            </li> */}

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tutorials
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="/#"><h5>Action1</h5></a></li>
                                    <li><a className="dropdown-item" href="/#"><h5>Action2</h5></a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#"><h5>Action3</h5></a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
