import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import Reducer from "./RootReducer";
import logger from 'redux-logger'

const Store = createStore(Reducer, applyMiddleware(logger, thunk))

export default Store