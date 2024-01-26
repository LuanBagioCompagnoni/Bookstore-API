import { author } from "../models/Author.js";
import ResponseMessage from "../models/Response.js";

class AuthorController {

    static async listAuthors(req, res){
        try {
            const document = await author.find({});
            res.status(200).send(new ResponseMessage(true, document))
        } catch (error) {
            res.status(500).json(new ResponseMessage(false, null, error.message))
        }
    }

    static async findAuthorById(req, res){
        try {
            const document = await author.findById(req.params.id);
            res.status(200).send(new ResponseMessage(true, document))
        } catch (error) {
            res.status(500).json(new ResponseMessage(false, null, error.message))
        }
    }

    static async createAuthor(req, res){
        try {
            const document = await author.create(req.body);
            res.status(201).json(new ResponseMessage(true, document))
        } catch (error) {
            res.status(500).json(new ResponseMessage(false, null, error.message))
        }
    }

    static async updateAuthor(req, res){
        try {
            await author.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send(new ResponseMessage(true))
        } catch (error) {
            res.status(500).json(new ResponseMessage(false, null, error.message))
        }
    }
    
    static async deleteAuthor(req, res){
        try {
            await author.findByIdAndDelete(req.params.id);
            res.status(200).send(new ResponseMessage(true))
        } catch (error) {
            res.status(500).json(new ResponseMessage(false, null, error.message))
        }
    }
};

export default AuthorController