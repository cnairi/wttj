import React from 'react'

import { WuiProvider } from '@welcome-ui/core'

import theme from '@context/theme'

export const decorators = [
  Story => (
    <WuiProvider theme={theme} useReset>
      <Story />
    </WuiProvider>
  ),
]
