const Express = require('express');
const Path = require('path');
const Mongoose = require('mongoose');

const App = Express();
const PORT = process.env.PORT || 8080;

// Sets up static folder
App.use(Express.static(Path.join(__dirname,'/public')))

// Sets up the Express app to handle data parsing
App.use(Express.urlencoded({ extended: true }));
App.use(Express.json());


Mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tododemodb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

App.use(require('./routes/htmlroutes.js'));

App.listen(PORT, () => console.log(`Listening on port: ${PORT}`));