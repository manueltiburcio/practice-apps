require("dotenv").config();
const express = require("express");
const path = require("path");
const { Word, save } = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


// post to db new words
app.post(`/${process.env.DB_NAME}`, (req, res) => {
  res.status(201).send('post working');
})

// get from db all words
app.get(`/${process.env.DB_NAME}`, (req, res) => {

  Word.find({}).then((data) => {
    res.status(200).send(data);
  })

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
