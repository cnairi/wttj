export const SAVE_FILTERS = 'SAVE_FILTERS'

const initialState = {
  keyword: '',
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FILTERS:
      return {
        ...state,
        keyword: action.payload,
      }
    default:
      return state
  }
}

export default filtersReducer
