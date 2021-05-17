import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCakes } from '../redux/Cake/CakeAction'

const HooksCakeContainer = () => {
 const numOfCakes = useSelector(state => state.cake.numOfCakes)
 const dispatch = useDispatch()
 return (
  <div>
   <h3>Num Of Cakes</h3>
   <h1>{ numOfCakes}</h1>
   <button onClick={()=>dispatch(buyCakes())}>Buy Cake</button>
  </div>
 )
}

export default HooksCakeContainer
