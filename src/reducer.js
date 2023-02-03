import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions'
function reducer(state, action) {
  console.log({ state, action })

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
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      }, { total: 0, amount: 0 });
      return { ...state, total, amount }
    default:
      return state
  }
}

export default reducer
