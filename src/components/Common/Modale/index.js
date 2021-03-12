import { connect } from 'react-redux'
import { closeModale } from '@store/actions/modale'
import { selectJobDetails } from '@store/selectors/jobs'
import ModaleContainer from '@components/Common/Modale/Container'

const mapStateToProps = state => {
  const { filters, modale } = state
  return {
    data: selectJobDetails(state),
    filtersKeyword: filters.keyword,
    id: modale.id,
    isOpen: modale.isOpen,
    type: modale.type,
  }
}

const mapDispatchToProps = dispatch => ({
  closeModale: () => dispatch(closeModale()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModaleContainer)
