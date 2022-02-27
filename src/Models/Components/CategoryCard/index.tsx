import { Container, ContentWrapper, Header, Text, } from './styles'

import { Cards } from '../Cards'

export function CategoryCard() {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Text>Categories</Text>
          <Text>Seel all</Text>
        </Header>

        <Cards />

      </ContentWrapper>
    </Container>
  )
}
