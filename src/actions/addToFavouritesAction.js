import { ADD_PRODUCT_TO_FAVOURITES } from "./types";

export const addToFavourites = (product) => {
  return (dispatch) => {
    console.log("ADDING OT FAVOURITES");
    // console.log("Product: ", product);
    dispatch({
      type: ADD_PRODUCT_TO_FAVOURITES,
      payload: product,
    });
  };
};
