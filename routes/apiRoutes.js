const axios = require("axios");
const db = require("../models/Books");
const mongoose = require("mongoose")

module.exports = function (app) {
    app.get("/search", (req, res) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.body.book).then(results => {
            res.json(results)
        }).catch(err => console.log(err))
    });

    app.get("/api/books", (req, res) => {
        db.Books.find({}, err, found => {
            if (err) {
                res.json(err)
            } else {
                res.json(found)
            }
        });
    });

    app.post("/api/books", (req, res) => {
        data = req.body
        db.Books.create(data)
            .then(savedBook => console.log(savedBook))
            .catch(err => res.json(err))
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Books.deleteOne({ _id: req.paramas.id })
            .then(deleted => res.json(deleted))
            .catch(err => res.json(err))
    })
}