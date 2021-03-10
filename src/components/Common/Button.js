import React from 'react'
import { bool, func, object, string } from 'prop-types'
import { Button } from '@welcome-ui/button'

function ButtonComponent({ external, link, onClickAction, text, variant }) {
  const actionProps = external
    ? {
        as: 'a',
        href: link.url,
        target: '_blank',
        rel: 'noopener nofollow noreferrer',
      }
    : {
        onClick: onClickAction,
      }

  return (
    <Button {...actionProps} variant={variant} width={{ xs: '100%', lg: 'auto' }}>
      {text}
    </Button>
  )
}

ButtonComponent.propTypes /* remove-proptypes */ = {
  external: bool,
  link: object,
  onClickAction: func,
  text: string,
  variant: string,
}

ButtonComponent.defaultProps = {
  variant: 'primary',
}

export default ButtonComponent
