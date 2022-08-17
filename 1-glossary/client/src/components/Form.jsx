import React from 'react';

{/* <form onSubmit={this.handleSubmit}>
          <label>
            Word:
            <input type="text" value={this.state.wordInput} onChange={this.handleChange} id="wordInput"/>
          </label>
          <label>
            Definition:
            <input type="text" value={this.state.definitionInput} onChange={this.handleChange} id="definitionInput"/>
          </label>
          <input type="submit" value="Submit" />
        </form> */}

const Form = ({ handleSubmit, handleChange}) => (
  <form onSubmit={handleSubmit}>
    <label>Word: <input type="text"  id="wordInput" onChange={handleChange}/></label>
    <label>Definition: <input type="text" id="definitionInput" onChange={handleChange}/></label>
    <input type="submit" value="Submit" />
  </form>
)

export default Form;