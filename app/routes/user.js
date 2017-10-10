const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'User' });
});

router.get('/:name', (req, res, next) => {
  res.render('index', { title: `User ${req.params.name}` });
});

module.exports = router;
