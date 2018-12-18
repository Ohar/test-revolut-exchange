import { CURRENCY_FROM_SET, MONEY_TO_UPDATE } from '@/store/action-types'

export default function actionCurrencyFromSet (currency) {
  return dispatch => {
    dispatch({
      currency,
      type: CURRENCY_FROM_SET,
    })

    dispatch({type: MONEY_TO_UPDATE})
  }
}
