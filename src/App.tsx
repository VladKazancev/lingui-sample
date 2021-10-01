import type { FC } from 'react'

import { CRAHomePage } from './components/CRAHomePage'
import { GlobalStyles } from './components/GlobalStyles'
import { Container } from './styles'

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <CRAHomePage />
      </Container>
    </>
  )
}

export default App
