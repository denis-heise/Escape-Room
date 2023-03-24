export const genreFilters = [
  {
    id: 1,
    name: 'Все квесты',
    select: true,
    genre: 'allQuests'
  },
  {
    id: 2,
    name: 'Приключения',
    select: false,
    genre: 'adventures'
  },
  {
    id: 3,
    name: 'Ужасы',
    select: false,
    genre: 'horror'
  },
  {
    id: 4,
    name: 'Мистика',
    select: false,
    genre: 'mystic'
  },
  {
    id: 5,
    name: 'Детектив',
    select: false,
    genre: 'detective'
  },
  {
    id: 6,
    name: 'Sci-fi',
    select: false,
    genre: 'sci-fi'
  }
] as const;
