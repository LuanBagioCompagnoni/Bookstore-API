import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: [true, 'Name author is required']},
  nationality: { type: String },
});

const author = mongoose.model('authors', authorSchema);

export { author, authorSchema };