export const CLEAR_CONTRACT_FILTER = 'CLEAR_CONTRACT_FILTER'
export const CLEAR_DATE_FILTER = 'CLEAR_DATE_FILTER'
export const CLEAR_KEYWORD_FILTER = 'CLEAR_KEYWORD_FILTER'
export const SAVE_FILTERS = 'SAVE_FILTERS'

const initialState = {
  contractType: '',
  date: '',
  keyword: '',
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FILTERS:
      return {
        ...state,
        keyword: action.keyword ? action.keyword : state.keyword,
        contractType: action.contractType ? action.contractType : state.contractType,
        date: action.date ? action.date : state.date,
      }
    case CLEAR_CONTRACT_FILTER:
      return {
        ...state,
        contractType: initialState.contractType,
      }
    case CLEAR_DATE_FILTER:
      return {
        ...state,
        date: initialState.date,
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
