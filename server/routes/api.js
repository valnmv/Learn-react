const express = require('express');
const router = new express.Router();

const Todo = require('../models/todo');

router.get('/todo', (req, res) => {
  Todo.find({}, (err, data) => { res.status(200).json(data); });
});

const cuid = require('cuid');
const sanitizeHtml = require('sanitize-html');
const slug = require('limax');

router.post('/todo', (req, res) => {
  const newTodo = new Todo(req.body);

  // Sanitize inputs
  newTodo.text = sanitizeHtml(newTodo.text);
  newTodo.slug = slug(newTodo.text);
  newTodo.cuid = cuid();

  newTodo.save((err, saved) => {
    res.status(200).json({ saved });
  });
});

router.delete('/todo/:id', (req, res) => {
  Todo.findOneAndRemove({ id: req.params.id }, (err) => {
    if (err) {
      return res.status(500).send('Failed to delete');
    }

    return res.status(200);
  });
});

module.exports = router;
