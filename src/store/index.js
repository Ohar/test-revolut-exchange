import dataReducer from '@/store/data/reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  dataState: dataReducer,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk),
)

export default store
