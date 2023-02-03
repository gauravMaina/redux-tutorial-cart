import React from 'react'
// components
import Navbar from './components/Navbar'
import reducer from './reducer'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const initialState = {
  cart: cartItems,
  total: 101,
  amount: 801
}

const store = createStore(reducer, initialState)

function App () {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
