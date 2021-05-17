import { BUY_CAKE } from "./CakeActionType"

const initialState = {
 numOfCakes:10
}

const CakeReducer = (state = initialState, action) => {
 switch (action.type) {
  case BUY_CAKE:
   return {
    ...state,
    numOfCakes: state.numOfCakes !== 0 ? state.numOfCakes-1:state.numOfCakes
   }   
  default:
return state
 }
}

export default CakeReducer     