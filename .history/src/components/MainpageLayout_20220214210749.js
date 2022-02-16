/* eslint-disable react/function-component-definition */
import React from 'react'
import Navs from './Navs';

const MainpageLayout = ({children}) => {
  return (
    <div>
      
      <Navs />

      {children}
    </div>
  
  )
}

export default MainpageLayout