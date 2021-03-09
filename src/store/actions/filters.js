import {
  CLEAR_CONTRACT_FILTER,
  CLEAR_DATE_FILTER,
  CLEAR_GROUP_FILTER,
  CLEAR_KEYWORD_FILTER,
  SAVE_FILTERS,
} from '../constants'

export const saveSearchFilters = ({ contractType, date, groupedBy, keyword }) => {
  return dispatch => {
    dispatch({
      type: SAVE_FILTERS,
      ...{ keyword },
      ...{ contractType },
      ...{ date },
      ...{ groupedBy },
    })
  }
}

export const clearContractTypeFilter = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_CONTRACT_FILTER,
    })
  }
}

export const clearDateFilter = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_DATE_FILTER,
    })
  }
}

export const clearGroupedBy = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_GROUP_FILTER,
    })
  }
}

export const clearKeywordFilter = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_KEYWORD_FILTER,
    })
  }
}
