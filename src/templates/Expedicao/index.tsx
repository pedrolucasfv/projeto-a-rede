import Divider from "../../components/Divider";
import Menu from "../../components/Menu";

import * as S from "./styles";

export type ExpedicaoProps = {
  name: string;
};

export const Expedicao = () => {
  return (
    <S.Wrapper>
      <Menu />
      <Divider title="Expedição Sertão" color="quaternary" />
    </S.Wrapper>
  );
};

export default Expedicao;