const express = require("express");
const router = express.Router();

const { usersController } = require("../controllers");

// * POST /user/signin
router.post("/signin", usersController.signin.post);

// * POST /user/signup
router.post("/signup", usersController.signup.post);

// * get /user/auth
router.get("/auth", usersController.auth.get);

module.exports = router;
