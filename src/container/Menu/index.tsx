import CardMenu from '../../components/CardMenu'
import sushi from '../../assets/images/sushi.png'
import macarronada from '../../assets/images/macarronada.png'
import * as S from './styles'

const Menu = () => (
  <>
    <S.List>
      <CardMenu
        image={sushi}
        title="Hioki Sushi"
        rate={4.9}
        infos={['Destaque da semana', 'Japonesa']}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida."
      />
      <CardMenu
        image={macarronada}
        title="Hioki Sushi"
        rate={4.9}
        infos={['Destaque da semana', 'Japonesa']}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida."
      />
      <CardMenu
        image={macarronada}
        title="Hioki Sushi"
        rate={4.9}
        infos={['Destaque da semana', 'Japonesa']}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida."
      />
      <CardMenu
        image={macarronada}
        title="Hioki Sushi"
        rate={4.9}
        infos={['Destaque da semana', 'Japonesa']}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida."
      />
      <CardMenu
        image={macarronada}
        title="Hioki Sushi"
        rate={4.9}
        infos={['Destaque da semana', 'Japonesa']}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida."
      />
      <CardMenu
        image={macarronada}
        title="Hioki Sushi"
        rate={4.9}
        infos={['Destaque da semana', 'Japonesa']}
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida."
      />
    </S.List>
  </>
)

export default Menu
