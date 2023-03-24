import React from 'react';
import * as S from './container.styled';

function Container ({ children, ...props }: React.HTMLAttributes<HTMLElement>)  {
  return(
    <S.Container {...props}>{children}</S.Container>
  )
}

export default Container;
