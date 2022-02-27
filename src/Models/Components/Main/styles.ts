import styled from 'styled-components'

// Sk - skinping
// Ru - image run
// ST - start Tranking
// CT - categories

export const Grid = styled.div`
  display: grid;
  grid-template-columns:486px  auto;
  grid-template-rows: 200px 150px auto;
  grid-template-areas:
    'SK  RU'
    'SK ST'
    'SK CT'
  ;


  height: 100%;

  .skinppingIllustration{
    grid-area:SK;
    position:relative;

    >img{
      width: 600px;
      height: 600px;
    }


  }

`


export const Text = styled.p`
  text-align: center;
  color: #393939;
  font-size: 18px;
`
