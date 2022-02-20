import { Container, HomeIcon, GraphIcon, DateIcon, UserIcon, LogoutIcon, CircleIcon } from './styles'
import IconWrapperSvg from '../../assets/wrapper.svg'

export function DashBoard() {
  return (
    <Container>
      <div className="iconWrapper">
        <CircleIcon />
      </div>

      <div className="icons">

        <HomeIcon />
        <GraphIcon />
        <DateIcon />
        <UserIcon />

      </div>

      <div className="logout">
        <LogoutIcon />
      </div>
    </Container>
  )
}
