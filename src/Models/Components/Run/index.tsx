import { Container, TextDay, Number, Contentwrapper } from './styles'

import RunSvg from '../../assets/run.svg'


export function Run() {
  return (
    <Container>

      <Contentwrapper>

        <TextDay>Today's <br /> Step Count</TextDay>


        <p className="number"><Number>800<a >Steps</a> </Number>/10000 Steps</p>

        <img src={RunSvg} alt="running" />

      </Contentwrapper>

    </Container>
  )
}
