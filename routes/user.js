const userController = require("../api/controllers/user-controller");
var express = require("express");
var router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
module.exports = router;
