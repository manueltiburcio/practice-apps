import React from 'react';
import axios from 'axios';
import Checkout from './Checkout.jsx';
import UserForm from './UserForm.jsx';
import AddressForm from './AddressForm.jsx';
import CreditForm from './CreditForm.jsx';
import ConfirmationPage from './ConfirmationPage.jsx';

const api = '/checkout';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homepage: true,
      userForm: false,
      AddressForm: false,
      creditForm: false,
      purcharse: false,
      nameInput: '',
      emailInput: '',
      passwordInput: '',
      addressInput: '',
      phoneInput: '',
      creditInput: '',
      expiryInput: '',
      cvvInput: '',
      zipCodeInput: '',
      f1List: [],
      f2List: [],
      f3List: [],
    }

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleAddressClick = this.handleAddressClick.bind(this);
    this.handleCreditClick = this.handleCreditClick.bind(this);
    this.handlePurcharse = this.handlePurcharse.bind(this);
  }

  getData() {
    axios.get(api).then(res => {

      this.setState({
        f1List: {
          name: res.data[0].name,
          email: res.data[0].email,
          password: res.data[0].password
        },
        f2List: {
          address: res.data[1].address,
          phone: res.data[1].phone
        },
        f3List: {
          credit: res.data[1].credit,
          expiry: res.data[1].expiry,
          cvv: res.data[1].cvv,
          zipcode: res.data[1].zipcode,
        }
      })
    });
  }

  componentDidMount() {
    this.getData();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleCheckClick(e) {
    e.preventDefault();
    this.setState({
      homepage: false,
      userForm: true,
    })
  }

  handleUserClick(e) {
    e.preventDefault();

    axios.post(api, {
      name: this.state.nameInput,
      email: this.state.emailInput,
      password: this.state.passwordInput
    }).then(res => {
      console.log(res);
    })

    this.setState({
      userForm: false,
      AddressForm: true,
    })
  }

  handleAddressClick(e) {
    e.preventDefault();

    axios.post(api, {
      address: this.state.addressInput,
      phone: this.state.phoneInput,
    }).then(res => {
      console.log(res);
    })

    e.preventDefault();
    this.setState({
      AddressForm: false,
      creditForm: true,
    })
  }

  handleCreditClick(e) {
    e.preventDefault();

    axios.post(api, {
      credit: this.state.creditInput,
      expiry: this.state.expiryInput,
      cvv: this.state.cvvInput,
      zipcode: this.state.zipCodeInput,
    }).then(res => {
      console.log(res);
    })

    this.setState({
      creditForm: false,
      purcharse: true,
    })
  }

  handlePurcharse(e) {
    e.preventDefault();
    this.setState({
      purcharse: false,
      homepage: true,
    })
  }

  render () {

    return (
      <React.Fragment>
      <h1>Checkout app</h1>
      {this.state.homepage && <button onClick={this.handleCheckClick}>Checkout</button>}
      {this.state.userForm && <UserForm handleChange={this.handleChange} handleUserClick={this.handleUserClick}/>}
      {this.state.AddressForm && <AddressForm handleChange={this.handleChange} handleAddressClick={this.handleAddressClick}/>}
      {this.state.creditForm && <CreditForm handleChange={this.handleChange} handleCreditClick={this.handleCreditClick}/>}
      {this.state.purcharse && <ConfirmationPage handleChange={this.handleChange} handlePurcharse={this.handlePurcharse} f1List={this.state.f1List} f2List={this.state.f2List} f3List={this.state.f3List}/>}
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
    </React.Fragment>
    )
  }
}

export default App;