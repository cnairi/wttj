import React from 'react'
import { connect } from 'react-redux'
import { ConnectedField } from '@welcome-ui/connected-field'
import { Form } from 'react-final-form'
import { array, func, string } from 'prop-types'
import { InputText } from '@welcome-ui/input-text'
import { Select } from '@welcome-ui/select'
import { DatePicker } from '@welcome-ui/date-picker'
import { DateIcon } from '@welcome-ui/icons.date'

import {
  clearContractTypeFilter,
  clearDateFilter,
  clearKeywordFilter,
  saveSearchFilters,
} from '../../store/actions/filters'
import { selectJobsTypes } from '../../store/selectors/jobs'
import { openModale } from '../../store/actions/modale'

function FiltersBar({
  clearContractTypeFilter,
  clearDateFilter,
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

  const handleSelectJobType = contractType => {
    if (contractType) {
      saveSearchFilters({ contractType })
    } else {
      clearContractTypeFilter()
    }
  }

  const handleDateChange = date => {
    if (date) {
      saveSearchFilters({ date })
    } else {
      clearDateFilter()
    }
  }

  const onSubmit = () => {}

  const validate = () => {}

  return (
    <Form
      initialValues={{ date: Date.now() }}
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
          <ConnectedField
            component={DatePicker}
            icon={<DateIcon color="light.100" />}
            label="Published after"
            maxDate={new Date()}
            name="date"
            onChange={handleDateChange}
            yearDropdownItemNumber={5}
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
  clearDateFilter: func,
  clearKeywordFilter: func,
  contractTypeSelected: string,
  filtersKeyword: string,
  jobsTypes: array,
  saveSearchFilters: func,
}

const mapStateToProps = state => {
  return {
    contractTypeSelected: state.filters.contractType,
    jobsTypes: selectJobsTypes(state),
    filtersKeyword: state.filters.keyword,
  }
}

const mapDispatchToProps = dispatch => ({
  clearContractTypeFilter: () => dispatch(clearContractTypeFilter()),
  clearDateFilter: () => dispatch(clearDateFilter()),
  clearKeywordFilter: () => dispatch(clearKeywordFilter()),
  saveSearchFilters: ({ contractType, date, keyword }) =>
    dispatch(saveSearchFilters({ contractType, date, keyword })),
  openModale: (id, type) => dispatch(openModale(id, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar)
