import React from 'react'
import { connect } from 'react-redux'
import { buyCakes } from '../redux/Cake/CakeAction'
import { buySweet } from '../redux/Sweet/SweetAction'

const ItemContainer = (props) => {
 return (
  <div>
   <h3>Item-{ props.buyItem}</h3>
   <button onClick={props.item}>Buy</button>
  </div>
 )
}

const mapStateToProps = (state, ownProps) => {
  const ItemState = ownProps.cake ? state.cake.numOfCakes : state.sweet.numOfSweets
  return {
   buyItem:ItemState
  }
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
 const dispatchFunction = ownProps.cake ?
  ()=>dispatch(buyCakes()):
  () => dispatch(buySweet())
 return {
  item:dispatchFunction
 }
}

export default connect (mapStateToProps, mapDispatchToProps)(ItemContainer)
