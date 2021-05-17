import { createStore, applyMiddleware } from "redux";
import Reducer from "./RootReducer";
import logger from 'redux-logger'

const Store = createStore(Reducer, applyMiddleware(logger))

export default Store