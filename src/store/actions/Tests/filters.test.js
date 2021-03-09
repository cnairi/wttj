import * as actions from '../../actions/filters'
import {
  CLEAR_CONTRACT_FILTER,
  CLEAR_DATE_FILTER,
  CLEAR_GROUP_FILTER,
  CLEAR_KEYWORD_FILTER,
  SAVE_FILTERS,
} from '../../constants'

describe('actions', () => {
  it('should create an action to save one search criteria', () => {
    const keyword = 'Manager'
    const expectedAction = {
      type: SAVE_FILTERS,
      keyword,
    }

    const actionDispatched = actions.saveSearchFilters({ keyword })
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })

  it('should create an action to save all search criteria', () => {
    const keyword = 'Manager'
    const contractType = 'full-time'
    const date = '2019-02-28T22:00:00.000Z'
    const groupedBy = 'groupedBy'
    const expectedAction = {
      type: SAVE_FILTERS,
      ...{ keyword },
      ...{ contractType },
      ...{ date },
      ...{ groupedBy },
    }
    const actionDispatched = actions.saveSearchFilters({ contractType, date, groupedBy, keyword })
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })

  it('should create an action to clear contractType filter', () => {
    const expectedAction = {
      type: CLEAR_CONTRACT_FILTER,
    }
    const actionDispatched = actions.clearContractTypeFilter()
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })

  it('should create an action to clear date filter', () => {
    const expectedAction = {
      type: CLEAR_DATE_FILTER,
    }
    const actionDispatched = actions.clearDateFilter()
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })

  it('should create an action to clear groupedBy filter', () => {
    const expectedAction = {
      type: CLEAR_GROUP_FILTER,
    }
    const actionDispatched = actions.clearGroupedBy()
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })

  it('should create an action to clear groupedBy filter', () => {
    const expectedAction = {
      type: CLEAR_KEYWORD_FILTER,
    }
    const actionDispatched = actions.clearKeywordFilter()
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })
})
