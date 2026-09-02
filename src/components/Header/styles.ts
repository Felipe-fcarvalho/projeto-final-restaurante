import styled from 'styled-components'
import bgPattern from '../../assets/images/bg-pattern.png'
import theme from '../../styles/theme'

export const Header = styled.header`
  width: 100%;
  min-height: 368px;
  padding-top: 44px;
  background-color: ${theme.color.secondary};
  background: url(${bgPattern}) center repeat;
  text-align: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 138px;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const Title = styled.h1`
  max-width: 500px;
  color: ${theme.color.textPrimary};
  font-size: ${theme.font.titlePage};
  font-weight: ${theme.font.black};
  line-height: 1.2;
  text-align: center;
`
