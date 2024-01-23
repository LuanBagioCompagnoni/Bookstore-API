import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Test express")
})

const books = [
    {
        id: 1,
        title: "Oppenheimer"
    },
    {
        id: 2,
        title: "How to make friends"
    }
]

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

function getBook(id){
    return books.findIndex(book => {
        return book.id === Number(id)
    })
}

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