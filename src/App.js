import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import SweetContainer from './components/SweetContainer'
import Store from './redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
    <div className="App">
        <CakeContainer />
        <SweetContainer/>
      </div>
    </Provider>
  )
}

export default App
