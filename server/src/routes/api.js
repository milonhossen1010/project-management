const express = require("express");
const HelloCongroller = require('../controllers/HelloCongroller');
const router = express.Router();



router.get('/', HelloCongroller.Test);


module.exports = router;