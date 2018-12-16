import { MONEY_SET } from '@/store/account/action-types'

export default function actionMoneySet (currency, quantity) {
  return {
    currency,
    quantity,
    type: MONEY_SET,
  }
}
