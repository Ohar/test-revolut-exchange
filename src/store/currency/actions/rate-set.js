import {RATE_SET} from '@/store/currency/action-types'

export default function actionRateSet (rate) {
  return {
    rate,
    type: RATE_SET,
  }
}
