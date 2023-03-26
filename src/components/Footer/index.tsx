import * as S from "./styles";
import { FacebookSquare as FacebookIcon } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Instagram as InstagramIcon } from "@styled-icons/boxicons-logos/Instagram";
type FooterProps = {
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
};

const Footer = ({ color = "primary" }: FooterProps) => (
  <S.Wrapper color={color}>
    <S.Info>
      <S.ContentInfo>
        <S.Heading color="primary">Localização</S.Heading>
        <S.Text>
          <span>Rua:</span> Demerval Teixeira da Fonseca
        </S.Text>
        <S.Text>
          <span>Número:</span> 251
        </S.Text>
        <S.Text>
          <span>Cidade:</span> Bom Jesus do Itabapoana
        </S.Text>
        <S.Text>
          <span>Cep:</span> 28360-000
        </S.Text>
      </S.ContentInfo>
      <S.ContentInfo>
        <S.Heading color="tertiary">Redes Sociais</S.Heading>
        <S.Subtitle className="primeiroItem">Projeto A Rede</S.Subtitle>
        <S.SocialNetwork>
          <FacebookIcon size={50} />
          <InstagramIcon size={50} />
        </S.SocialNetwork>
        <S.Subtitle>Expedição Sertão</S.Subtitle>
        <S.SocialNetwork>
          <FacebookIcon size={50} />
          <InstagramIcon size={50} />
        </S.SocialNetwork>
      </S.ContentInfo>
      <S.ContentInfo>
        <S.Heading color="quaternary">Doações</S.Heading>
        <S.Text>PIX: 812481274</S.Text>
        <S.Text>BANCO: Caixa Econômica Federal</S.Text>
        <S.Text>NÚMERO: 16412551 AGÊNCIA: 0007</S.Text>
      </S.ContentInfo>
    </S.Info>
    <S.ContentImage>
      <S.Image src="/img/logo.png" />
    </S.ContentImage>
    <S.CopyrightContent>
      <S.Copyright>Projeto A Rede 2023 © Todos direitos reservados</S.Copyright>
      <S.Copyright>
        <span>Feito por Pedro Lucas Ferreira Vieira</span>
      </S.Copyright>
    </S.CopyrightContent>
  </S.Wrapper>
);

export default Footer;
