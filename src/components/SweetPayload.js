import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buySweet } from '../redux/Sweet/SweetAction'

const SweetPayload = props => {
 const[number, setNumber]=useState(1)
 return (
  <div>
   <h3>Num Of Sweets</h3>
   <h1>{props.numOfSweets}</h1>
   <input type="number"
    value={number}
    onChange={ e=>setNumber(e.target.value)}/>
   <button onClick={()=>props.buySweet(number)}>Buy {number} Sweet</button>
  </div>
 )
}

const mapStateToProps = state => {
 return {
  numOfSweets: state.sweet.numOfSweets
 }
}

const mapDispatchToProps = dispatch => {
 return {
  buySweet: number => dispatch(buySweet(number))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(SweetPayload)
