import styled from 'styled-components'
import theme from '../../styles/theme'

export const Section = styled.section`
  background-color: ${theme.color.bgPage};
  padding-top: 56px;
  padding-bottom: 120px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.padding.xxl};
`

export const Card = styled.div`
  background-color: ${theme.color.bgCardSecondary};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    padding: ${theme.padding.sm};
  }

  h3 {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.titleCardSecondary};
    font-weight: ${theme.font.bold};
    padding: 0 ${theme.padding.sm};
  }

  p {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.text};
    font-weight: ${theme.font.regular};
    padding: ${theme.padding.sm};
    line-height: 22px;
    flex: 1;
  }

  button {
    margin: ${theme.padding.sm};
    padding: 4px;
    border: none;
    background-color: ${theme.color.btnSecondary};
    color: ${theme.color.textPrimary};
    font-size: ${theme.font.btn};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }
`
