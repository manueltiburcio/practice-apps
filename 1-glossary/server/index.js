require("dotenv").config();
const express = require("express");
const path = require("path");
const { Word, save, erase } = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// parse our incoming data
app.use(express.json());


// post to db new word entries
app.post(`/${process.env.DB_NAME}`, (req, res) => {
  let name = req.body.name;
  let definition = req.body.definition;

  save(name, definition);

  res.status(201).send('word entry added to the db');
})

// get from db all words
app.get(`/${process.env.DB_NAME}`, (req, res) => {

  Word.find({}).then((data) => {
    res.status(200).send(data);
  })

})

app.delete(`/${process.env.DB_NAME}`, (req, res) => {

  let id = req.body.id;

  erase(id);

  res.status(200).send('Got a DELETE request');
})

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
