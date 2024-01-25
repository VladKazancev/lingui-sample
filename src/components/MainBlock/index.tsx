import type { FC } from 'react'

import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

import { SwitchLocaleButton, Row } from './styles'

export const MainBlock: FC = () => {
  const { i18n } = useLingui()

  return (
    <>
      <Row>
        <SwitchLocaleButton
          onClick={() => {
            i18n.activate(i18n.locale === 'en' ? 'fr' : 'en')
          }}
        >
          Switch locale
        </SwitchLocaleButton>
        Current locale:
        <span style={{ color: 'black', textTransform: 'uppercase' }}>{i18n.locale}</span>
      </Row>
      <Row>Main block: {t(i18n)`Message in english`}</Row>
    </>
  )
}
