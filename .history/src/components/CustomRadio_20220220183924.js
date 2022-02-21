/* eslint-disable react/function-component-definition */
import React from 'react'

const CustomRadio = ({ label, ...restProps}) => {
  return (
    <label htmlFor={restProps.id}>
    Shows
    <input { ...restProps} type ="radio" />
  </label>
  )
}

export default CustomRadio;