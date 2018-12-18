import { CURRENCY_SWITCH, MONEY_TO_UPDATE } from '@/store/currency/action-types'

export default function actionCurrencySwitch () {
  return dispatch => {
    dispatch({type: CURRENCY_SWITCH})
    dispatch({type: MONEY_TO_UPDATE})
  }
}
