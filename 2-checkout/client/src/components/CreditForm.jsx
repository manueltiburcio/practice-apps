import React from 'react';


const CreditForm = ({ handleCreditClick, handleChange }) => (
  <form>
    <label>Credit Card Number: </label>
    <input type='text' id='creditInput' onChange={handleChange} />
    <br></br>
    <label>Expiry Date: </label>
    <input type='text' id='expiryInput' onChange={handleChange} />
    <br></br>
    <label>CVV: </label>
    <input type='text' id='cvvInput' onChange={handleChange} />
    <br></br>
    <label>Billing zip code: </label>
    <input type='text' id='zipCodeInput' onChange={handleChange} />
    <button onClick={handleCreditClick}>Next</button>
  </form>
)

export default CreditForm;