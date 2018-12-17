import * as actionTypes from '@/store/currency/action-types'
import DEFAULT_STATE from '@/store/currency/default_state'

export default function dataReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.CURRENCY_FROM_SET: {
      return {
        ...state,
        from: action.currency,
      }
    }

    case actionTypes.CURRENCY_TO_SET: {
      return {
        ...state,
        to: action.currency,
      }
    }

    case actionTypes.CURRENCY_SWITCH: {
      return {
        ...state,
        from: state.to,
        to  : state.from,
      }
    }

    default:
      return state
  }
}
