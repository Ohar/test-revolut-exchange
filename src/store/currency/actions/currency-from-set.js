import {CURRENCY_FROM_SET} from '@/store/currency/action-types'

export default function actionCurrencyFromSet (currency) {
  return {
    currency,
    type: CURRENCY_FROM_SET,
  }
}
