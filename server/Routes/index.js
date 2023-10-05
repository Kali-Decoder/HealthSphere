const express = require("express");
const router = express.Router();
const { registerUser, loginUser,updateDetails } = require("../Controllers");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile/update", upload.single("profileImage"), updateDetails);

module.exports = router;
