import React from 'react';

const AddressForm = ({handleAddressClick, handleChange}) => (
  <div>
    <h4>Address Form</h4>
  <form >
    <label>Address: </label>
    <input type='text' id='addressInput' onChange={handleChange} />
    <br></br>
    <label>Phone number: </label>
    <input type='text' id='phoneInput' onChange={handleChange} />
    <button onClick={handleAddressClick}>Next</button>
  </form>
  </div>
)

export default AddressForm;

