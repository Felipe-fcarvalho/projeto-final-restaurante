import styled from 'styled-components'
import theme from '../../styles/theme'
import lixeira from '../../assets/icons/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${theme.color.bgCardSecondary};
  z-index: 1;
  padding: 32px 8px 40px 8px;
  width: 360px;
`

export const CartItem = styled.li`
  display: flex;
  margin: 0 0 16px 0;
  padding: 8px;
  background-color: ${theme.color.secondary};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-left: 8px;
    color: ${theme.color.textPrimary};
    font-weight: ${theme.font.black};
    font-size: ${theme.font.titleCardPrimary};
  }

  span {
    display: block;
    margin-top: 16px;
    color: ${theme.color.textPrimary};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.text};
  }

  button {
    background-image: url(${lixeira});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    width: 16px;
    height: 16px;
    position: absolute;
    border: none;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
`

export const Price = styled.p`
  color: ${theme.color.textSecondary};
  font-weight: ${theme.font.bold};
  font-size: ${theme.font.text};
`
export const Button = styled.button`
  width: 100%;
  margin-top: ${theme.padding.sm};
  padding: 4px 6px;
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
`
