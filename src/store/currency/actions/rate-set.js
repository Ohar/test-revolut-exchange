import { MONEY_TO_UPDATE, RATE_SET } from '@/store/currency/action-types'

export default function actionRateSet (rate) {
  return dispatch => {
    dispatch({
      rate,
      type: RATE_SET,
    })

    dispatch({type: MONEY_TO_UPDATE})
  }
}
