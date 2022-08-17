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
    }

  }

  componentDidMount() {

    axios.get('/glossary')
      .then((response) => {
        console.log('data here: ', response.data.length);

        this.setState({
          wordCount: response.data.length,
          wordList: response.data,
        })

      })


  }

  render() {
    return (
      <React.Fragment>
        <h1>Word Glossary App</h1>
        <ul>Words in db: {this.state.wordCount}</ul>
        <WordList words={this.state.wordList} />
      </React.Fragment>
    )
  }
}

render(<App />,document.getElementById("root"));
