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
  const file = req.file;
  if(!file){
    res.json({ error: "Please Upload File"});
    return;
  }
  const emailToUpdate = req.params.email;
  var updateData = {
    imageUrl: req.file.filename
  };
  console.log(emailToUpdate);
  try {
    const user = await User.findOneAndUpdate(
      { email: emailToUpdate },
      updateData,
      { new: true }
    );

    if (user) {
      res.status(200).json({ message: "image upload Successfully", user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "User update failed" });
  }
};

const updateTextDetails=async(req,res)=>{
  const emailToUpdate = req.params.email;
  var updateData = {
    fname: req.body.fname,
    lname: req.body.lname,
  };
  try {
    const user = await User.findOneAndUpdate(
      { email: emailToUpdate },
      updateData,
      { new: true }
    );

    if (user) {
      res.json({ message: "User updated successfully", user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "User update failed" });
  }
}
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

module.exports = { registerUser, loginUser, updateDetails, getUserData ,updateTextDetails};
