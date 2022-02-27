import styled from 'styled-components'


export const Container = styled.div`
  grid-area: RU;
  background: #F2F2F2;
  margin: 40px 40px 0 0px ;
  border-radius:15px;
  height: 100%;


`

export const Contentwrapper = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;

    height: 100%;
    padding:40px ;





  >img{
    opacity:0.6;
  }


  .number{
    font-weight: bold;
    color: #000000;
  }

`


export const TextDay = styled.p`,
  font-size:24px;
  font-weight:bold;
  color:#919191;
`
export const Number = styled.p`
  font-size: 72px;


  >a{
    font-size:24px;
  }
`
