const Router = require('express').Router();
const ToDo = require('../models/todo.js')


// Get all todos
Router.get("/todo", (req, res) => {
    res.send("getting todos")
});

// Create a todo
Router.post("/todo", (req, res) => {
    res.send("creating todo")
});


//Update a todo (toggle completed)
Router.patch("/todo/:id", (req, res) => {
    res.send("creating todo")
});

module.exports = Router;