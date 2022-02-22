/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState} from 'react'
import MainpageLayout from '../components/MainpageLayout';
import { apiGet } from '../misc/config';
// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const [input, setInput] =useState(' ');
  const[results, setresults] = useState(null);

  const onsearch =() => {
   
    apiGet(`search/shows?q=${input}`).then(result => {
      setresults(result);
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

const renderResults =() => {

  if( results && results.length === 0){
     return <div>No results</div>;
  }
  if(results && results.length>0 ) {
   return(
     <div>
        {results.map( item =>(
          <div key= {item.show.id}>{item.show.name}</div>
        ))}
     </div>
   );
  }
  return null;
}
   



  return (
    <MainpageLayout>
     <input type="text" onChange={onInputchange} onKeyDown={onKeyDown} value={input}/>
      <button type="button" onClick={onsearch} >
        Search</button>
        {renderResults()}
      </MainpageLayout>
  );

  
};

export default Home;