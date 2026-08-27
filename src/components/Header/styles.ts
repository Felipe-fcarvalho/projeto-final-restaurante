import styled from 'styled-components'

export const Header = styled.header`
  height: 368px;
  width: 100%;
  padding: ${({ theme }) => theme.padding.xxl};
  background-color: ${({ theme }) => theme.color.secondary};
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  heigth: 58px;
`

export const Title = styled.h1`
  max-width: 600px;
  color: ${({ theme }) => theme.color.textPrimary};
  font-style: ${({ theme }) => theme.font.titlePage};
  font-size: ${({ theme }) => theme.font.sizeBlack};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
`
