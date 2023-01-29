import React from 'react'
// components
import Navbar from './components/Navbar'
import { INCREASE, DECREASE } from './actions'
import reducer from './reducer'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff
import { createStore } from 'redux'
const initialState = {
  count: 78,
  name: 'Gaurav'
}


const store = createStore(reducer, initialState)
store.dispatch({ type: INCREASE })
store.dispatch({ type: DECREASE })
function App () {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
