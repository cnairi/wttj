export const OPEN_MODALE = 'OPEN_MODALE'
export const CLOSE_MODALE = 'CLOSE_MODALE'

const initialState = {
  id: null,
  isOpen: false,
  type: '',
}

const modaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODALE:
      return {
        ...state,
        id: action.payload.id,
        isOpen: true,
        type: action.payload.type,
      }
    case CLOSE_MODALE:
      return initialState
    default:
      return state
  }
}

export default modaleReducer
