import { GET_FAVOURITES_NUMBER } from "./types";

export const getFavouritesNumbers = () => {
  return (dispatch) => {
    console.log("Getting All basket numbers");
    dispatch({
      type: GET_FAVOURITES_NUMBER,
    });
  };
};
