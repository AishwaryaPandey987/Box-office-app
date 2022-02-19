/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */
import React from 'react'
import Showcard from './Showcard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ShowGrid = ({data}) => {
  return (
    <div>
      
   {data.map( ( { show }) =>(
      <Showcard
       key={show.id}
        id={show.id} 
        name ={show.name}
        image = {show.image ? show.image.medium : IMAGE_NOT_FOUND}
    />      
    ) )}

    </div>
  );
};

export default ShowGrid;