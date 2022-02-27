import { Container, CardLifting, CardYoga, CardLunge, Title } from './styles'

import WeightLiftingSvg from '../../assets/WeightLifting.svg'
import YogaSvg from '../../assets/Yoga.svg'
import LungeSvg from '../../assets/Lunge.svg'

export function Cards() {
  return (
    <Container>
      <CardLifting>
        <Title>Weight Lifting</Title>
        <img src={WeightLiftingSvg} alt="altWeight Lifting" />

      </CardLifting>


      <CardYoga>
        <Title>Yoga</Title>
        <img src={YogaSvg} alt="Yoga" />

      </CardYoga>


      <CardLunge>
        <Title>Lunge</Title>
        <img src={LungeSvg} alt="Lunge" />

      </CardLunge>

    </Container>
  )
}
