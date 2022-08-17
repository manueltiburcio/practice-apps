import React from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wordCount: 0,
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Word:
            <input type="text" value={this.state.wordInput} onChange={this.handleChange} id="wordInput"/>
          </label>
          <label>
            definition:
            <input type="text" value={this.state.definitionInput} onChange={this.handleChange} id="definitionInput"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>Words in db: {this.state.wordCount}</ul>
        <WordList words={this.state.wordList}
        handleDelete={this.handleDelete}/>
      </React.Fragment>
    )
  }
}

render(<App />,document.getElementById("root"));
