import { CURRENCY_TO_SET } from '@/store/currency/action-types'

export default function actionCurrencyToSet (currency) {
  return dispatch => {
    dispatch({
      currency,
      type: CURRENCY_TO_SET,
    })
  }
}
