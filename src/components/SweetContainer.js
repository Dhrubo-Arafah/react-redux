import React from 'react'
import { connect } from 'react-redux'
import {buySweet} from '../redux/Sweet/SweetAction'

const SweetContainer = (props) => {
 return (
  <div>
   <h3>Num Of Sweets</h3>
   <h1>{props.numOfSweets}</h1>
   <button onClick={props.buySweet}>Buy Sweet</button>
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
  buySweet:()=>dispatch(buySweet())
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(SweetContainer)
