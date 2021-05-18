import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import CakePayload from './components/CakePayload'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksSweetContainer from './components/HooksSweetContainer'
import ItemContainer from './components/ItemContainer'
import SweetContainer from './components/SweetContainer'
import SweetPayload from './components/SweetPayload'
import UserContainer from './components/UserContainer'
import Store from './redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <UserContainer/>
        {/* <p>Just React Redux Exapmle</p>
        <CakeContainer />
        <SweetContainer />
        <p>React Redux with hooks example</p>
        <HooksCakeContainer />
        <HooksSweetContainer />
        <p>Advance Uses of maps</p>
        <ItemContainer cake />
        <p>Example of Payload</p>
        <CakePayload />
        <SweetPayload/> */}
      </div>
    </Provider>
  )
}

export default App
