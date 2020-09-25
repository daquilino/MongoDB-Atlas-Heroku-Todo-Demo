const Router = require('express').Router();
const ToDo = require('../models/todo.js')

// Get all todos
Router.get("/todo", (req, res) => {
    ToDo.find()
    .then(todos => res.json(todos))
    .catch(err=> res.sendStatus(500))
});

// Create a todo
Router.post("/todo", (req, res) => {
    ToDo.insert(req.body)
    .then(()=> res.sendStatus(200))
    .catch(err => res.sendStatus(500))
});

//Update a todo (toggle completed)
Router.patch("/todo/:id", (req, res) => {
    res.send("creating todo")
});

module.exports = Router;