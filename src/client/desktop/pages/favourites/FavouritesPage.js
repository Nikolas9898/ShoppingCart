import React from "react";
import { connect } from "react-redux";
const FavouritesPage = ({ favouritesProps }) => {
  if (favouritesProps.favouriteProducts) {
    return (
      <div className="container">
        {favouritesProps.favouriteProducts.map((product) => (
          <div className="productCard">
            <img className="productImage" src={product.image} alt="No image" />
            <h3>{product.title}</h3>
            <h3>{product.price} lv. </h3>
            {/*<a*/}
            {/*  onClick={() => props.addToFavourites(product)}*/}
            {/*  href="#"*/}
            {/*  className="addToFavourites cart1"*/}
            {/*>*/}
            {/*  Add to favourites*/}
            {/*</a>*/}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Nqma produckti</div>;
  }
};

const mapStateToProps = (state) => ({
  favouritesProps: state.favouritesState,
});

export default connect(mapStateToProps)(FavouritesPage);
