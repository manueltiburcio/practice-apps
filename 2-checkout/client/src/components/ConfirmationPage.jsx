import React from 'react';

const ConfirmationPage = ({handlePurcharse, f1List, f2List, f3List}) => (
  <div>
    <h3>Confirmation Page</h3>
    <h4>User</h4>
    <p>Name:  {f1List.name}</p>
    <p>Email: {f1List.email}</p>
    <p>Password: {f1List.password}</p>
    <h4>Address and phone</h4>
    <p>Address: {f2List.address}</p>
    <p>Phone: {f2List.phone}</p>
    <h4>Credit card info</h4>
    <p>CreditCard Number: {f3List.credit}</p>
    <p>CVV: {f3List.cvv}</p>
    <p>Expiry Date: {f3List.expiry}</p>
    <p>Zip Code: {f3List.zipcode}</p>
    <button onClick={handlePurcharse}>Purcharse</button>
  </div>
)


export default ConfirmationPage;