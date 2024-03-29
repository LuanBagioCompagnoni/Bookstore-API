import InternalNotFoundError from '../errors/InternalNotFoundError.js';
import { author } from '../models/Author.js';
import book from '../models/Book.js';
import ResponseMessage from '../models/Response.js';

class BookController {

  static async listBooks(req, res, next){
    try {
      const foundBooks = book.find();

      req.result = foundBooks;

      next();
    } catch (error) {
      next(error);
    }
  }

  static async findBookById(req, res, next){
    try {
      const document = await book.findById(req.params.id);
      if(document === null)
        throw new InternalNotFoundError();
      else
        res.status(200).send(new ResponseMessage(true, document));
    } catch (error) {
      next(error);
    }
  }

  static async createBook(req, res, next){
    try {
      const document = await book.create(req.body);
      res.status(201).json(new ResponseMessage(true, document));
    } catch (error) {
      next(error);
    }
  }

  static async updateBook(req, res, next){
    try {
      await book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(new ResponseMessage(true));
    } catch (error) {
      next(error);
    }
  }
    
  static async deleteBook(req, res, next){
    try {
      await book.findByIdAndDelete(req.params.id);
      res.status(200).send(new ResponseMessage(true));
    } catch (error) {
      next(error);
    }
  }

  static async filterBook(req, res, next){
    try {
      const filter = await processFilter(req.query);
      
      if(filter !== null) {
        const foundBooks = book.find(filter).populate('author');
        req.result = foundBooks;
        next();
      }else{
        res.status(200).json(new ResponseMessage(200, []));
      }
    } catch (error) {
      next(error);
    }
  }

}

async function processFilter(params) {
  const {editor, title, minPages, maxPages, authorName} = params;

  let filter= {};

  if(editor) filter.editor = editor;
  if(title) filter.title = {$regex: title, $options: 'i'};

  if(minPages || maxPages) filter.pages = {};
  if(minPages) filter.pages.$gte = minPages;
  if(maxPages) filter.pages.$lte = maxPages;

  if(authorName){
    const foundAuthor = await author.findOne({ name: authorName });

    if(foundAuthor !== null) filter.author = foundAuthor._id;
    else filter = null;
  }
  
  return filter;
}

export default BookController;
