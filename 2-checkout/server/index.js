require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.post(`/${process.env.DB_NAME}`, (req, res) => {

  // f1
  if (req.body.name) {
    db.query(`UPDATE f1 SET name='${req.body.name}', email='${req.body.email}', password='${req.body.password}' WHERE id=1`, (err, rows, fields) => {
      if (err) throw err

      res.status(201).send(rows);
    });
  }

  // f2
  if (req.body.address) {
    db.query(`UPDATE f2 SET address='${req.body.address}', phone='${req.body.phone}' WHERE id=1`, (err, rows, fields) => {
      if (err) throw err

      res.status(201).send(rows);
    });
  }

  // f3
  if (req.body.credit) {
    db.query(`UPDATE f3 SET credit='${req.body.credit}', expiry='${req.body.expiry}', cvv='${req.body.cvv}', zipcode='${req.body.zipcode}' WHERE id=1`, (err, rows, fields) => {
      if (err) throw err

      res.status(201).send(rows);
    });
  }

})


app.get(`/${process.env.DB_NAME}`, (req, res) => {

  db.query('SELECT * from f1, f2, f3', (err, rows, fields) => {
    if (err) throw err

    res.status(200).send(rows);
  });


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
