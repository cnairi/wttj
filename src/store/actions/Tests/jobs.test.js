import expect from 'expect'

import * as actions from '../jobs'
import { FETCH_JOBS } from '../../constants'

describe('async actions', () => {
  jest.genMockFromModule('./mocks/axios')
  it('creates FETCH_JOBS when fetching jobs list has been done', () => {
    const expectedAction = [{ type: FETCH_JOBS, body: { jobsList: ['do something'] } }]

    const actionDispatched = actions.fetchJobs()
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })
})
