import { ADD_PRODUCT_TO_FAVOURITES } from "./types";

export const addToFavourites = () => {
  return (dispatch) => {
    console.log("ADDING OT FAVOURITES");
    dispatch({
      type: ADD_PRODUCT_TO_FAVOURITES,
    });
  };
};
