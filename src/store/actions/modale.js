export const OPEN_MODALE = 'OPEN_MODALE'
export const CLOSE_MODALE = 'CLOSE_MODALE'

export const openModale = ({ id, type }) => {
  return dispatch => {
    dispatch({
      type: OPEN_MODALE,
      payload: {
        id,
        type,
      },
    })
  }
}

export const closeModale = () => {
  return dispatch => {
    dispatch({
      type: CLOSE_MODALE,
    })
  }
}
