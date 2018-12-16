import {DATA_SET} from '@/store/data/action-types'

export default function actionDataSet (data) {
  return dispatch => {
    dispatch({
      data,
      type: DATA_SET,
    })
  }
}
