import Image from "next/image";
import * as S from "./styles";

export type OficinaCardProps = {
  name: string;
  description: string;
  image: string;
};

const OficinaCard = ({
  name,
  description,
  image,
}: OficinaCardProps) => (
  <S.Wrapper>
      <S.Info>
        <S.Title>Em breve!</S.Title>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Info>
      <S.ImageWrapper>
        <Image
          src={image}
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>
  </S.Wrapper>
);

export default OficinaCard;
