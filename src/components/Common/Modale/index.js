import { connect } from 'react-redux'

import { closeModale } from '../../../store/actions/modale'
import { selectJobDetails } from '../../../store/selectors/jobs'

import Modale from './Modale'

const mapStateToProps = state => {
  const { modale } = state
  return {
    id: modale.id,
    isOpen: modale.isOpen,
    type: modale.type,
    data: selectJobDetails(state),
  }
}

const mapDispatchToProps = dispatch => ({
  closeModale: () => dispatch(closeModale()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Modale)
