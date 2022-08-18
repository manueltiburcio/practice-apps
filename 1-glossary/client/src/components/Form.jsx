import React from 'react';

const Form = ({ handleSubmit, handleChange}) => (
  <form onSubmit={handleSubmit}>
    <label>Word: <input type="text"  id="wordInput" onChange={handleChange}/></label>
    <label>Definition: <input type="text" id="definitionInput" onChange={handleChange}/></label>
    <input type="submit" value="Submit" />
  </form>
)

export default Form;