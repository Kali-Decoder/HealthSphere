const bcrypt = require("bcryptjs");
const User = require("../models/userschema");
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.json({ error: "User Exists" });
      }
      await User.create({
        name,
        email,
        password: encryptedPassword,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
}

module.exports={registerUser}