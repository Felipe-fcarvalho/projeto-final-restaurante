import styled from 'styled-components'
import theme from '../../styles/theme'
import bgPattern from '../../assets/images/bg-pattern.png'

type HeroProps = {
  $imagem?: string
}

export const Hero = styled.div<HeroProps>`
  height: 280px;
  display: flex;
  align-items: flex-end;
  background-image:
    linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.65)),
    url(${({ $imagem }) => $imagem || bgPattern});
  background-size: cover;
  background-position: center;
  position: relative;

  .container {
    padding-bottom: ${theme.padding.xl};
  }

  span {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.titlePage};
    font-weight: ${theme.font.thin};
    opacity: 0.85;
    position: absolute;
    top: 25px;
  }

  h2 {
    color: ${theme.color.textSecondary};
    font-size: ${theme.font.titlePage};
    font-weight: ${theme.font.black};
  }
`
