import React from "react";

function Nav(props) {
  return <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">

    <div className="container">
      <div className="navbar-toggler" type="a" data-toggle="collapse" data-target="#navbarsExample09"
        aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </div>


      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#section-portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Nav;