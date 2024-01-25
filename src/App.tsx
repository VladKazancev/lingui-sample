import type { FC } from 'react'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as frMessages } from './locales/fr/messages'

import { MainBlock } from './components/MainBlock'
import { SecondaryBlock } from './components/SecondaryBlock'
import { GlobalStyles } from './components/GlobalStyles'
import { Container, Wrapper } from './styles'

i18n.load('en', enMessages)
i18n.load('fr', frMessages)
i18n.activate('en')

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <I18nProvider i18n={i18n}>
        <Container>
          <Wrapper>
            <MainBlock />
            <SecondaryBlock />
          </Wrapper>
        </Container>
      </I18nProvider>
    </>
  )
}

export default App
