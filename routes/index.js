var express = require('express');
var router = express.Router();
const Link = require("../models/link")
const layoutController = require("../controller/layoutController")

router.get('/', layoutController.index );
router.get('/:code', layoutController.redirect )
router.post('/new', layoutController.create )

module.exports = router;
