import * as actions from '../../actions/modale'
import { CLOSE_MODALE, OPEN_MODALE } from '../../constants'
import { JOB_DETAILS_MODALE } from '../../../constants'

describe('actions', () => {
  it('should create an action to open a job details modale', () => {
    const id = '327776'
    const type = JOB_DETAILS_MODALE
    const expectedAction = {
      type: OPEN_MODALE,
      payload: {
        id,
        type,
      },
    }

    const actionDispatched = actions.openModale({ id, type })
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })

  it('should create an action to close a job details modale', () => {
    const expectedAction = {
      type: CLOSE_MODALE,
    }
    const actionDispatched = actions.closeModale()
    actionDispatched(receivedAction => {
      expect(receivedAction).toEqual(expectedAction)
    })
  })
})
