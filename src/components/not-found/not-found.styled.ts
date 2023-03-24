import styled from 'styled-components';
import contactsBg from '../../assets/img/contacts-bg.jpg';
import { Link } from '../common/common';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;

  background-image: url(${contactsBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-color: ${({ theme }) => theme.color.nero};
  background-size: cover;
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
  margin-top: 136px;
  margin-bottom: 40px;
`;

const NotFoundContainer = styled.div`
  width: 40%;
  margin: 20% auto;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 50px;
  color: #fff;
`;

const NotFoundLink = styled(Link)`
  font-size: 30px;
  color: #dcdcdc;
  text-decoration: none;

  &:hover{
    color: #F2890F;
  }
`;

export {
  Main,
  ContentWrapper,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundLink
};
