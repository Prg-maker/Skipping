import styled, { css } from 'styled-components'

import { RiHome2Line } from 'react-icons/ri'
import { GoGraph } from 'react-icons/go'
import { MdDateRange } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import { BiLogOutCircle } from 'react-icons/bi'
import { AiOutlineDollarCircle } from 'react-icons/ai'

export const Container = styled.div`
  width: 102px;
  height: 100vh;
  background: #080808;
  position:fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  padding:32px;


  .icons{
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;


    >div{
      width: 50px;
      height: 50px;

      display:flex;
      justify-content:center;
      align-items:center;
      margin-bottom: 30px;

      &:hover{
        background: #464646;
        border-radius:40%;


      }
    }

  }



`


const StylesIcons = css`
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: #fff;
`




export const CircleIcon = styled(AiOutlineDollarCircle)`
  ${StylesIcons}
`

export const HomeIcon = styled(RiHome2Line)`
  ${StylesIcons}
`
export const GraphIcon = styled(GoGraph)`

  ${StylesIcons}
`
export const DateIcon = styled(MdDateRange)`

  ${StylesIcons}
`
export const UserIcon = styled(FiUser)`
  ${StylesIcons}
`
export const LogoutIcon = styled(BiLogOutCircle)`
  ${StylesIcons}
`
