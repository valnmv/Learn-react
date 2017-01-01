const express = require('express');
const router = new express.Router();

const Todo = require('../models/todo');

router.get('/todo', (req, res) => {
  Todo.find({}, (err, data) => { res.status(200).json(data); });
});

module.exports = router;
