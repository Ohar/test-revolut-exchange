import { MONEY_TO_SET } from '@/store/currency/action-types'

export default function actionMoneyToSet (moneyTo) {
  return {
    moneyTo,
    type: MONEY_TO_SET,
  }
}
