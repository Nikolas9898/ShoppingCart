import React from "react";
import { connect } from "react-redux";
import { addToFavourites } from "../../../../actions/addToFavouritesAction";

let products = [
  {
    title: "First product",
    image:
      "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2",
    price: 25,
  },
  {
    title: "Second product",
    image:
      "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2",
    price: 496,
  },
  {
    title: "Third product",
    image:
      "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2",
    price: 35,
  },
  {
    title: "Fourth product",
    image:
      "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2",
    price: 89,
  },
];

const HomePage = (props) => {
  return (
    <div className="container">
      {console.log(props.favouritesProducts.favouriteProducts)}

      {products.map((product) => (
        <div className="productCard">
          {props.favouritesProducts.favouriteProducts.map(
            (favouriteProduct) => (
              console.log("favorit", favouriteProduct), console.log(product)
            )
          )}

          <img className="productImage" src={product.image} alt="No image" />
          <h3>{product.title}</h3>
          <h3>{product.price} lv. </h3>
          <a
            onClick={() => props.addToFavourites(product)}
            href="#"
            className="addToFavourites cart1"
          >
            Add to favourites
          </a>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  favouritesProducts: state.favouritesState,
});
export default connect(mapStateToProps, { addToFavourites })(HomePage);
