import { Container } from './styles'

import { DashBoard } from '../DashBoard'
import { MainContainer } from '../MainContainer'


function Layout() {
  return (
    <Container>
      <DashBoard />

      <div className="MainContainer">
        <MainContainer />
      </div>


    </Container>
  )
}

export default Layout
