/* eslint-disable import/named */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState , useCallback } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainpageLayout from '../components/MainpageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery, useWhyDidYouUpdate } from '../misc/custom-hook';
import { SearchInput , RadioInputsWrapper, SearchButtonWrapper} from './Home.styled';
import CustomRadio from '../components/CustomRadio';
// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`)
    .then(result => {
      setResults(result);
    });
  };
  
  const onInputchange = useCallback( ev => {
    setInput(ev.target.value);
  },[setInput ]);
  
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  
  const onRadioChange =useCallback( ev => {
    setSearchOption(ev.target.value);
  },  [ ]);
  
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
        ) : (
          <ActorGrid data={results} />
          );
        }
        return null;
      };
      
      useWhyDidYouUpdate('home' , { onInputchange, onkeydown });
  return (
    <MainpageLayout>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputchange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <RadioInputsWrapper>
        <div> 

           <CustomRadio
           label = "Shows"
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          
            />
            </div>

           <div>


        <CustomRadio
          label = "Actors"
          id="actors-search"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
         />
       
          </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainpageLayout>
  );
};

export default Home;