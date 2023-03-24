import styled from 'styled-components';
import { ReactComponent as InstagramIcon } from '../../../assets/img/icon-instagram-hover.svg';
import { ReactComponent as VkIcon } from '../../../assets/img/icon-vk-hover.svg';
import { ReactComponent as SkypeIcon } from '../../../assets/img/icon-skype-hover.svg';

const StyledFooter = styled.footer`
  z-index: 5;
  position: fixed;
  bottom: 24px;
  left: 32px;
`;

const Socials = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  max-width: 500px;
  margin: 0;
  margin-bottom: -7px;
  padding: 0;
  list-style: none;
`;

const SocialItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 7px;
    margin-bottom: 7px;
  }
`;

const SocialLink = styled.a`
  display: block;
`;

const StyledSkypeIcon = styled(SkypeIcon)`
  display: flex;
  filter: grayscale(1);
  stroke: #000;
  stroke-width: 0.5px;
  border-radius: 50%;
  border: 0.5px solid #000;

  circle, path:last-child {
    fill: #C6C4C2;
  }

  &:focus,
  &:hover{
    filter: grayscale(0);
    stroke: none;
    border: none;

    circle, path:last-child {
      fill: #fff;
    }
    path {
      fill: #7ACCFF;
    }
  }
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  display: flex;

  image {
    filter: grayscale(1);
  }
  circle {
    fill: #c6c4c2;
  }
  path {
    fill: #c6c4c2;
  }
  &:focus image,
  &:hover image {
    filter: grayscale(0);
  }
`;

const StyledVkIcon = styled(VkIcon)`
  display: flex;

  circle {
    fill: #c6c4c2;
  }

  path {
    fill: ${({ theme }) => theme.color.nero};
  }

  &:focus circle,
  &:hover circle {
    fill: #4f779f;
  }

  &:focus path,
  &:hover path {
    fill: white;
  }
`;

const HiddenText = styled.span.attrs({ className: 'visually-hidden' })``;

export {
  StyledFooter,
  Socials,
  SocialItem,
  SocialLink,
  StyledSkypeIcon,
  StyledInstagramIcon,
  StyledVkIcon,
  HiddenText,
};
