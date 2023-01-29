
import { INCREASE, DECREASE } from './actions'
function reducer (state, action) {
    console.log({ state, action })
    console.log('hi this is me')
    if (action.type === DECREASE) {
      return { ...state, count: state.count - 1 }
    }
    if (action.type === INCREASE) {
      return { ...state, count: state.count + 1 }
    }
    return state
  }

  export default reducer