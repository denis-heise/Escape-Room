import * as S from './footer.styled';

function Footer () {
  return(
    <S.StyledFooter>
      <S.Socials>
        <S.SocialItem>
          <S.SocialLink target="_blank" href="https://www.skype.com/ru/">
            <S.StyledSkypeIcon />
            <S.HiddenText>Скайп</S.HiddenText>
          </S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink target="_blank" href="https://vk.com">
            <S.StyledVkIcon />
            <S.HiddenText>Вконтакте</S.HiddenText>
          </S.SocialLink>
        </S.SocialItem>
      </S.Socials>
    </S.StyledFooter>
  )
}
export default Footer;
