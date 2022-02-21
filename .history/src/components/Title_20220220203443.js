/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-expressions */
import React ,{memo} from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default memo(Title);
