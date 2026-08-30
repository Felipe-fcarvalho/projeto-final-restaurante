import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.padding.lg};
  z-index: 100;
`

export const Modal = styled.div`
  position: relative;
  display: flex;
  gap: ${theme.padding.lg};
  max-width: 900px;
  width: 100%;
  background-color: ${theme.color.bgCardSecondary};
  padding: ${theme.padding.lg};

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const Fechar = styled.button`
  position: absolute;
  top: -4px;
  right: ${theme.padding.sm};
  background: none;
  border: none;
  color: ${theme.color.textSecondary};
  font-size: 1.5rem;
  font-weight: ${theme.font.thin};
  cursor: pointer;
`

export const Foto = styled.img`
  width: 320px;
  max-width: 40%;
  height: auto;
  object-fit: cover;

  @media (max-width: 640px) {
    max-width: 100%;
    width: 100%;
  }
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.padding.sm};

  h3 {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.titleCardPrimary};
    font-weight: ${theme.font.bold};
  }

  p {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.text};
    font-weight: ${theme.font.regular};
    line-height: 22px;
  }

  span {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.text};
  }

  button {
    align-self: flex-start;
    margin-top: ${theme.padding.sm};
    padding: ${theme.padding.sm} ${theme.padding.md};
    background-color: ${theme.color.btnSecondary};
    color: ${theme.color.textPrimary};
    font-size: ${theme.font.btn};
    font-weight: ${theme.font.bold};
    border: none;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }
`
