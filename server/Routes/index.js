const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { registerUser, loginUser,updateDetails, getUserData } = require("../Controllers");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile/update", upload.single("image"), updateDetails);
router.get("/userData/:email", getUserData);

module.exports = router;
