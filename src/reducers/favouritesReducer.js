import {
  ADD_PRODUCT_TO_FAVOURITES,
  GET_FAVOURITES_NUMBER,
} from "../actions/types";

const initialState = {
  favouritesNumbers: 0,
  favouriteProducts: [],
};

let localStorageProducts = JSON.parse(localStorage.getItem("favourites"));

initialState.favouriteProducts = localStorageProducts
  ? localStorageProducts
  : [];
initialState.favouritesNumbers = localStorageProducts
  ? localStorageProducts.length
  : 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVOURITES:
      state.favouriteProducts.push(action.payload);
      state.favouritesNumbers = state.favouriteProducts.length;

      localStorage.setItem(
        "favourites",
        JSON.stringify(state.favouriteProducts)
      );
      return {
        ...state,
      };
    case GET_FAVOURITES_NUMBER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
