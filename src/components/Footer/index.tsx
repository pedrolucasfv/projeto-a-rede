import * as S from './styles'
import {FacebookOutline as FacebookIcon} from '@styled-icons/evaicons-outline/FacebookOutline'

const Footer = () => (
  <S.Wrapper>
    <S.Info>
        <S.ContentInfo>
          <S.Heading type='primary'>Localização</S.Heading>
          <S.Text>Rua avenida josé alencar xucrute</S.Text>
        </S.ContentInfo>
        <S.ContentInfo>
          <S.Heading type='tertiary'>Redes Sociais</S.Heading>
          <S.Text>FACEBOOK:  <FacebookIcon size={30}/></S.Text> 
          <S.Text>INSTAGRAM:  <FacebookIcon size={30}/></S.Text> 
          <S.Text>TWITTER:  <FacebookIcon size={30}/></S.Text> 
          <S.Text>LINKEDIN:  <FacebookIcon size={30}/></S.Text> 
        </S.ContentInfo>
        <S.ContentInfo>
          <S.Heading type='quaternary'>Doações</S.Heading>
          <S.Text>PIX: 812481274</S.Text>
          <S.Text>BANCO: Caixa Econômica Federal</S.Text>
          <S.Text>NÚMERO: 16412551 AGÊNCIA: 0007</S.Text>
        </S.ContentInfo>
    </S.Info>
    <S.ContentImage>
      <S.Image src='/img/logo.png' />
    </S.ContentImage>
    <S.Copyright>Pedro Lucas F.V. 2022 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
