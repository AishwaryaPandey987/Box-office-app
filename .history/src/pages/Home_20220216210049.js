/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainpageLayout from '../components/MainpageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const [input, setInput] = useState(' ');
  const [results, setresults ] = useState('null');
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption ==="shows";

  const onsearch = () => {
    apiGet(`search/shows?q=${input}`).then(result => {
      setresults(result);
    });
  };

  const onInputchange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onsearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  console.log(searchOption);
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show  ? (<ShowGrid data={results}/>
       ) :(
       <ActorGrid data={results}/>
       );
    }
    return null;
  };

  return (
    <MainpageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputchange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked= {isShowsSearch}
            onchange={onRadioChange}
            
          />
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked= {!isShowsSearch}
            onchange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onsearch}>
        Search
      </button>
      {renderResults()}
    </MainpageLayout>
  );
};

export default Home;
