import { Container, HomeIcon, GraphIcon, DateIcon, UserIcon, LogoutIcon, CircleIcon } from './styles'
import IconWrapperSvg from '../../assets/wrapper.svg'

export function DashBoard() {
  return (
    <Container>
      <div className="iconWrapper">
        <CircleIcon />
      </div>

      <div className="icons">


        <div>
          <HomeIcon />

        </div>

        <div>
          <GraphIcon />

        </div>

        <div>
          <DateIcon />

        </div>

        <div>
          <UserIcon />
        </div>

      </div>

      <div className="logout">
        <LogoutIcon />
      </div>
    </Container>
  )
}
