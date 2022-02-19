/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-expressions */
import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
