const Router = require('express').Router();
const Path = require('path')

Router.all("/*", (req, res) => res.sendFile(Path.join(__dirname, '../index.html')))

module.exports = Router;