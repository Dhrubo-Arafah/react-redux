import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import SweetReducer from "./Sweet/SweetReducer";
import userReducer from './user/UserReducer'

const RootReducer = combineReducers({
 cake: CakeReducer,
 sweet: SweetReducer,
 user:userReducer
})

export default RootReducer