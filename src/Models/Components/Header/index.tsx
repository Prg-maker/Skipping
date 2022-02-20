import { Container, Profile, Avatar, NameProfile } from './styles'

export function Header() {
  return (
    <Container>
      <h2>Skipping</h2>

      <Profile>
        <Avatar src="https://github.com/Prg-Maker.png" />
        <NameProfile>Hello, Daniel Fernades</NameProfile>
      </Profile>

    </Container>
  )
}
