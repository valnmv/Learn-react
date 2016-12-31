/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  id: String,
  text: String,
  completed: Boolean
});

export default mongoose.model('Todo', TodoSchema);
