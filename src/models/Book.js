
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, 'Book title is required']},
  price: { type: Number },
  pages: { type: Number, min: [10, 'The number of pages must be between 10 and 5000'], max: [5000, 'The number of pages must be between 10 and 5000']  },
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: [true, 'Author is required']},
  editor: { type: String, required: [true, 'Editor is required'], enum: {values: ['Super Editor', 'Editor One'], message: 'The editor {VALUE} is not a valid value'} }
}, { versionKey: false });

const book = mongoose.model('book', bookSchema);

export default book;