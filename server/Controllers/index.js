const bcrypt = require("bcryptjs");
const User = require("../models/userschema");
const bodyParser = require("body-parser");
const multer = require("multer");

const storage = multer.memoryStorage(); // Store images in memory (you can configure file storage options)
const upload = multer({ storage });

const registerUser = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });
    console.log(oldUser);
    if (oldUser) {
      // User with the same email already exists
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });

    // Registration successful
    return res
      .status(201)
      .json({ status: "Registration successful", user: newUser });
  } catch (error) {
    // Handle other errors, e.g., database connection issues
    console.error("Error during registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return res.status(200).json({ status: "ok" });
    } else {
      // Invalid password
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    // Handle other errors, e.g., database connection issues
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
const user = {
  name: "Neeraj Choubisa",
  email: "neerajchoubisa876@gmail.com",
  profileImage: null, // Add a profile image field
};

const updateDetails = async (req, res) => {
  const updatedData = req.body;
  user.name = updatedData.name;
  user.email = updatedData.email;

  if (req.file) {
    user.profileImage = req.file.buffer; // Store image data in the user object
  }

  res.json({ message: "Profile updated successfully", user });
};

module.exports = { registerUser, loginUser, updateDetails };
