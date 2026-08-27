import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.bgCardPrimary};
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 217px;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BadgeList = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Badge = styled.span`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.textWhite};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 8px;
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Rate = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`

export const Star = styled.img`
  font-size: 18px;
  color: ${({ theme }) => theme.color.accentRating};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 16px;
`

export const Button = styled.button`
  align-self: flex-start;
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.btnSecondary};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
`
