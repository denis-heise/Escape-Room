import { useLocation } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import { AppRoute } from '../../../utils/const';
import { HeaderMenuList } from '../header-menu-list/header-menu-list';
import * as S from './header.styled';

function Header ()  {
  const locationName = useLocation().pathname;

  return(
    <S.StyledHeader $isActiveHeader={locationName === AppRoute.Root}>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Root}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>
        <S.Navigation>
          <HeaderMenuList/>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
}
export default Header;
