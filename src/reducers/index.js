import { combineReducers } from "redux";
import favouritesReduces from "./favouritesReduces";
export default combineReducers({
  favouritesState: favouritesReduces,
});
