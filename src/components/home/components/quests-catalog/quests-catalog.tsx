import * as S from './quests-catalog.styled';
import React, { useCallback, useEffect } from 'react';
import { QuestList } from '../quests-list/quests-list';
import { useAppDispatch, useAppSelector } from '../../../../hooks/index';
import { getQuests } from '../../../../store/site-data/selectors';
import { selectFilter } from '../../../../store/actions';
import { genreFilters } from '../../../../mocks/main';
import GenreTab from '../genre-tab/genre-tab';
import { getFilterName } from '../../../../store/site-process/selectors';

function QuestsCatalog () {
  const dispatch = useAppDispatch();
  const isSelectFilter = useAppSelector(getFilterName);
  const quests = useAppSelector(getQuests);
  const filteredQuests = isSelectFilter === genreFilters[0].genre ? quests : quests.filter((quest) => quest.type === isSelectFilter);

  useEffect(()=> {
    dispatch(selectFilter(genreFilters[0].genre));
  }, [dispatch])

  const handleClickFilter = useCallback((name: string) => {
    dispatch(selectFilter(name));
  }, [dispatch]);

  return(
    <React.Fragment>
      <S.Tabs>
      {genreFilters.map((item) => (
        <GenreTab key={item.id} genreTabData={item} isActiveFilter={item.genre === isSelectFilter} onClick={handleClickFilter}/>
      ))}
      </S.Tabs>

      <QuestList questListData={filteredQuests}/>

    </React.Fragment>
  )
}

export default QuestsCatalog;
