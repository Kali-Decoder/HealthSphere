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

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "Invalid Password" });
  }

module.exports={registerUser,loginUser}