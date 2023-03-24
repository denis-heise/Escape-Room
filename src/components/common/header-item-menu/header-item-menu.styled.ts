import styled, { css } from 'styled-components';
import { Link as RouterLink } from '../common';

type PropsLink = {
  $isActiveLink?: boolean
}

const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 49px;
    margin-bottom: 10px;
  }
`;

const Link = styled(RouterLink)<PropsLink>`
  display: block;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};

  ${({$isActiveLink}) =>
    $isActiveLink &&
    css`
      color: ${({ theme }) => theme.color.tangerine};
    `}

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;


export {
  LinkItem,
  Link
};
