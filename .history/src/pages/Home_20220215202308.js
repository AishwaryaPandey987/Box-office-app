/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState} from 'react'
import MainpageLayout from '../components/MainpageLayout';

// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const [input, setInput] =useState(' ');

  const onInputchange = ev =>{
    setInput(ev.target.value);
  };

  const onsearch =() => {
    
  }
  return (
    <MainpageLayout>
     <input type="text" onChange={onInputchange} value={input}/>
      <button type="button" onClick={onsearch} >Search</button>
      </MainpageLayout>
  )
}

export default Home;