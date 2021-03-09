import {
  CLEAR_CONTRACT_FILTER,
  CLEAR_DATE_FILTER,
  CLEAR_GROUP_FILTER,
  CLEAR_KEYWORD_FILTER,
  SAVE_FILTERS,
} from '../constants'

const initialState = {
  contractType: '',
  date: '',
  keyword: '',
  groupedBy: 'department',
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FILTERS:
      return {
        ...state,
        keyword: action.keyword ? action.keyword : state.keyword,
        contractType: action.contractType ? action.contractType : state.contractType,
        date: action.date ? action.date : state.date,
        groupedBy: action.groupedBy ? action.groupedBy : state.groupedBy,
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
    case CLEAR_GROUP_FILTER:
      return {
        ...state,
        groupedBy: '',
      }
    default:
      return state
  }
}

export default filtersReducer
