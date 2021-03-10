import React from 'react'
import { connect } from 'react-redux'
import { ConnectedField } from '@welcome-ui/connected-field'
import { Form } from 'react-final-form'
import { array, func, instanceOf, oneOfType, string } from 'prop-types'
import { InputText } from '@welcome-ui/input-text'
import { Select } from '@welcome-ui/select'
import { DatePicker } from '@welcome-ui/date-picker'
import { DateIcon } from '@welcome-ui/icons.date'

import {
  clearContractTypeFilter,
  clearDateFilter,
  clearGroupedBy,
  clearKeywordFilter,
  saveSearchFilters,
} from '../../store/actions/filters'
import { selectJobsTypes } from '../../store/selectors/jobs'
import { openModale } from '../../store/actions/modale'
import {
  DATE_PICKER_PLACEHOLDER,
  SEARCH_PLACEHOLDER,
  SELECT_CONTRACT_PLACEHOLDER,
  SELECT_GROUP_OPTIONS,
  SELECT_GROUP_PLACEHOLDER,
  SUBMIT,
} from '../../constants'
import Button from '../Common/Button'

function FiltersBar({
  clearContractTypeFilter,
  clearDateFilter,
  clearGroupedBy,
  clearKeywordFilter,
  contractTypeSelected,
  dateFilter,
  filtersKeyword,
  groupedByFilter,
  jobsTypes,
  saveSearchFilters,
}) {
  const handleSearch = e =>
    e.target.value ? saveSearchFilters({ keyword: e.target.value }) : clearKeywordFilter()

  const handleSelectJobType = contractType =>
    contractType ? saveSearchFilters({ contractType }) : clearContractTypeFilter()

  const handleGroupBy = groupedBy =>
    groupedBy ? saveSearchFilters({ groupedBy }) : clearGroupedBy()

  const handleDateChange = date => (date ? saveSearchFilters({ date }) : clearDateFilter())

  const onSubmit = () => {}

  const validate = () => {}

  const dateNow = new Date()

  return (
    <Form
      initialValues={{ date: dateNow.setFullYear(dateNow.getFullYear() - 3) }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <ConnectedField
            component={InputText}
            isClearable
            name="keyword"
            onChange={handleSearch}
            placeholder={SEARCH_PLACEHOLDER}
            value={filtersKeyword}
          />
          <ConnectedField
            component={Select}
            isClearable
            label={SELECT_CONTRACT_PLACEHOLDER}
            name="contractType"
            onChange={handleSelectJobType}
            options={jobsTypes.map(jobTypes => ({
              value: jobTypes.toLowerCase(),
              label: jobTypes,
            }))}
            value={contractTypeSelected}
          />
          <ConnectedField
            component={DatePicker}
            icon={<DateIcon color="light.100" />}
            label={DATE_PICKER_PLACEHOLDER}
            maxDate={new Date()}
            name="date"
            onChange={handleDateChange}
            {...(dateFilter && { value: dateFilter })}
          />
          <ConnectedField
            component={Select}
            isClearable
            label={SELECT_GROUP_PLACEHOLDER}
            name="group"
            onChange={handleGroupBy}
            options={SELECT_GROUP_OPTIONS}
            value={groupedByFilter}
          />
          <Button text={SUBMIT} type="submit" variant="secondary" />
        </form>
      )}
      validate={validate}
    />
  )
}

FiltersBar.propTypes = {
  clearContractTypeFilter: func,
  clearDateFilter: func,
  clearGroupedBy: func,
  clearKeywordFilter: func,
  contractTypeSelected: string,
  dateFilter: oneOfType([string, instanceOf(Date)]),
  filtersKeyword: string,
  groupedByFilter: string,
  jobsTypes: array,
  saveSearchFilters: func,
}

const mapStateToProps = state => {
  return {
    contractTypeSelected: state.filters.contractType,
    jobsTypes: selectJobsTypes(state),
    dateFilter: state.filters.date,
    filtersKeyword: state.filters.keyword,
    groupedByFilter: state.filters.groupedBy,
  }
}

const mapDispatchToProps = dispatch => ({
  clearContractTypeFilter: () => dispatch(clearContractTypeFilter()),
  clearDateFilter: () => dispatch(clearDateFilter()),
  clearGroupedBy: () => dispatch(clearGroupedBy()),
  clearKeywordFilter: () => dispatch(clearKeywordFilter()),
  saveSearchFilters: ({ contractType, date, groupedBy, keyword }) =>
    dispatch(saveSearchFilters({ contractType, date, groupedBy, keyword })),
  openModale: (id, type) => dispatch(openModale(id, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar)
