import styled from 'styled-components'

export const Container = styled.div`
  grid-area: ST;

  margin: 100px 0;

  display: flex;
  justify-content:space-between;
  align-items:center;
  padding:0 60px 0 30px;



  >p{
    display: flex;
    align-items:center;

    color:#919191;

  }
`

export const Button = styled.button`
  background:#080808;
  color:#fff;
  width: 324px;
  height: 70px;
  border-radius: 35px;
  font-weight:bold;
  font-size: 18px;
  cursor: pointer;

  &:hover{
    filter:brightness(0.7);
  }

`
export const Minutos = styled.p`
  font-size:72px;

`
