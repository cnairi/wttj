import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import Language from '@components/Common/Language'
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

const setup = () => {
  const utils = render(<Language />)
  const input = utils.getByRole('button')
  const menu = utils.getByRole('combobox')
  return {
    menu,
    input,
    ...utils,
  }
}

describe('Component Common <Language />', () => {
  test('It should renders properly', () => {
    const tree = render(<Language />)
    expect(tree).toMatchSnapshot()
  })

  test('It should open select on click', async () => {
    const { input } = setup()
    fireEvent.click(input)
    const items = await screen.getByLabelText('close menu')
    expect(items).toBeDefined()
  })

  test('It should select language on input click', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'fr' } })
    expect(input.value).toBe('fr')
  })
})
