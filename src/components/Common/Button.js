import React from 'react'
import { func, string } from 'prop-types'
import { Button } from '@welcome-ui/button'

function ButtonComponent({ onClickAction, text }) {
  return (
    <Button onClick={onClickAction} primary="true" width={{ xs: '100%', lg: 'auto' }}>
      {text}
    </Button>
  )
}

ButtonComponent.propTypes = {
  onClickAction: func,
  text: string,
}

export default ButtonComponent
