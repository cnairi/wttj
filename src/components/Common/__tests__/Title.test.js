import React from 'react'
import Title from '@components/Common/Title'
import { render } from '@utils/tests'

const text = 'Media'

describe('Component Common <Title />', () => {
  test('It should renders properly', () => {
    const tree = render(<Title text={text} />)
    expect(tree).toMatchSnapshot()
  })

  test('It should display a title', async () => {
    const { getByRole } = render(<Title text={text} />)
    const titleElement = getByRole('heading')
    expect(titleElement).toHaveTextContent(text)
  })
})
