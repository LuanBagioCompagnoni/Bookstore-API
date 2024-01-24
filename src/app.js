import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);
const connection = await connectDatabase()

connection.on("error", (error) =>{
    console.error("Connection error", error)
})

connection.once("open", () => {
    console.log("Connection with database sucefully")
})


// app.get("/books/:id", (req, res) => {
//     res.status(200).json(books[getBook(req.params.id)])
// })

// app.put("/books/:id", (req, res) => {
//     books[getBook(req.params.id)].title = req.body.title
//     res.status(200).send(true)
// })

// app.delete("/books/:id", (req, res) => {
//     books.splice(getBook(req.params.id), 1)
//     res.status(200).send(true)
// })

// app.post("/books", (req, res) => {
//     books.push(req.body);
//     res.status(201).send(true)
// })


export default app