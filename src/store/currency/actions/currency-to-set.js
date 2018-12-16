import { CURRENCY_TO_SET } from '@/store/currency/action-types'

export default function actionCurrencyToSet (currency) {
  return {
    currency,
    type: CURRENCY_TO_SET,
  }
}
