import React from 'react';

const WordList = ( { words } ) => (

  <div>
    <ul>{words.map(word => {
      return (
        <li key={word.id}> {word.word}: {word.definition}</li>
      )
    })}</ul>
  </div>

)


export default WordList;