const express = require('express');
const router = new express.Router();

const Item = require('../models/item');

router.get('/item', (req, res) => {
  Item.find({}, (err, data) => { res.status(200).json(data); });
});

router.get('/item/:_id', (req, res) => {
  Item.find({ _id: req.params._id }, (err, data) => {
    res.status(200).json(data);
  });
});

const sanitizeHtml = require('sanitize-html');
const slug = require('limax');

router.post('/item', (req, res) => {
  const newItem = new Item(req.body);
  newItem.text = sanitizeHtml(newItem.text);
  newItem.slug = slug(newItem.text);

  newItem.save((err, saved) => {
    res.status(200).json(saved);
  });
});

router.delete('/item/:_id', (req, res) => {
  Item.findOneAndRemove({ _id: req.params._id }, (err) => {
    if (err) {
      return res.status(500).send('Failed to delete');
    }

    return res.status(200);
  });
});

module.exports = router;
