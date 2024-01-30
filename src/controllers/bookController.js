import InternalNotFoundError from '../errors/InternalNotFoundError.js';
import book from '../models/Book.js';
import ResponseMessage from '../models/Response.js';

class BookController {

  static async listBooks(req, res, next){
    try {
      const document = await book.find({});
      res.status(200).send(new ResponseMessage(true, document));
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
      const filter = req.query;
      res.status(200).send(filter);
    } catch (error) {
      next(error);
    }
  }

}

export default BookController;
