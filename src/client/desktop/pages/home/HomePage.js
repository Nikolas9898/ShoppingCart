import React, { useState } from "react";
import { connect } from "react-redux";
import { addToFavourites } from "../../../../actions/addToFavouritesAction";

const HomePage = (props) => {
  // const [favourites, setFavrourites] = useState(0);
  //
  // const addToFavourites = () => {
  //   setFavrourites(favourites + 1);
  // };
  console.log(props);
  return (
    <div className="container">
      <div className="productCard">
        <img
          className="productImage"
          src={
            "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2"
          }
          alt="No image"
        />
        <h3>Title of the product</h3>
        <h3>Price : 15 lv </h3>
        <a
          onClick={props.addToFavourites}
          href="#"
          className="addToFavourites cart1"
        >
          Add to favourites
        </a>
      </div>
      <div className="productCard">
        <img
          className="productImage"
          src={
            "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2"
          }
          alt="No image"
        />
        <h3>Title of the product</h3>
        <h3>Price : 15 lv </h3>
        <a
          onClick={props.addToFavourites}
          href="#"
          className="addToFavourites cart1"
        >
          Add to favourites
        </a>
      </div>
      <div className="productCard">
        <img
          className="productImage"
          src={
            "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2"
          }
          alt="No image"
        />
        <h3>Title of the product</h3>
        <h3>Price : 15 lv </h3>
        <a
          onClick={props.addToFavourites}
          href="#"
          className="addToFavourites cart1"
        >
          Add to favourites
        </a>
      </div>
      <div className="productCard">
        <img
          className="productImage"
          src={
            "https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2"
          }
          alt="No image"
        />
        <h3>Title of the product</h3>
        <h3>Price : 15 lv </h3>
        <a
          onClick={props.addToFavourites}
          href="#"
          className="addToFavourites cart1"
        >
          Add to favourites
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addToFavourites })(HomePage);
