import { HISTORY_LIST } from './ActionTypes'

export const setHistoryList = (list: any) => ({
  type: HISTORY_LIST,
  payload: list
})
