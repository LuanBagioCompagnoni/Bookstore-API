import express from "express";
import connectDatabase from "./config/dbconnect.js";
import book from "./models/Book.js";

const app = express();
app.use(express.json());
const connection = await connectDatabase()

connection.on("error", (error) =>{
    console.error("Connection error", error)
})

connection.once("open", () => {
    console.log("Connection with database sucefully")
})

app.get("/", async (req, res) => {
    const bookList = await book.find({});
    res.status(200).send(bookList)
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.get("/books/:id", (req, res) => {
    res.status(200).json(books[getBook(req.params.id)])
})

app.put("/books/:id", (req, res) => {
    books[getBook(req.params.id)].title = req.body.title
    res.status(200).send(true)
})

app.delete("/books/:id", (req, res) => {
    books.splice(getBook(req.params.id), 1)
    res.status(200).send(true)
})

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send(true)
})


export default app