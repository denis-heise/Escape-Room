import * as S from './page-title.styled';

function PageTitle ({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return(
    <S.PageTitle {...props}>{children}</S.PageTitle>
  )
}
export default PageTitle;
