import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { selectLinkMenu } from '../../store/actions';
import { MainLayout } from '../common/common';
import * as S from './not-found.styled';

function PageNotFound () {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(selectLinkMenu(''));
  }, [dispatch])

  return(
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.NotFoundContainer>
            <S.NotFoundTitle>404 Not Found</S.NotFoundTitle>
            <S.NotFoundLink to="/"> Go to main page </S.NotFoundLink>
          </S.NotFoundContainer>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
};

export default PageNotFound;
