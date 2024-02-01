import express from 'express';
import BookController from '../controllers/bookController.js';
import page from '../middlewares/pagination.js';

const routes = express.Router();

routes.get('/books/filter', await BookController.filterBook, page);
routes.get('/books', await BookController.listBooks, page);
routes.get('/books/:id', await BookController.findBookById);
routes.post('/books', await BookController.createBook);
routes.put('/books/:id', await BookController.updateBook);
routes.delete('/books/:id', await BookController.deleteBook);

export default routes;