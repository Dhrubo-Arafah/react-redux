import React from 'react'
import { connect } from 'react-redux'
import {buyCakes} from '../redux/Cake/CakeAction'
const CakeContainer = props => {
 return (
  <div>
   <h3>Num Of Cakes</h3>
   <h1>{ props.numOfCakes}</h1>
   <button onClick={props.buyCakes}>Buy Cake</button>
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
  buyCakes:()=>dispatch(buyCakes())
 }
}

export default connect(mapStateToProps, dispatchToProps) (CakeContainer)
