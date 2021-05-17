import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import SweetReducer from "./Sweet/SweetReducer";

const RootReducer = combineReducers({
 cake: CakeReducer,
 sweet:SweetReducer
})

export default RootReducer