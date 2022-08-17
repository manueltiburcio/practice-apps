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
        <WordList words={this.state.wordList} />
      </React.Fragment>
    )
  }
}

render(<App />,document.getElementById("root"));
