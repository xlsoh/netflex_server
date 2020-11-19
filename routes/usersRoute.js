const express = require("express");
const router = express.Router();

const { usersController } = require("../controllers");

// * POST /user/signin
router.post("/signin", usersController.signin.post);

// * POST /user/signout
router.post("/signout", usersController.signout.post);

// * POST /user/signup
router.post("/signup", usersController.signup.post);

// * GET /user/mypage
router.get("/mypage", usersController.mypage.get);

// * get /user/auth
router.get("/auth", usersController.auth.get);

module.exports = router;
