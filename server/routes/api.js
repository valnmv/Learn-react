const express = require('express');
const router = new express.Router();

const Item = require('../models/item');

router.get('/item', (req, res) => {
  Item.find({}, (err, data) => { res.status(200).json(data); });
});

const cuid = require('cuid');
const sanitizeHtml = require('sanitize-html');
const slug = require('limax');

router.post('/item', (req, res) => {
  const newItem = new Item(req.body);

  // Sanitize inputs
  newItem.text = sanitizeHtml(newItem.text);
  newItem.slug = slug(newItem.text);
  newItem.cuid = cuid();

  newItem.save((err, saved) => {
    res.status(200).json({ saved });
  });
});

router.delete('/item/:id', (req, res) => {
  Item.findOneAndRemove({ id: req.params.id }, (err) => {
    if (err) {
      return res.status(500).send('Failed to delete');
    }

    return res.status(200);
  });
});

module.exports = router;
