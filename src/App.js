import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksSweetContainer from './components/HooksSweetContainer'
import SweetContainer from './components/SweetContainer'
import Store from './redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <p>Just React Redux Exapmle</p>
        <CakeContainer />
        <SweetContainer />
        <p>React Redux with hooks example</p>
        <HooksCakeContainer />
        <HooksSweetContainer/>
      </div>
    </Provider>
  )
}

export default App
