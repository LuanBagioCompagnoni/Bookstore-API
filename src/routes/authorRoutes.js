import express from "express";
import AuthorController from "../controllers/authorController.js"

const routes = express.Router();

routes.get("/authors", await AuthorController.listAuthors)
routes.get("/authors/:id", await AuthorController.findAuthorById)
routes.post("/authors", await AuthorController.createAuthor)
routes.put("/authors/:id", await AuthorController.updateAuthor)
routes.delete("/authors/:id", await AuthorController.deleteAuthor)

export default routes;