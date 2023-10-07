const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { registerUser, loginUser,updateDetails, getUserData } = require("../Controllers");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile/update/:email", upload.single("imageUpload"), updateDetails);
router.get("/userData/:email", getUserData);

module.exports = router;
