import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showBg, setShowBg] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 20) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  return (
    <div className={`navbar ${showBg && "navbar__hasScrolled"}`}>
      <div className="navbar__logo">
        <img
          src="https://scontent-bom1-1.cdninstagram.com/v/t51.2885-19/s150x150/120302686_635672390672734_802612746922788777_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_ohc=XhjzNZ_8R6EAX-xOVkg&oh=32e346dca93379a1686ed2fdb9e9d2d4&oe=5F9DC8BD"
          alt="logo"
        />
      </div>
      <ul className="navbar__linksContainer">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  );
}

export default Navbar;
