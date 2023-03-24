import { ReactComponent as IconAllQuests } from '../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../assets/img/icon-scifi.svg';
import {genreFilters} from '../mocks/main';

export function useIcon (name: string)  {
  switch (name) {
    case genreFilters[0].genre:
      return <IconAllQuests />
    case genreFilters[1].genre:
      return <IconAdventures />
    case genreFilters[2].genre:
      return <IconHorrors />
    case genreFilters[3].genre:
      return <IconMystic />
    case genreFilters[4].genre:
      return <IconDetective />
    case genreFilters[5].genre:
      return <IconScifi />
  }
}
