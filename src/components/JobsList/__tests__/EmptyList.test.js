import React from 'react'
import EmptyList from '@components/JobsList/Content/Empty'
import { render } from '@utils/tests'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

describe('Component JobsList <EmptyList />', () => {
  test('It should renders properly', () => {
    const tree = render(<EmptyList />)
    expect(tree).toMatchSnapshot()
  })

  test('It have title and text', async () => {
    const { getByRole, getByText } = render(<EmptyList />)
    const titleElement = getByRole('heading')
    const textElement = getByText('filters.empty_list_title')
    expect(titleElement).toHaveTextContent('filters.empty_list_title')
    expect(textElement).toBeDefined()
  })
})
