import InternalNotFoundError from '../errors/InternalNotFoundError.js';
import { author } from '../models/Author.js';
import ResponseMessage from '../models/Response.js';

class AuthorController {

  static async listAuthors(req, res, next){
    try {
      const document = await author.find({});
      res.status(200).send(new ResponseMessage(true, document));
    } catch (error) {
      next(error);
    }
  }

  static async findAuthorById(req, res, next){
    try {
      const document = await author.findById(req.params.id);
      if(document === null)
        throw new InternalNotFoundError();
      else
        res.status(200).send(new ResponseMessage(true, document));
    } catch (error) {
      next(error);
    }
  }

  static async createAuthor(req, res, next){
    try {
      const document = await author.create(req.body);
      res.status(201).json(new ResponseMessage(true, document));
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor(req, res, next){
    try {
      await author.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(new ResponseMessage(true));
    } catch (error) {
      next(error);
    }
  }
    
  static async deleteAuthor(req, res, next){
    try {
      await author.findByIdAndDelete(req.params.id);
      res.status(200).send(new ResponseMessage(true));
    } catch (error) {
      next(error);
    }
  }
}

export default AuthorController;