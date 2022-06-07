import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, combineReducers,compose } from 'redux'
import thunk from 'redux-thunk'
import * as ListDto from './common/list.dto'
import * as MyPageDto from './common/mypage.dto'

export const history = createHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const reducer = combineReducers({
    listDto: ListDto.reducer,
    myPageDto: MyPageDto.reducer
})

export const initialState = {
  listDto:      ListDto.initialState,
  myPageDto:    MyPageDto.initialState
}

export const rootReducer = (state, action) => {
  return reducer(state, action)
}

export const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
