import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  id: String,
  text: String
});

module.exports = mongoose.model('Todo', TodoSchema);
