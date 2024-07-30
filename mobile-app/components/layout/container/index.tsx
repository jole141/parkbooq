import React, { FC, PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
import { OuterContainer, Wrapper } from './styles';

const Container: FC<PropsWithChildren<ViewProps>> = ({ children, ...props }) => {
  return (
    <OuterContainer {...props}>
      <Wrapper>{children}</Wrapper>
    </OuterContainer>
  );
};

export default Container;
