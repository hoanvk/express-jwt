const personController = require("../api/controllers/person-controller");
var express = require("express");
var router = express.Router();
router.get("/", personController.all);

module.exports = router;
