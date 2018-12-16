import * as actionTypes from '@/store/account/action-types'
import DEFAULT_STATE from '@/store/account/default_state'

export default function accountReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.MONEY_SET: {
      return {
        ...state,
        [action.currency]: action.quantity,
      }
    }

    default:
      return state
  }
}
