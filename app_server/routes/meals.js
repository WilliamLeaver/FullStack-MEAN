var express = require('express');
var router = express.Router();
const controller = require('../controllers/meals');

/* GET travel page. */
router.get('/', controller.meals);

module.exports = router;
