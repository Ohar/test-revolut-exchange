import {RATE_SET} from '@/store/rate/action-types'

export default function actionRateSet (currency, quantity) {
  return {
    currency,
    quantity,
    type: RATE_SET,
  }
}
