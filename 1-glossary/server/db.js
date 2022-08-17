const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let wordSchema = mongoose.Schema({
  id: Number,
  word: String,
  definition: String,
})


const Word = mongoose.model('Word', wordSchema);

let save = (word, definition) => {
}

module.exports.Word = Word;
module.exports.save = save;
