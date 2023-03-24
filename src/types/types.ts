import { store } from '../store/index';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type Quest = {
  "id": number;
  "title": string;
  "description": string;
  "previewImg": string;
  "coverImg": string;
  "type": string;
  "level": "hard";
  "peopleCount": number[];
  "duration": number
}
export type Order = {
  "name": string;
  "peopleCount": number;
  "phone": string;
  "isLegal": boolean
}
export type HeaderMemu = {
  id: number,
  name: string,
  select: boolean,
  link: string
};
export type GenreFilter = {
  id: number,
  name: string,
  select: boolean,
  genre: string
}
