import Image from 'next/image';
import * as S from './styles';
import { useState } from 'react';
import MediaMatch from '../MediaMatch';

export type OficinaContentProps = {
  name: string;
  description: string;
  time?: string;
  available?: boolean;
  image: string[];
  invert?: boolean;
  age?: string;
  secondaryImages?: string[];
};

const Enchente = ({
  name,
  description,
  time,
  image,
  invert = false,
  age,
  secondaryImages,
}: OficinaContentProps) => {
  const [videoIndex, setVideoIndex] = useState(0);
  return (
    <S.Wrapper>
      <S.Content invert={invert}>
        <S.Info>
          <S.Name>{name}</S.Name>
          <S.Description>{description}</S.Description>
          <S.TimeContent>
            {time}
            <br />
            {age}
          </S.TimeContent>
        </S.Info>
        <MediaMatch lessThan="medium">
          <S.ButtonWrapper>
            <S.Button
              onClick={() => {
                videoIndex !== 0
                  ? setVideoIndex(videoIndex - 1)
                  : setVideoIndex(0);
              }}
            >
              ◀ Video Anterior
            </S.Button>
          </S.ButtonWrapper>
        </MediaMatch>
        <S.ImageWrapper>
          <video
            id="video1"
            src={image[videoIndex]}
            controls
            height={'100%'}
            width={'100%'}
          />
          <MediaMatch greaterThan="medium">
            <S.ButtonWrapper>
              <S.Button
                onClick={() => {
                  videoIndex !== 6
                    ? setVideoIndex(videoIndex + 1)
                    : setVideoIndex(0);
                }}
              >
                Proximo Video
              </S.Button>
            </S.ButtonWrapper>
          </MediaMatch>
        </S.ImageWrapper>
        <MediaMatch lessThan="medium">
          <S.ButtonWrapper>
            <S.Button
              onClick={() => {
                videoIndex !== 6
                  ? setVideoIndex(videoIndex + 1)
                  : setVideoIndex(6);
              }}
            >
              Próximo Vídeo ▶
            </S.Button>
          </S.ButtonWrapper>
        </MediaMatch>
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
};

export default Enchente;
