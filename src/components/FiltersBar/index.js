import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ConnectedField } from '@welcome-ui/connected-field'
import { Form as FinalForm } from 'react-final-form'
import { array, func, instanceOf, oneOfType, string } from 'prop-types'
import { Select } from '@welcome-ui/select'
import { InputText } from '@welcome-ui/input-text'
import { DatePicker } from '@welcome-ui/date-picker'
import { DateIcon } from '@welcome-ui/icons.date'
import { useTranslation } from 'react-i18next'
import {
  clearContractTypeFilter,
  clearDateFilter,
  clearGroupedBy,
  clearKeywordFilter,
  saveSearchFilters,
} from '@store/actions/filters'
import { selectJobsTypes } from '@store/selectors/jobs'
import { openModale } from '@store/actions/modale'
import Button from '@components/Common/Button'
import * as S from '@components/FiltersBar/styles'

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
  const [seletGroupOptions, setSelectGroupOptions] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    setSelectGroupOptions([
      { value: 'department', label: t('filters.department_name') },
      { value: 'office', label: t('filters.office_name') },
      { value: '', label: t('filters.none') },
    ])
  }, [t])

  const handleSearch = e =>
    e.target.value ? saveSearchFilters({ keyword: e.target.value }) : clearKeywordFilter()

  const handleSelectJobType = contractType =>
    contractType ? saveSearchFilters({ contractType }) : clearContractTypeFilter()

  const handleGroupBy = groupedBy =>
    groupedBy ? saveSearchFilters({ groupedBy }) : clearGroupedBy()

  const handleDateChange = date => (date ? saveSearchFilters({ date }) : clearDateFilter())

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.debug
  }

  const dateNow = new Date()

  return (
    <FinalForm
      initialValues={{ date: dateNow.setFullYear(dateNow.getFullYear() - 3) }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <S.FormContent
            alignItems={{ xs: 'normal', lg: 'flex-end' }}
            direction={{ xs: 'column', lg: 'row' }}
            justifyContent="space-around"
          >
            <S.SearchBar
              component={InputText}
              isClearable
              name="keyword"
              onChange={handleSearch}
              placeholder={t('filters.search_label')}
              value={filtersKeyword}
            />
            <ConnectedField
              component={Select}
              isClearable
              label={t('filters.contract_type_label')}
              name="contractType"
              onChange={handleSelectJobType}
              options={jobsTypes.map(jobTypes => ({
                value: jobTypes.toLowerCase(),
                label: jobTypes,
              }))}
              placeholder={t('filters.contract_type_placeholder')}
              value={contractTypeSelected}
            />
            <ConnectedField
              component={DatePicker}
              icon={<DateIcon color="light.100" />}
              label={t('filters.date_label')}
              maxDate={new Date()}
              name="date"
              onChange={handleDateChange}
              {...(dateFilter && { value: dateFilter })}
            />
            {seletGroupOptions && (
              <ConnectedField
                component={Select}
                isClearable
                label={t('filters.grouped_by_label')}
                name="group"
                onChange={handleGroupBy}
                options={seletGroupOptions}
                value={groupedByFilter}
              />
            )}
            <Button text={t('common.submit')} type="submit" variant="secondary" />
          </S.FormContent>
        </form>
      )}
    </FinalForm>
  )
}

FiltersBar.propTypes /* remove-proptypes */ = {
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
