import { HISTORY_LIST } from '../Actions/ActionTypes'

const initialState = {
  historyList: []
}

const collectionListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HISTORY_LIST:
      return {
        ...state,
        historyList: action.payload
      }
    default:
      return state
  }
}

export default collectionListReducer
