import React from 'react';

const WordList = ( { words, handleDelete } ) => (

  <div>
    <ul>{words.map(word => {
      return (
        <li key={word.id}>
           {word.word}: {word.definition}
           <button id={word.id} onClick={handleDelete}>del</button>
        </li>
      )
    })}</ul>
  </div>

)


export default WordList;