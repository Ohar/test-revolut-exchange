import * as actionTypes from '@/store/rate/action-types'
import DEFAULT_STATE from '@/store/rate/default_state'

export default function rateReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.RATE_SET: {
      return {
        ...state,
        [action.currency]: action.rate,
      }
    }

    default:
      return state
  }
}
