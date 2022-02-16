/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState} from 'react'
import MainpageLayout from '../components/MainpageLayout';

// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const [input, setInput] =useState(' ');
  const[results, setresults] = useState(null);

  const onsearch =() => {
   
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
   .then(r=>r.json())
   .then(result =>{
     setresults(result);
     console.log(result);

   });
  };

  const onInputchange = ev => {
    setInput(ev.target.value);

  };

const onKeyDown = ev => {
  if (ev.keyCode===13) {
      onsearch();
  }
};

   



  return (
    <MainpageLayout>
     <input type="text" onChange={onInputchange} onKeyDown={onKeyDown} value={input}/>
      <button type="button" onClick={onsearch} >Search</button>
      </MainpageLayout>
  );

  
};

export default Home;