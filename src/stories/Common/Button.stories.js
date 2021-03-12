import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import Button from '@components/Common/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    withKnobs,
    Story => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
}

function Template(args) {
  return <Button {...args} text={text('buttonText', 'See more')} />
}

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  label: 'Button',
  external: true,
  link: {
    url:
      'https://www.welcometothejungle.com/fr/companies/wttj/jobs/frontend-developer-react-js-css-in-js_paris',
  },
}

export const Secondary = Template.bind({})
Primary.args = {
  variant: 'secondary',
  label: 'Button',
  external: true,
  link: {
    url:
      'https://www.welcometothejungle.com/fr/companies/wttj/jobs/frontend-developer-react-js-css-in-js_paris',
  },
}
