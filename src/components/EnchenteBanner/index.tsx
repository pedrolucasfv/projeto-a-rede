import * as S from './styles';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const EnchenteBanner = () => {
  const [fallLiquid, setFallLiquid] = useState(false);
  const [animateLiquid, setAnimateLiquid] = useState(false);

  useEffect(() => {
    async function animationLiquid() {
      setTimeout(() => setFallLiquid(true), 1000);
      setTimeout(() => setAnimateLiquid(true), 2100);
    }
    animationLiquid();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('Texto copiado!');
      console.log('Texto copiado para a área de transferência');
    } catch (err) {
      console.log('Falha ao copiar o texto', err);
    }
  };

  return (
    <S.Wrapper>
      <S.RightContent>
        <S.ImageWrapper>
          <Image
            src="/img/banner-enchente.jpg"
            alt="Logo da RF reboque"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '20px' }}
          />
        </S.ImageWrapper>
      </S.RightContent>
      <S.LeftContent>
        <S.Text>
          A comunidade de Bom Jesus enfrenta tempos difíceis devido às
          enchentes. Sua ajuda é urgente e valiosa. Contribua com alimentos,
          produtos de limpeza e higiene, ou qualquer quantia via{' '}
          <span style={{ fontWeight: '700', color: '#0099db' }}>
            PIX: 40 291 675 0001 51
          </span>
          . Siga{' '}
          <a href="https://www.instagram.com/projetoarede/">@projetorede</a> e
          veja o impacto da sua solidariedade. Juntos, podemos trazer alívio e
          esperança. #SOSBomJesusdoItabapoana
          <S.ButtonWrapper>
            <S.Button
              onClick={() => {
                copyToClipboard().then(() =>
                  alert('Texto copiado para a área de transferência')
                );
              }}
            >
              Pressione aqui para copiar chave PIX
            </S.Button>
          </S.ButtonWrapper>
        </S.Text>
      </S.LeftContent>
    </S.Wrapper>
  );
};
export default EnchenteBanner;
