import * as S from "./styles";

export type AcaoContentProps = {
  name: string;
  description: string;
  image: string;
  invert?: boolean
  slug: string
  buttonColor?: "primary" | "secondary" | "tertiary" | "quaternary"
};

const AcaoContent = ({
  name,
  description,
  slug,
  image,
  invert = false,
  buttonColor = "primary"
}: AcaoContentProps) => (
  <S.Wrapper invert={invert}>
    <S.Info>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.Button color={buttonColor}>Clique aqui visualizar a página da ação!</S.Button>
    </S.Info>
    <S.ImageBox>
      <S.Image src={image} />
    </S.ImageBox>
  </S.Wrapper>
);

export default AcaoContent;
