import React from 'react';

const UserForm = ({handleUserClick, handleChange}) => (
  <div>
    <h4>User Form</h4>
    <form>
    <label>Name: </label>
    <input type='text' id='nameInput' onChange={handleChange}/>
    <br></br>
    <label>Email: </label>
    <input type='text' id='emailInput' onChange={handleChange}/>
    <br></br>
    <label>Password: </label>
    <input type='text' id='passwordInput' onChange={handleChange}/>
    <button onClick={handleUserClick}>Next</button>
  </form>
  </div>

)


export default UserForm;