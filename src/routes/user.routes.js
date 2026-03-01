const express = require("express");
const registerUser = require("../controllers/user.controller.js");
const router = express.Router();
const upload = require("../middlewares/multer.middleware.js");

router.post(
  "/register",
  upload.fields([
    ({
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    }),
  ]),
  registerUser,
);

module.exports = router;
