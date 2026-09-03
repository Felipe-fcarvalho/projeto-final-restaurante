import styled from 'styled-components'
import theme from '../../styles/theme'

export const Section = styled.section`
  background-color: ${theme.color.bgPage};
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.padding.lg};

  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background-color: ${theme.color.bgCardSecondary};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${theme.padding.sm};

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  h3 {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.titleCardSecondary};
    font-weight: ${theme.font.bold};
    padding: ${theme.padding.sm} 0;
  }

  p {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.text};
    font-weight: ${theme.font.regular};
    padding: ${theme.padding.sm} 0;
    line-height: 22px;
    flex: 1;
    overflow: hidden;
  }

  button {
    padding: ${theme.padding.sm} 0;
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
