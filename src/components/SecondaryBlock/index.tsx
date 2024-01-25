import { memo } from 'react'
import type { FC } from 'react'

import { Trans } from '@lingui/macro'

import { Row } from './styles'

const message = Object.freeze({ foo: <Trans>Message in english</Trans> })

export const SecondaryBlock: FC = memo(() => {
  return (
    <>
      <Row>Secondary block. {message.foo}</Row>
    </>
  )
})
