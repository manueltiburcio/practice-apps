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

// TODO pending function
let save = (word, definition) => {

   Word.create({
    id: 0,
    word: 'programming',
    definition: 'the process or activity of writing computer programs',
  })
}

// word.find is document query
// const wordEntry = new Word(
//   {
//     id: 3,
//     word: 'whiteboarding',
//     definition: 'process of brainstorming solutions to problems on a blank space',
//   }
// );
// wordEntry.save();

//const words = Word.find();
//console.log(words);
// words.then(response => {
//   console.log('promise completed', response);
// })

module.exports.Word = Word;
module.exports.save = save;
