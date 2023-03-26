import Image from "next/image";
import * as S from "./styles";

export type OficinaContentProps = {
  name: string;
  description: string;
  time?: string;
  available?: boolean;
  image: string;
  invert?: boolean;
  age?: string;
};

const OficinaContent = ({
  name,
  description,
  time,
  image,
  available = true,
  invert = false,
  age
}: OficinaContentProps) => (
  <S.Wrapper invert={invert}>
    <S.Info>
      {!available && <S.Title>Em breve!</S.Title>}
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.TimeContent>{time}<br />{age}</S.TimeContent>
    </S.Info>
    <S.ImageWrapper>
        <Image
          src={image}
          alt='Logo da RF reboque'
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>
  </S.Wrapper>
);

export default OficinaContent;
