import React from 'react';

const WordList = ( { words, handleDelete } ) => (

  <div>
    <ul>{words.map(word => {
      return (
        <li key={word._id}>
           {word.name}: {word.definition}
           <button id={word._id} onClick={handleDelete}>del</button>
        </li>
      )
    })}</ul>
  </div>

)


export default WordList;