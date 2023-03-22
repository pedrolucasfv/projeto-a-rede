import * as S from "./styles";

export type OficinaContentProps = {
  name: string;
  description: string;
  time?: string;
  available?: boolean;
  image: string;
  invert?: boolean
};

const OficinaContent = ({
  name,
  description,
  time,
  image,
  available = true,
  invert = false
}: OficinaContentProps) => (
  <S.Wrapper invert={invert}>
    <S.Info>
      {!available && <S.Title>Em breve!</S.Title>}
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.TimeContent>{time}</S.TimeContent>
    </S.Info>
    <S.ImageBox>
      <S.Image src={image} />
    </S.ImageBox>
  </S.Wrapper>
);

export default OficinaContent;
