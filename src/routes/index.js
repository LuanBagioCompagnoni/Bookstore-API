import express from "express";
import books from "./bookRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Test!"))

    app.use(express.json(), books)
};

export default routes;