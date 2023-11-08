const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controllers")


router.post("", userController.login);
router.delete("", userController.logout);

/* Actividad */




module.exports = router;