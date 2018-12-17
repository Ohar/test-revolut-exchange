import { MONEY_FROM_SET } from '@/store/currency/action-types'

export default function actionMoneyFromSet (moneyFrom) {
  return {
    moneyFrom,
    type: MONEY_FROM_SET,
  }
}
