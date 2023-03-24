import { MainLayout, PageTitle, PageSubtext } from '../common/common';
import * as S from './contacts.styled';
import { useEffect, useRef } from 'react';
import { ICON_ANCHOR, ICON_SIZE, MapSettings, locationQuests, locationMainMarker, LinkName } from '../../utils/const';
import L, {Map, Marker, tileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconLocationUrl from '../../assets/img/icon-location-contacts.svg';
import { useAppDispatch } from '../../hooks';
import { selectLinkMenu } from '../../store/actions';
import { useLocation } from 'react-router-dom';

function Contacts () {
  const mapRef = useRef(null);
  const dispatch = useAppDispatch();
  const locationName = useLocation().pathname;

  useEffect(() => {
    dispatch(selectLinkMenu(LinkName[locationName]));

    if(mapRef.current !== null){
      const newMap = new Map(mapRef.current, {
        center: {
          lat: locationQuests.latitude,
          lng: locationQuests.longitude,
        },
        zoom: locationQuests.zoom,
      });

      const iconLocation = L.icon({
        iconUrl: iconLocationUrl,
        iconSize: ICON_SIZE,
        iconAnchor: ICON_ANCHOR,
      });

      new Marker({
        lat: locationMainMarker.latitude,
        lng: locationMainMarker.longitude,
      },
      {
        icon: iconLocation,
      }).addTo(newMap);

      tileLayer(
        MapSettings.TILE_LAYER,
        {
          attribution: MapSettings.ATTRIBUTION,
        },
      ).addTo(newMap);
    }
  }, [dispatch, locationName, mapRef])

  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  Санкт-Петербург,
                  <br />
                  Набережная реки Карповка, д 5
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="tel:8 (800) 333-55-99">
                  8 (800) 333-55-99
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="mailto:info@escape-room.ru">
                  info@escape-room.ru
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap ref={mapRef}>
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
};

export default Contacts;
