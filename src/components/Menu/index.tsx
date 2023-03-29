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
      <MediaMatch greaterThan="medium">
        <S.Logo role="img" aria-label="Audiophile" />
      </MediaMatch>
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
          <S.MenuLink href="/expedicao-sertao" type="quaternary">
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
        <S.MenuNavMobile>
          <S.MenuLinkMobile href="/" type="primary" isOpenMenu={isMenuOpen}>
            Início
          </S.MenuLinkMobile>
          <S.MenuLinkMobile
            href="/oficinas"
            type="secondary"
            isOpenMenu={isMenuOpen}
          >
            Oficinas
          </S.MenuLinkMobile>
          <S.MenuLinkMobile
            href="/acoes"
            type="tertiary"
            isOpenMenu={isMenuOpen}
          >
            Ações
          </S.MenuLinkMobile>
          <S.MenuLinkMobile
            href="/expedicao-sertao"
            type="quaternary"
            isOpenMenu={isMenuOpen}
          >
            Expedição Sertão
          </S.MenuLinkMobile>
        </S.MenuNavMobile>
      </S.MenuToggle>
      {isMenuOpen && <S.Sombra onClick={() => setIsMenuOpen(false)} />}
    </S.Wrapper>
  );
};
export default Menu;
