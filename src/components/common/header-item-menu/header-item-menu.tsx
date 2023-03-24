import * as S from './header-item-menu.styled';
import { HeaderMemu } from '../../../types/types';
import { memo } from 'react';

type propsMenuItem = {
  linkItemMenu: HeaderMemu;
  isActiveLinkMenu: boolean;
  onClick: (name: string) => void;
}

function HeaderItemMenu ({linkItemMenu, isActiveLinkMenu, onClick}: propsMenuItem) {
  function selectLink () {
    onClick(linkItemMenu.name);
  };

  return(
    <S.LinkItem>
      <S.Link $isActiveLink={isActiveLinkMenu} to={linkItemMenu.link} onClick={selectLink}>
        {linkItemMenu.name}
      </S.Link>
    </S.LinkItem>
  )
}

export default memo(HeaderItemMenu);
