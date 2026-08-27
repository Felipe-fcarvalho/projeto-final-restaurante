import styled from 'styled-components'
import bgPattern from '../../assets/images/bg-pattern.png'

export const Header = styled.header`
  width: 100%;
  min-height: 368px;
  padding: ${({ theme }) => theme.padding.xxl};
  background-color: ${({ theme }) => theme.color.secondary};
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
  heigth: 58px;
`

export const Title = styled.h1`
  max-width: 500px;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: ${({ theme }) => theme.font.titlePage};
  font-weight: ${({ theme }) => theme.font.sizeBlack};
  line-height: 1.2;
  text-align: center;
`
