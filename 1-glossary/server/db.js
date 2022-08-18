const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let wordSchema = mongoose.Schema({
  name: String,
  definition: String,
})

const Word = mongoose.model('Word', wordSchema);

let save = (name, definition) => {
   Word.create({
    name: name,
    definition: definition,
  })
}

let update = (id, name, definition) => {

  const filter = { _id: id };
  const update = { name: name, definition: definition };

  Word.findOneAndUpdate(filter, update, {
    new: true
  }).then(() => {
    console.log('entry updated');
  })

}

let erase = (id) => {
  Word.deleteOne({id}).then(() => {
    console.log('entry deleted');
  })
}

module.exports.Word = Word;
module.exports.save = save;
module.exports.update = update;
module.exports.erase = erase;
