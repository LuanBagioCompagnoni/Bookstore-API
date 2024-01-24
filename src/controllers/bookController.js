import book from "../models/Book.js";

class BookController {

    static async listBooks(req, res){
        const books = await book.find({});
        res.status(200).send(books)
    }

    static async createBook(req, res){
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ status: true, message: "Created!", book: newBook})
        } catch (error) {
            res.status(500).json({ status: false, message: error.message})
        }
    }
};

export default BookController