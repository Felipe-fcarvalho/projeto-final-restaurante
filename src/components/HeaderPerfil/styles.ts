import styled from 'styled-components'
import bgPattern from '../../assets/images/bg-pattern.png'
import theme from '../../styles/theme'

export const Header = styled.header`
  width: 100%;
  min-height: 167px;
  background-color: ${theme.color.secondary};
  background: url(${bgPattern}) center repeat;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: ${theme.padding.xl};
`

export const Logo = styled.img`
  width: 125px;
  heigth: 58px;
`

export const Title = styled.h1`
  color: ${theme.color.textPrimary};
  font-size: ${theme.font.header};
  font-weight: ${theme.font.black};
`
