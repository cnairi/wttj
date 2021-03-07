import React from 'react'
import { connect } from 'react-redux'
import { ConnectedField } from '@welcome-ui/connected-field'
import { Form } from 'react-final-form'
import { Search } from '@welcome-ui/search'
import { Shape } from '@welcome-ui/shape'
import { array, func } from 'prop-types'

import { saveSearchFilters } from '../../store/actions/filters'
import { selectJobsByKeywords } from '../../store/selectors/filters'
import wttjLogo from '../../assets/images/logo-wttj.jpeg'

function FiltersBar({ filters, saveSearchFilters }) {
  const handleSearch = async s => {
    await saveSearchFilters({ keyword: s })

    return filters
  }

  const renderItem = item => {
    return (
      item && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Shape h="40px" mr="sm" shape="circle" w="40px">
            <img alt="Company Logo" src={wttjLogo} />
          </Shape>
          {item.name} ({item.contract_type.en})
        </div>
      )
    )
  }

  const onSubmit = () => {}

  const validate = () => {}

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <ConnectedField
            component={Search}
            itemToString={item => item && item.Title}
            label="Jobs"
            name="jobs"
            placeholder="Your dream job?"
            renderItem={item => renderItem(item)}
            search={handleSearch}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      validate={validate}
    />
  )
}

FiltersBar.propTypes = {
  filters: array,
  saveSearchFilters: func,
}

const mapStateToProps = state => {
  return {
    filters: selectJobsByKeywords(state),
  }
}

const mapDispatchToProps = dispatch => ({
  saveSearchFilters: ({ keyword }) => dispatch(saveSearchFilters({ keyword })),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar)
