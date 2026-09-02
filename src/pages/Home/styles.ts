import styled from 'styled-components'
import theme from '../../styles/theme'

export const Lista = styled.section`
  background-color: ${theme.color.bgPage};
  padding-top: 80px;
  padding-bottom: 120px;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px 48px;
  }
`
export const Message = styled.p`
  color: ${theme.color.textPrimary};
  font-size: ${theme.font.header};
  font-weight: ${theme.font.black};
`
