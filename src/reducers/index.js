import { combineReducers } from "redux";
import favouritesReducers from "./favouritesReducer";

export default combineReducers({
  favouritesState: favouritesReducers,
});
