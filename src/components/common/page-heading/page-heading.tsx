import * as S from './page-heading.styled';

function PageHeading ({ children, ...props }: React.HTMLAttributes<HTMLElement>)  {
  return(
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );
};

export default PageHeading;
