import * as S from "./styles";

export type AcaoContentProps = {
  name: string;
  description: string;
  image: string;
  invert?: boolean;
};

const AcaoContent = ({
  name,
  description,
  image,
  invert = false,
}: AcaoContentProps) => (
  <S.Wrapper invert={invert}>
    <S.Info>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.Info>
    <S.ImageBox>
      <S.Image src={image} />
    </S.ImageBox>
  </S.Wrapper>
);

export default AcaoContent;
