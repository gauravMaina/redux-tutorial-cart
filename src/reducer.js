import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions'
function reducer (state, action) {
  console.log({ state, action })
  console.log('hi this is me')
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] }
    case INCREASE:
      return {
        ...state,
        cart: state.cart.map(cartItem => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          return cartItem
        })
      }
    case DECREASE:
      let temCart = []
      if (action.payload.amount === 1) {
        temCart = state.cart.filter(item => item.id !== action.payload.id)
      } else {
        temCart = state.cart.map(cartItem => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
          return cartItem
        })
      }
      return {
        ...state,
        cart: temCart
      }
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }

    default:
      return state
  }
}

export default reducer
