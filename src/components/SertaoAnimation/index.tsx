import Image from "next/image";
import { useState } from "react";
import DevContent from "../DevContent";
import * as S from "./styles";
const SertaoAnimation = () => {

  const [isOpenDev, setIsOpenDev] = useState(false);

  return (
    <S.Wrapper>
      <S.ImageKombi>
        <Image
          src="/img/kombi-expedicao-sertao.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageKombi>

      <S.ImageCacto position="back" animateDelay={0}>
        <Image
          src="/img/cacto-1.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="front" animateDelay={1} className="cacto5">
        <Image
          src="/img/cacto-2.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="back" animateDelay={2} className="cacto3">
        <Image
          src="/img/cacto-3.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="back" animateDelay={3}>
        <Image
          src="/img/cacto-6.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="front" animateDelay={4} className="cacto5">
        <Image
          src="/img/cacto-7.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="back" animateDelay={5} className="cacto6">
        <Image
          src="/img/cacto-8.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageCacto>
      <S.ImageDev
        onClick={() => setIsOpenDev(true)}
      >
        <Image
          src="/img/logo-dev.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageDev>
      {isOpenDev && (
        <>
          <S.DevContent>
            <DevContent />
          </S.DevContent>
          <S.Sombra onClick={() => setIsOpenDev(false)} />
        </>
      )}
    </S.Wrapper>
  );
};

export default SertaoAnimation;
