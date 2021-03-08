import React from 'react'
import { connect } from 'react-redux'
import { ConnectedField } from '@welcome-ui/connected-field'
import { Form } from 'react-final-form'
import { array, func, string } from 'prop-types'
import { InputText } from '@welcome-ui/input-text'
import { Select } from '@welcome-ui/select'

import {
  clearContractTypeFilter,
  clearKeywordFilter,
  saveSearchFilters,
} from '../../store/actions/filters'
import { selectJobsByKeywords } from '../../store/selectors/filters'
import { selectJobsTypes } from '../../store/selectors/jobs'
import { openModale } from '../../store/actions/modale'

function FiltersBar({
  clearContractTypeFilter,
  clearKeywordFilter,
  contractTypeSelected,
  filtersKeyword,
  jobsTypes,
  saveSearchFilters,
}) {
  const handleSearch = s => {
    if (s.target.value) {
      saveSearchFilters({ keyword: s.target.value })
    } else {
      clearKeywordFilter()
    }
  }

  const handleSelectJobType = option => {
    if (option) {
      saveSearchFilters({ contractType: option })
    } else {
      clearContractTypeFilter()
    }
  }

  const onSubmit = () => {}

  const validate = () => {}

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <ConnectedField
            component={InputText}
            isClearable
            name="searchByKeyword"
            onChange={handleSearch}
            placeholder="Your dream job?"
            required
            value={filtersKeyword}
          />
          <ConnectedField
            component={Select}
            height={40}
            isClearable
            label="Contract Type"
            name="contractType"
            onChange={handleSelectJobType}
            options={jobsTypes.map(jobTypes => ({
              value: jobTypes.toLowerCase(),
              label: jobTypes,
            }))}
            value={contractTypeSelected}
            width="100%"
          />
          <button type="submit">Submit</button>
        </form>
      )}
      validate={validate}
    />
  )
}

FiltersBar.propTypes = {
  clearContractTypeFilter: func,
  clearKeywordFilter: func,
  contractTypeSelected: string,
  filtersKeyword: string,
  jobsTypes: array,
  saveSearchFilters: func,
}

const mapStateToProps = state => {
  return {
    contractTypeSelected: state.filters.contractType,
    jobsListFiltered: selectJobsByKeywords(state),
    jobsTypes: selectJobsTypes(state),
    filtersKeyword: state.filters.keyword,
  }
}

const mapDispatchToProps = dispatch => ({
  clearContractTypeFilter: () => dispatch(clearContractTypeFilter()),
  clearKeywordFilter: () => dispatch(clearKeywordFilter()),
  saveSearchFilters: ({ contractType, keyword }) =>
    dispatch(saveSearchFilters({ contractType, keyword })),
  openModale: (id, type) => dispatch(openModale(id, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar)
