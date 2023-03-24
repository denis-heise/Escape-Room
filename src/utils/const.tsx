import { PointExpression } from "leaflet";

export const BASE_URL = 'http://localhost:3001/';
export const REQUEST_TIMEOUT = 5000;
export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
};
export const enum ApiRoute {
  Quests = '/quests',
  Orders = '/orders',
};
export const enum AppRoute {
  Root = '/',
  Quest = '/detailed-quest',
  Contacts = '/contacts',
  NotFound = '/404',
  Other = '/#',
};
export const OrderKey = {
  legal: 'booking-legal',
  name: 'booking-name',
  people: 'booking-people',
  phone: 'booking-phone'
};
export const LevelName: Record<string, string> = {
  easy: 'простой',
  medium: 'средний',
  hard: 'сложный',
}
export const TypeName: Record<string, string> = {
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'adventures': 'Приключения',
  'sci-fi': 'Sci-fi'
};
export const LinkName: Record<string, string> = {
  [AppRoute.Contacts]: 'Контакты',
  [AppRoute.Root]: 'Квесты',
  [AppRoute.Quest]: 'Квесты',
  [AppRoute.Other]: 'Квесты',
  [AppRoute.NotFound]: '',
};
export const locationQuests = {
  latitude: 59.968137,
  longitude: 30.316272,
  zoom: 16
};
export const locationMainMarker = {
  latitude: 59.968347776318716,
  longitude: 30.317520536964434,
};
export const ICON_SIZE: PointExpression | undefined = [48, 60];
export const ICON_ANCHOR: PointExpression | undefined = [30, 48];
export const MapSettings = {
  TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};
