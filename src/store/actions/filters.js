export const SAVE_FILTERS = 'SAVE_FILTERS'

export const saveSearchFilters = ({ keyword }) => {
  return dispatch => {
    dispatch({
      type: SAVE_FILTERS,
      payload: keyword,
    })
  }
}
