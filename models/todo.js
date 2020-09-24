const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    task: {
        type: String,
        trim: true,
        required: 'String is Required'
    }
});

const Model = mongoose.model('ToDo', ToDoSchema);
module.exports = Model;