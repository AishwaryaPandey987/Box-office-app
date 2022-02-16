/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState} from 'react'
import MainpageLayout from '../components/MainpageLayout';

// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const [input, setInput] =useState(' ');

  const onsearch =() => {
   
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
   .then(r=>r.json())
   .then(result =>{
     console.log(result);
   })

  const onInputchange = ev =>{
    setInput(ev.target.value);
  };

  const onKeyDown =(ev) => {
       
    if(ev.keyCode===13) {
      onsearch();
    }
  } }

  return (
    <MainpageLayout>
     <input type="text" onChange={onInputchange} onKeyDown={onkeydown} value={input}/>
      <button type="button" onClick={onsearch} >Search</button>
      </MainpageLayout>
  )
}

export default Home;