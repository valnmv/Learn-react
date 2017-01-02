const express = require('express');
const router = new express.Router();

const Todo = require('../models/todo');

router.get('/todo', (req, res) => {
  Todo.find({}, (err, data) => { res.status(200).json(data); });
});


// import cuid from 'cuid';
// import slug from 'limax';
// import sanitizeHtml from 'sanitize-html';

router.post('/todo', (req, res, next) => {
  const newTodo = new Todo(req.body);
  // newTodo.cuid = cuid();

  // Sanitize inputs
  // newTodo.text = sanitizeHtml(newPost.title);

  newTodo.save((err, saved) => {
    res.status(200).json({ saved });
  });
});

module.exports = router;
