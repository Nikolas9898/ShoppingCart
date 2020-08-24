import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getFavouritesNumbers } from "../../../../actions/getFavouritesAction";

const Header = (props) => {
  useEffect(() => {
    getFavouritesNumbers();
  }, []);
  let favouritesNumbers = props.favoritesProps.favouritesNumbers;

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
              Favorites
              <span>
                <FontAwesomeIcon icon={faHeart} />
                {favouritesNumbers}
              </span>
            </a>
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
