/* eslint-disable react/function-component-definition */
import React from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
const  params  = useParams();

console.log('params' , params);
  return <div>This is show page.</div>;
};

export default Show;
