import currencyReducer from '@/store/reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  currencyState: currencyReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk),
)

export default store
