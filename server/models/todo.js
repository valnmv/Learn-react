const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  id: String,
  text: String,
  completed: Boolean,
  cuid: String
});

module.exports = mongoose.model('Todo', TodoSchema);
