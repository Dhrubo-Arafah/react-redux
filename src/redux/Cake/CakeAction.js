import { BUY_CAKE } from "./CakeActionType"

export const buyCakes = (number=1) => {
 return {
  type: BUY_CAKE,
  payload:number
 }
}