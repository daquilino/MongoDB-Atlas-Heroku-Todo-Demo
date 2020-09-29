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

    ToDo.create(req.body)
    .then(()=> res.sendStatus(200))
    .catch(err => res.sendStatus(500))
});

//Update a todo (toggle completed)
Router.put("/todo/:id", (req, res) => {
    ToDo.findById(req.params.id)
    .then(todo =>{

        todo.completed = !todo.completed;
        return todo.save()
    })
    .then(()=> res.sendStatus(200))
    .catch(()=> {
        console.log("something went wrong with update")
        res.sendStatus(500);
    })
});

module.exports = Router;