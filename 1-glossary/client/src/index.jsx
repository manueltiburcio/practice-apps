import React from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import Form from './components/Form.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wordsCount: 0,
      wordList: [],
      wordInput: '',
      definitionInput: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount() {
    axios.get('/glossary')
      .then((response) => {
        this.setState({
          wordCount: response.data.length,
          wordList: response.data,
        })
      })
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value,
    })

  }

  handleSubmit(e) {
    e.preventDefault();
    alert('something was submitted???');

    axios.post('/glossary', {
      name: this.state.wordInput,
      definition: this.state.definitionInput,
    }).then(response => {
      console.log(response);
    })
  }

  handleDelete(e){
    let id = e.target.id;

    axios.delete('/glossary/', {
      data: {id: id},
    }).then(() => {
      console.log('deleted req sent');
    })

  }

  render() {
    return (
      <React.Fragment>
        <h1>Glossary App</h1>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} wordInput={this.state.wordInput} definitionInput={this.state.definitionInput}/>
        <ul>Words in db: {this.state.wordsCount}</ul>
        <WordList words={this.state.wordList}
        handleDelete={this.handleDelete}/>
      </React.Fragment>
    )
  }
}

render(<App />,document.getElementById("root"));
