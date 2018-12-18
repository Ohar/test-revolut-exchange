import { CURRENCY_SWITCH, MONEY_TO_UPDATE } from '@/store/action-types'

export default function actionCurrencySwitch () {
  return dispatch => {
    dispatch({type: CURRENCY_SWITCH})
    dispatch({type: MONEY_TO_UPDATE})
  }
}
