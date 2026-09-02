import styled from 'styled-components'
import bgPattern from '../../assets/images/bg-pattern.png'
import theme from '../../styles/theme'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  width: 100%;
  min-height: 167px;
  background: url(${bgPattern}) center repeat;
  background-color: ${theme.color.secondary};
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding-top: 44px;
`

export const Nav = styled(Link)`
  color: ${theme.color.textPrimary};
  font-size: ${theme.font.header};
  font-weight: ${theme.font.black};
  text-decoration: none;
  justify-self: start;
`

export const Logo = styled(Link)`
  background-image: url(${logo});
  width: 125px;
  height: 57.5px;
  justify-self: center;
`

export const Carrinho = styled.span`
  color: ${theme.color.textPrimary};
  font-size: ${theme.font.header};
  font-weight: ${theme.font.black};
  justify-self: end;
  cursor: pointer;
`
