import { BUY_SWEET } from "./SweetActionType"

const initialState = {
 numOfSweets:15
}
const SweetReducer = (state = initialState, action) => {
 switch (action.type) {
  case BUY_SWEET:
   return {
    ...state,
     numOfSweets: state.numOfSweets !== 0 ? state.numOfSweets - 1 : state.numOfSweets
     }
   default: return state
 }
}

export default SweetReducer