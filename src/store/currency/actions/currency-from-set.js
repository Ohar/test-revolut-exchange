import {CURRENCY_FROM_SET} from '@/store/currency/action-types'

export default function actionCurrencyFromSet (currency) {
  return dispatch => {
    dispatch({
      currency,
      type: CURRENCY_FROM_SET,
    })
  }
}
