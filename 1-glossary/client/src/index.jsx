import React from "react";
import { render } from "react-dom";
import Search from './components/Search.jsx';
import Form from './components/Form.jsx';
import WordList from './components/WordList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wordsCount: 0,
      wordList: [],
      currentList: [],
      searchInput: '',
      wordInput: '',
      definitionInput: '',
    }

    this.handleHome = this.handleHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  getData() {
    axios.get('/glossary')
    .then((response) => {
      this.setState({
        wordsCount: response.data.length,
        wordList: response.data,
        currentList: response.data,
      })
    })
  }

  componentDidMount() {
    this.getData();
  }

  handleHome() {
    this.setState({
      currentList: this.state.wordList,
    })
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSearch(e) {
    e.preventDefault();
    if (this.state.searchInput === '') {
      alert('please insert a word to search');
    }

    let wasFound = false;
    let currentSearch = this.state.searchInput;

    for (let i = 0; i < this.state.currentList.length; i++) {
      if (this.state.currentList[i].name.toLowerCase().includes(currentSearch.toLowerCase())) {
        console.log(this.state.currentList[i]);
         this.setState({
           currentList: [this.state.currentList[i]],
         })

        wasFound = true;
      }
    }

    if (!wasFound) {
      alert('word was not found :(');
    }

  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('/glossary', {
      name: this.state.wordInput,
      definition: this.state.definitionInput,
    }).then(response => {
      console.log(response);
    }).then(() => {
      this.getData();
    })


  }

  handleDelete(e){
    let id = e.target.id;

    axios.delete('/glossary/', {
      data: {id: id},
    }).then(() => {
      console.log('deleted req sent');
    }).then(() => {
      this.getData();
    })


  }

  handleEdit(e){
    e.preventDefault();
    console.log(e.target.id);

    axios.put('/glossary', {
      _id: e.target.id,
      name: this.state.wordInput,
      definition: this.state.definitionInput,
    }).then(response => {
      console.log(response);
    }).then(() => {
      this.getData();
    })


  }

  render() {
    return (
      <React.Fragment>
        <h1 className="header" onClick={this.handleHome}>Glossary App</h1>
        <Search handleSearch={this.handleSearch} handleChange={this.handleChange}/>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <ul>Words in db: {this.state.wordsCount}</ul>
        <WordList words={this.state.currentList}
        handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
      </React.Fragment>
    )
  }
}

render(<App />,document.getElementById("root"));
