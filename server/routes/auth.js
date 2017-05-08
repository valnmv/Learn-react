const express = require('express');
const AwsAuth = require('../modules/aws-auth.jsx').default;

const router = new express.Router();

router.post('/signin', (req, res, next) => {
  const awsAuth = new AwsAuth();
  awsAuth.signIn(req.body.email, req.body.password);
  next();
});

router.post('/signup', (req, res, next) => {
  next();
});

module.exports = router;
