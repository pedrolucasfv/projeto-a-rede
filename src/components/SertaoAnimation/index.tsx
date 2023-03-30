import Image from "next/image";
import * as S from "./styles";
import { useState, useEffect } from "react";
import DevContent from "../DevContent";
const SertaoAnimation = () => {
  const [startMove, setStartMove] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [startDev, setStartDev] = useState([false, false]);
  const [isOpenDev, setIsOpenDev] = useState(false);

  useEffect(() => {
    async function animationLiquid() {
      setTimeout(
        () => setStartMove([true, false, false, false, false, false]),
        1000
      );
      setTimeout(
        () => setStartMove([true, true, false, false, false, false]),
        2000
      );
      setTimeout(
        () => setStartMove([true, true, true, false, false, false]),
        3000
      );
      setTimeout(
        () => setStartMove([true, true, true, true, false, false]),
        4000
      );
      setTimeout(
        () => setStartMove([true, true, true, true, true, false]),
        5000
      );
      setTimeout(
        () => setStartMove([true, true, true, true, true, true]),
        6000
      );
      setTimeout(() => setStartDev([true, false]), 7000);
      setTimeout(() => setStartDev([true, true]), 11000);
    }
    animationLiquid();
  }, []);

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

      <S.ImageCacto position="back" animate={startMove[0]}>
        <Image
          src="/img/cacto-1.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="front" animate={startMove[1]} className="cacto5">
        <Image
          src="/img/cacto-2.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="back" animate={startMove[2]} className="cacto3">
        <Image
          src="/img/cacto-3.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="back" animate={startMove[3]}>
        <Image
          src="/img/cacto-6.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="front" animate={startMove[4]} className="cacto5">
        <Image
          src="/img/cacto-7.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageCacto>
      <S.ImageCacto position="back" animate={startMove[5]} className="cacto6">
        <Image
          src="/img/cacto-8.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageCacto>
      <S.ImageDev
        animate1={startDev[0]}
        animate2={startDev[1]}
        onClick={() => setIsOpenDev(true)}
      >
        <Image
          src="/img/logo-dev.png"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="contain"
        />
      </S.ImageDev>
      {isOpenDev && (<>
        <S.DevContent>
          <DevContent />
        </S.DevContent>
        <S.Sombra onClick={() => setIsOpenDev(false)}/>
        </>
      )}
    </S.Wrapper>
  );
};

export default SertaoAnimation;
