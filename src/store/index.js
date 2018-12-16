import dataReducer from '@/store/data/reducer'
import currencyReducer from '@/store/currency/reducer'
import accountReducer from '@/store/account/reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  accountState: accountReducer,
  currencyState: currencyReducer,
  dataState: dataReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk),
)

export default store
