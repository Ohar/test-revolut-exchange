import * as actionTypes from '@/store/currency/action-types'
import DEFAULT_STATE from '@/store/currency/default_state'
import countMoneyTo from '@/utils/countMoneyTo'

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
      const rateFrom = state.rate[state.currencyFrom]
      const rateTo   = state.rate[state.currencyTo]
      const moneyTo  = countMoneyTo(action.moneyFrom, rateFrom, rateTo)

      return {
        ...state,
        moneyTo,
        moneyFrom: action.moneyFrom,
      }
    }

    case actionTypes.MONEY_TO_SET: {
      return {
        ...state,
        moneyTo: action.moneyTo,
      }
    }

    case actionTypes.RATE_SET: {
      return {
        ...state,
        rate: {
          ...state.rate,
          rate: action.rate,
        },
      }
    }

    default:
      return state
  }
}
