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
      return {
        ...state,
        moneyFrom: action.moneyFrom,
      }
    }

    case actionTypes.MONEY_TO_UPDATE: {
      const rateFrom = state.rate[state.currencyFrom]
      const rateTo   = state.rate[state.currencyTo]
      const moneyTo  = countMoneyTo(state.moneyFrom, rateFrom, rateTo)

      return {
        ...state,
        moneyTo,
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
