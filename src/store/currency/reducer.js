import * as actionTypes from '@/store/currency/action-types'
import DEFAULT_STATE from '@/store/currency/default_state'

export default function dataReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.CURRENCY_FROM_SET: {
      return {
        ...state,
        currencyFrom: action.currency,
      }
    }

    case actionTypes.CURRENCY_TO_SET: {
      return {
        ...state,
        currencyTo: action.currency,
      }
    }

    case actionTypes.CURRENCY_SWITCH: {
      return {
        ...state,
        currencyFrom: state.currencyTo,
        currencyTo  : state.currencyFrom,
      }
    }

    case actionTypes.MONEY_FROM_SET: {
      return {
        ...state,
        moneyFrom: action.moneyFrom,
      }
    }

    case actionTypes.MONEY_TO_SET: {
      return {
        ...state,
        moneyTo: action.moneyTo,
      }
    }

    default:
      return state
  }
}
