import { CURRENCY_TO_SET, MONEY_TO_UPDATE } from '@/store/currency/action-types'

export default function actionCurrencyToSet (currency) {
  return dispatch => {
    dispatch({
      currency,
      type: CURRENCY_TO_SET,
    })

    dispatch({type: MONEY_TO_UPDATE})
  }
}
