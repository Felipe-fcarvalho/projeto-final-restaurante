import styled from 'styled-components'
import theme from '../../styles/theme'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 472px;
  height: 398px;
  position: relative;
  overflow: hidden;
  background-color: ${theme.color.bgCardPrimary};
`

export const Image = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`

export const CardTag = styled.div`
  display: flex;
  position: absolute;
  top: ${theme.padding.md};
  right: ${theme.padding.md};
  gap: ${theme.padding.sm};
`

export const Tag = styled.span`
  background-color: ${theme.color.primary};
  color: ${theme.color.textWhite};
  font-weight: ${theme.font.bold};
  font-size: 12px;
  padding: 6px ${theme.padding.md};
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${theme.padding.sm};
  border: 1px solid ${theme.color.primary};
  border-top: none;
  overflow-y: hidden;

  p {
    color: ${theme.color.textPrimary};
    font-size: ${theme.font.text};
    font-weight: ${theme.font.regular};
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  a {
    margin-top: auto;
    align-self: flex-start;
    padding: 4px 6px;
    background-color: ${theme.color.btnPrimary};
    color: ${theme.color.btnSecondary};
    font-size: ${theme.font.btn};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${theme.padding.md};

  h3,
  span {
    color: ${theme.color.textPrimary};
    font-size: ${theme.font.titleCardPrimary};
    font-weight: ${theme.font.bold};
  }
`

export const Rate = styled.div`
  gap: ${theme.padding.sm};
  display: flex;
  align-items: center;
`
