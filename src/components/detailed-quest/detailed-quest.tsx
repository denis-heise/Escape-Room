import { FormEvent, useEffect, useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LevelName, OrderKey, TypeName } from '../../utils/const';
import { Order } from '../../types/types';
import { fetchOrder, selectLinkMenu } from '../../store/actions';
import { getQuests } from '../../store/site-data/selectors';
import PageNotFound from '../not-found/not-found';
import { useParams } from 'react-router-dom';
import { headerMenuLinks } from '../../mocks/header';

function DetailedQuest () {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();
  const idPage = params.id;
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const quests = useAppSelector(getQuests);
  const isSelectQuest = quests.find((item) => item.id === Number(idPage));

  useEffect(() => {
    dispatch(selectLinkMenu(headerMenuLinks[0].name));
  }, [dispatch])

  function onBookingBtnClick () {
    setIsBookingModalOpened(true);
  }
  function handleClickClose (){
    setIsBookingModalOpened(false);
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>){
    evt.preventDefault();

    const form = evt.currentTarget;
    const dataForm = new FormData(form);
    const loginData = Object.fromEntries(dataForm);
    const orderData = {
      name: loginData[OrderKey.name],
      peopleCount: Number(loginData[OrderKey.people]),
      phone: loginData[OrderKey.phone],
      isLegal: Boolean(loginData[OrderKey.legal])
    }

    if(orderData.isLegal){
      dispatch(fetchOrder(orderData as Order));
      setIsBookingModalOpened(false);
    }
  }

  return (
    <MainLayout>
        {isSelectQuest ? (
          <S.Main>
            <S.PageImage
              src={`/${isSelectQuest.coverImg}`}
              alt={`Квест ${isSelectQuest.title}`}
              width="1366"
              height="768"
            />
            <S.PageContentWrapper>
              <S.PageHeading>
                <S.PageTitle>{isSelectQuest.title}</S.PageTitle>
                <S.PageSubtitle>{TypeName[isSelectQuest.type]}</S.PageSubtitle>
              </S.PageHeading>

              <S.PageDescription>
                <S.Features>
                  <S.FeaturesItem>
                    <IconClock width="20" height="20" />
                    <S.FeatureTitle>{`${isSelectQuest.duration} мин`}</S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPerson width="19" height="24" />
                    <S.FeatureTitle>{`${isSelectQuest.peopleCount[0]}-${isSelectQuest.peopleCount[1]} чел`}</S.FeatureTitle>
                  </S.FeaturesItem>
                  <S.FeaturesItem>
                    <IconPuzzle width="24" height="24" />
                    <S.FeatureTitle>{LevelName[isSelectQuest.level]}</S.FeatureTitle>
                  </S.FeaturesItem>
                </S.Features>

                <S.QuestDescription>
                  {isSelectQuest.description}
                </S.QuestDescription>

                <S.QuestBookingBtn onClick={onBookingBtnClick}>
                  Забронировать
                </S.QuestBookingBtn>
              </S.PageDescription>
            </S.PageContentWrapper>

            {isBookingModalOpened && <BookingModal onClickClose={handleClickClose} onFormSubmit={handleFormSubmit}/>}
          </S.Main>
        ) :
        <PageNotFound/>
        }
    </MainLayout>
  );
};

export default DetailedQuest;
