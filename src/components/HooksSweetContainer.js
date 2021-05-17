import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySweet } from '../redux/Sweet/SweetAction'

const HooksSweetContainer = () => {
 const numOfSweets = useSelector(state => state.sweet.numOfSweets)
 const dispatch = useDispatch()
 return (
  <div>
   <h3>Num Of Sweets</h3>
   <h1>{numOfSweets}</h1>
   <button onClick={()=>dispatch(buySweet())}>Buy Sweet</button>
  </div>
 )
}

export default HooksSweetContainer
