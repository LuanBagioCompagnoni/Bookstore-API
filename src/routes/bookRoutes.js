import express from "express";
import BookController from "../controllers/bookController.js"

const routes = express.Router();

routes.get("/books", await BookController.listBooks)

export default routes;