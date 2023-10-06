const bcrypt = require("bcryptjs");
const User = require("../models/userschema");


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

const updateDetails = async (req, res) => {
  var obj = {
    fname: req.body.fname,
    lname: req.body.lname,
    imgUrl: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file?.filename)
      ),
      contentType: "image/png",
    },
  };

  console.log(obj);
  res.json({ message: "Profile updated successfully", obj });
};

const getUserData = async (req, res) => {
  try {
    // Retrieve the email parameter from the URL
    const useremail = req.params.email;

    // Find the user by email in the database
    const user = await User.findOne({ email: useremail });

    if (user) {
      // If the user is found, send a success response with the user data
      res.status(200).json({ status: "ok", data: user });
    } else {
      // If the user is not found, send a not found response
      res.status(404).json({ status: "not found", message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ status: "error", data: error });
  }
};

module.exports = { registerUser, loginUser, updateDetails, getUserData };
