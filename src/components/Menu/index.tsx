import MediaMatch from "../MediaMatch";
import * as S from "./styles";

import { MenuOutline as MenuIcon } from "@styled-icons/evaicons-outline/MenuOutline";
import { CloseOutline as CloseIcon } from "@styled-icons/evaicons-outline/CloseOutline";

import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium" onClick={() => setIsMenuOpen(true)}>
        <MenuIcon size={18} color="white" aria-label="open menu" />
      </MediaMatch>

      <S.Logo role="img" aria-label="Audiophile" />

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/" type="primary">
            Início
          </S.MenuLink>
          <S.MenuLink href="/oficinas" type="secondary">
            Oficinas
          </S.MenuLink>
          <S.MenuLink href="/acoes" type="tertiary">
            Ações
          </S.MenuLink>
          <S.MenuLink href="/" type="quaternary">
            Expedição Sertão
          </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.MenuLink href="/" type="all">
          Seja Voluntário
        </S.MenuLink>
      </S.MenuGroup>

      <S.MenuToggle aria-hidden={!isMenuOpen} isOpenMenu={isMenuOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="/">Início</S.MenuLink>
          <S.MenuLink href="/oficinas">Oficinas</S.MenuLink>
          <S.MenuLink href="/acoes">Ações</S.MenuLink>
          <S.MenuLink href="/">Expedição Sertão</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>
      {isMenuOpen && <S.Sombra onClick={() => setIsMenuOpen(false)} />}
    </S.Wrapper>
  );
};
export default Menu;
