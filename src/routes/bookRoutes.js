import express from "express";
import BookController from "../controllers/bookController.js"

const routes = express.Router();

routes.get("/books", await BookController.listBooks)
routes.get("/books/search", await BookController.getBooksFromEditor)
routes.get("/books/:id", await BookController.findBookById)
routes.post("/books", await BookController.createBook)
routes.put("/books/:id", await BookController.updateBook)
routes.delete("/books/:id", await BookController.deleteBook)

export default routes;