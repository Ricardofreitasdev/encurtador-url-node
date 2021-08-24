var express = require('express');
var router = express.Router();
const apiController = require("../controller/apiController")

router.get('/list', apiController.verifyJWT ,apiController.getAll)
router.post('/create', apiController.create);
router.post('/auth', apiController.auth)
router.post('/users', apiController.users);

module.exports = router;
