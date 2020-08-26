import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getFavouritesNumbers } from "../../../../actions/getFavouritesAction";
import { Link } from "react-router-dom";

const Header = (props) => {
  useEffect(() => {
    getFavouritesNumbers();
  }, []);
  let favouritesNumbers = props.favoritesProps.favouritesNumbers;

  return (
    <header>
      <div className="overlay" />
      <nav>
        <h2>
          <Link to="/">Shop</Link>
        </h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="cart">
            <Link to="/favourites">
              Favorites
              <span>
                <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} />
                {favouritesNumbers}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  favoritesProps: state.favouritesState,
});

export default connect(mapStateToProps, { getFavouritesNumbers })(Header);
