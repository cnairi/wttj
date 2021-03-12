import React from 'react'
import { fireEvent } from '@testing-library/react'
import Button from '@components/Common/Button'
import { render } from '@utils/tests'

const text = 'See more'
const link = {
  url: 'https://www.welcometothejungle.com/en/companies/wttj/jobs/senior-editor-journalist_prague',
}
const mockCallback = jest.fn()

describe('Component Common <Button />', () => {
  it('renders with an <a> when external', () => {
    const tree = render(<Button external link={link} text={text} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders as a button with an onClick action by default', () => {
    const tree = render(<Button link={link} onClickAction={mockCallback} text={text} />)
    expect(tree).toMatchSnapshot()
  })

  it('find text', () => {
    const { container } = render(<Button text={text} />)
    expect(container).toHaveTextContent(text)
  })

  it('should call onClickAction onClick by default', () => {
    const { getByRole } = render(<Button onClickAction={mockCallback} text={text} />)
    const eventElement = getByRole('button')
    fireEvent.click(eventElement)
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  it('should not call onClickAction onClick when external', () => {
    const { getByRole } = render(<Button external link={link} text={text} />)
    const eventElement = getByRole('link')
    fireEvent.click(eventElement)
    expect(mockCallback).toHaveBeenCalledTimes(0)
  })
})
