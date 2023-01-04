var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
  res.send('bondia');
});

module.exports = router;
