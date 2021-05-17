import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCakes } from '../redux/Cake/CakeAction'
const CakePayload = props => {
 const [number, setNumber]=useState(1)
 return (
  <div>
   <h3>Num Of Cakes</h3>
   <h1>{props.numOfCakes}</h1>
   <input type="number"
    value={number}
    onChange={e => setNumber(e.target.value)}
   />
   <button onClick={()=>props.buyCakes(number)}>Buy {number} Cake</button>
  </div>
 )
}

const mapStateToProps = state => {
 return {
  numOfCakes: state.cake.numOfCakes
 }
}

const dispatchToProps = dispatch => {
 return {
  buyCakes: number => dispatch(buyCakes(number))
 }
}

export default connect(mapStateToProps, dispatchToProps)(CakePayload)
