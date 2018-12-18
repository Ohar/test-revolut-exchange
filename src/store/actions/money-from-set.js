import { MONEY_FROM_SET, MONEY_TO_UPDATE } from '@/store/action-types'

export default function actionMoneyFromSet (moneyFrom) {
  return dispatch => {
    dispatch({
      moneyFrom,
      type: MONEY_FROM_SET,
    })

    dispatch({type: MONEY_TO_UPDATE})
  }
}
