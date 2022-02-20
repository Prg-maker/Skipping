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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  padding:32px;


  .icons{
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }

`


const StylesIcons = css`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: #fff;
  margin-bottom: 45px;
`

const StylesIconsHover = css`

  &:hover{
    transition: 0.1s;
    filter: brightness(1);
    background: rgba(210, 210, 210, 0.3);
    border-radius:50px;
    transform: scale(1, 1);
  
  }
`

export const CircleIcon = styled(AiOutlineDollarCircle)`
  ${StylesIcons}
`

export const HomeIcon = styled(RiHome2Line)`
  ${StylesIconsHover}
  ${StylesIcons}
`
export const GraphIcon = styled(GoGraph)`
  ${StylesIconsHover}

  ${StylesIcons}
`
export const DateIcon = styled(MdDateRange)`
  ${StylesIconsHover}

  ${StylesIcons}
`
export const UserIcon = styled(FiUser)`
  ${StylesIconsHover}

  ${StylesIcons}
`
export const LogoutIcon = styled(BiLogOutCircle)`
  ${StylesIcons}
`
