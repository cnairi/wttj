export const CLEAR_CONTRACT_FILTER = 'CLEAR_CONTRACT_FILTER'
export const CLEAR_DATE_FILTER = 'CLEAR_DATE_FILTER'
export const CLEAR_KEYWORD_FILTER = 'CLEAR_KEYWORD_FILTER'
export const SAVE_FILTERS = 'SAVE_FILTERS'

export const saveSearchFilters = ({ contractType, date, keyword }) => {
  return dispatch => {
    dispatch({
      type: SAVE_FILTERS,
      ...{ keyword },
      ...{ contractType },
      ...{ date },
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

export const clearKeywordFilter = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_KEYWORD_FILTER,
    })
  }
}
