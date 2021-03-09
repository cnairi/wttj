import { CLOSE_MODALE, OPEN_MODALE } from '../constants'

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
