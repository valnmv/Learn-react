const express = require('express');
const AwsAuth = require('../modules/aws-auth.jsx').default;

const router = new express.Router();

router.post('/signin', (req, res) => {
  const awsAuth = new AwsAuth();
  awsAuth.signIn(req.body.email, req.body.password, (err, token) => {
    if (err) {
      const { code, message } = err;
      return res.status(400).json({ code, message });
    }

    return res.status(200).json({token});
  });
});

router.post('/signup', (req, res, next) => {
  next();
});

module.exports = router;
