const Router = require('express').Router();
const Path = require('path')

//Any get requests not matched by other routes will server the index.html page
Router.get("/*", (req, res) => res.sendFile(Path.join(__dirname, '../index.html')))

module.exports = Router;