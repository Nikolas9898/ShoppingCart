import React from "react";

const Header = (props) => {
  return (
    <header>
      <div className="overlay" />
      <nav>
        <h2>Shop</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="cart">
            <a href="#">
              Cart<span>0</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
