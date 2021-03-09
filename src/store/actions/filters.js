export const CLEAR_CONTRACT_FILTER = 'CLEAR_CONTRACT_FILTER'
export const CLEAR_DATE_FILTER = 'CLEAR_DATE_FILTER'
export const CLEAR_GROUP_FILTER = 'CLEAR_GROUP_FILTER'
export const CLEAR_KEYWORD_FILTER = 'CLEAR_KEYWORD_FILTER'
export const SAVE_FILTERS = 'SAVE_FILTERS'

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
