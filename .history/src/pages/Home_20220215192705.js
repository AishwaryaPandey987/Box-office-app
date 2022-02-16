/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState} from 'react'
import MainpageLayout from '../components/MainpageLayout';

// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const [input, setInput] =useState(' ');

  const onInputchange = ev =>{
    console.log(ev.target.value);
  };
  return (
    <MainpageLayout>
     <input type="text" onChange={onInputchange}/>
      </MainpageLayout>
  )
}

export default Home;