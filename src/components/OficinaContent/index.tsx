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
  secondaryImages?: string[];
};

const OficinaContent = ({
  name,
  description,
  time,
  image,
  invert = false,
  age,
  secondaryImages,
}: OficinaContentProps) => (
  <S.Wrapper>
    <S.Content  invert={invert}>
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
        <S.TimeContent>
          {time}
          <br />
          {age}
        </S.TimeContent>
      </S.Info>
      <S.ImageWrapper>
        <Image
          src={image}
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>
    </S.Content>
    {secondaryImages && (
      <S.SecondaryImageContent>
        {secondaryImages.map((image, index) => (
          <S.SecondaryImage key={index}>
            <Image
              src={image}
              alt="Logo da RF reboque"
              layout="fill"
              objectFit="cover"
            />
          </S.SecondaryImage>
        ))}
      </S.SecondaryImageContent>
    )}
  </S.Wrapper>
);

export default OficinaContent;
