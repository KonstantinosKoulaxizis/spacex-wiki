import { createStore, combineReducers } from 'redux'
import listsReducer from './Reducers/ListsReducers'

const rootReducer = combineReducers({
  lists: listsReducer,
})

const configureStore = () => createStore(rootReducer)

export const store = configureStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
