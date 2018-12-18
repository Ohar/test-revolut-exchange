import { MONEY_SET } from '@/store/action-types'

export default function actionMoneySet (account) {
  return {
    account,
    type: MONEY_SET,
  }
}
