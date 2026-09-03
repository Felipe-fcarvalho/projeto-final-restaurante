import * as S from './styles'

import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'

const Footer = () => (
  <>
    <S.Container>
      <S.Logo to="/" />
      <S.Social>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
      </S.Social>
      <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Text>
    </S.Container>
  </>
)

export default Footer
