import * as S from './one-quest.styled';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import { Quest } from '../../../../types/types';
import { AppRoute, LevelName } from '../../../../utils/const';

type propsQuestItem = {
  questItemData: Quest;
}

function OneQuest ({questItemData}: propsQuestItem) {
  const imgPath = questItemData.previewImg.startsWith('/')
    ? questItemData.previewImg
    : `/${questItemData.previewImg}`;

  return(
    <S.QuestItem>
      <S.QuestItemLink to={`${AppRoute.Quest}/${questItemData.id}`}>
        <S.Quest>
          <S.QuestImage
            src={`${process.env.PUBLIC_URL}${imgPath}`}
            width="344"
            height="232"
            alt={questItemData.title}
          />

          <S.QuestContent>
            <S.QuestTitle>{questItemData.title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${questItemData.peopleCount[0]}-${questItemData.peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {LevelName[questItemData.level]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
};

export default OneQuest;
