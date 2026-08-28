import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  margin-top: 40px;
`

export const Social = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Text = styled.p`
  max-width: 480px;
  margin-top: 80px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.font.regular};
  font-size: 10px;
  line-height: 100%;
  text-align: center;
`
