import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { headerMenuLinks } from '../../mocks/header';
import { selectLinkMenu } from '../../store/actions';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

function HomePage () {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(selectLinkMenu(headerMenuLinks[0].name));
  }, [dispatch])

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
}

export default HomePage;
