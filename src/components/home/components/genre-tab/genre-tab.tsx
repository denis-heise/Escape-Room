import * as S from './genre-tab.styled';
import { GenreFilter } from '../../../../types/types';
import { memo } from 'react';
import { useIcon } from '../../../../hooks/use-icon';

type propsGenreTab = {
  genreTabData: GenreFilter;
  isActiveFilter: boolean;
  onClick: (name: string) => void;
}

function GenreTab ({genreTabData, isActiveFilter, onClick}: propsGenreTab) {
  function selectTab () {
    onClick(genreTabData.genre);
  };

  return(
    <S.TabItem>
      <S.TabBtn isActive={isActiveFilter} onClick={selectTab}>
        {useIcon(genreTabData.genre)}
        <S.TabTitle>{genreTabData.name}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  )
}

export default memo(GenreTab);
