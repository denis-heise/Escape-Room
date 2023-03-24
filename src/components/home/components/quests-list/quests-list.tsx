import { Quest } from '../../../../types/types';
import OneQuest from '../one-quest/one-quest';
import * as S from './quests-list.styled';

type propsQuestList = {
  questListData: Quest[];
}

export function QuestList ({questListData}: propsQuestList) {
  return(
    <S.QuestsList>
      {questListData.map((item) => (
        <OneQuest key={item.id} questItemData={item}/>
      ))}
    </S.QuestsList>
  )
}
