import book from '../models/Book.js';
import ResponseMessage from '../models/Response.js';

class BookController {

  static async listBooks(req, res){
    try {
      const document = await book.find({});
      res.status(200).send(new ResponseMessage(true, document));
    } catch (error) {
      res.status(500).json(new ResponseMessage(false, null, error.message));
    }
  }

  static async findBookById(req, res){
    try {
      const document = await book.findById(req.params.id);
      res.status(200).send(new ResponseMessage(true, document));
    } catch (error) {
      res.status(500).json(new ResponseMessage(false, null, error.message));
    }
  }

  static async createBook(req, res){
    try {
      const document = await book.create(req.body);
      res.status(201).json(new ResponseMessage(true, document));
    } catch (error) {
      res.status(500).json(new ResponseMessage(false, null, error.message));
    }
  }

  static async updateBook(req, res){
    try {
      await book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(new ResponseMessage(true));
    } catch (error) {
      res.status(500).json(new ResponseMessage(false, null, error.message));
    }
  }
    
  static async deleteBook(req, res){
    try {
      await book.findByIdAndDelete(req.params.id);
      res.status(200).send(new ResponseMessage(true));
    } catch (error) {
      res.status(500).json(new ResponseMessage(false, null, error.message));
    }
  }
}

export default BookController;
