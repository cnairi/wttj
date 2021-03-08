export const CLEAR_CONTRACT_FILTER = 'CLEAR_CONTRACT_FILTER'
export const CLEAR_KEYWORD_FILTER = 'CLEAR_KEYWORD_FILTER'
export const SAVE_FILTERS = 'SAVE_FILTERS'

const initialState = {
  keyword: '',
  contractType: '',
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FILTERS:
      return {
        ...state,
        keyword: action.keyword ? action.keyword : state.keyword,
        contractType: action.contractType ? action.contractType : state.contractType,
      }
    case CLEAR_CONTRACT_FILTER:
      return {
        ...state,
        contractType: initialState.contractType,
      }
    case CLEAR_KEYWORD_FILTER:
      return {
        ...state,
        keyword: initialState.keyword,
      }
    default:
      return state
  }
}

export default filtersReducer
