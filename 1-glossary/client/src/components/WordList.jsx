import React from 'react';

const WordList = ( { words } ) => (

  <div>
    <ul>{words.map(word => {
      return (
        <div key={word.id}> {word.word}: {word.definition}</div>
      )
    })}</ul>
  </div>

)


export default WordList;