import React from 'react';

const WordList = ( { words, handleDelete, handleEdit } ) => (

  <div>
    <ul>{words.map(word => {
      return (
        <li key={word._id}>
           {word.name}: {word.definition}
           <button id={word._id} onClick={handleEdit}>edit</button>
           <button id={word._id} onClick={handleDelete}>delete</button>
        </li>
      )
    })}</ul>
  </div>

)


export default WordList;