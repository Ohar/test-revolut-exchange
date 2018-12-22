import * as actionTypes from '@/store/action-types'
import DEFAULT_STATE from '@/store/default_state'
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
      const maxMoneyFrom = state.account[state.currencyFrom]
      const moneyFrom = Math.min(action.moneyFrom, maxMoneyFrom)

      return {
        ...state,
        moneyFrom,
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
          ...action.rate,
        },
      }
    }

    case actionTypes.EXCHANGE_EXECUTE: {
      return {
        ...state,
        moneyFrom: DEFAULT_STATE.moneyFrom,
        moneyTo: DEFAULT_STATE.moneyTo,
        account: {
          ...state.account,
          [state.currencyFrom]: state.account[state.currencyFrom] - state.moneyFrom,
          [state.currencyTo]: state.account[state.currencyTo] + state.moneyTo,
        },
      }
    }

    default:
      return state
  }
}
