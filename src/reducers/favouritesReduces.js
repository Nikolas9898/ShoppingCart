import {
  ADD_PRODUCT_TO_FAVOURITES,
  GET_FAVOURITES_NUMBER,
} from "../actions/types";

const initialState = {
  favouritesNumbers: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVOURITES:
      return {
        favouritesNumbers: state.favouritesNumbers + 1,
      };
    case GET_FAVOURITES_NUMBER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
