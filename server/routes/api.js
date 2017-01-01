const express = require('express');
const router = new express.Router();

// const Todo = require('./models/todo');

router.get('/todo', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });

  // res.status(200).json(Todo.find({}));
});

module.exports = router;
