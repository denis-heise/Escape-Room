import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { headerMenuLinks } from '../../../mocks/header';
import { selectLinkMenu } from '../../../store/actions';
import { getLinkMenu } from '../../../store/site-process/selectors';
import HeaderItemMenu from '../header-item-menu/header-item-menu';
import * as S from './header-menu-list.styled';

export function HeaderMenuList () {
  const dispatch = useAppDispatch();
  const isSelectItemMemu = useAppSelector(getLinkMenu);

  const handleClickMenuLink = useCallback((name: string) => {
    dispatch(selectLinkMenu(name));
  }, [dispatch]);

  return(
    <S.Links>
      {headerMenuLinks.map((item) => (
        <HeaderItemMenu key={item.id} linkItemMenu={item} isActiveLinkMenu={item.name === isSelectItemMemu} onClick={handleClickMenuLink}/>
      ))}
    </S.Links>
  )
}
