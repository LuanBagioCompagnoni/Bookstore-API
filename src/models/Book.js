
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, 'Book title is required']},
  price: { type: Number },
  pages: { type: Number },
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: [true, 'Author is required']},
  editor: { type: String, required: [true, 'Editor is required'] }
}, { versionKey: false });

const book = mongoose.model('book', bookSchema);

export default book;