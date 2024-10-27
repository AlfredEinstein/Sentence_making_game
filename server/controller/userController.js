const bcrypt = require("bcryptjs");
const userData = require("../model/userData");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

function convertUserName(userName) {
  return userName.toUpperCase().replace(/\s+/g, "");
}

async function userCheck(userName) {
  try {
    const user = await userData.findOne({ userName: userName });
    if (user) {
      console.log(user);
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error("Error checking user:", error);
    throw error;
  }
}

exports.register = async (req, res) => {
  if (req.body.userName && req.body.userPassword) {
    const { userName, userPassword } = req.body;
    const name = convertUserName(userName);
    console.log(userCheck(name));
    const isUserNameAvailable = await userCheck(name);
    if (isUserNameAvailable) {
      const hasedPassword = await bcrypt.hash(userPassword, 10);
      try {
        const user = new userData({
          userName: name,
          userPassword: hasedPassword,
        });
        await user.save();
        res.status(201).json({ message: "user saved", data: user });
      } catch (error) {
        console.log(error);
        res.status(401).json({ message: "error while saving User." });
      }
    } else {
      res.status(409).json({ message: "User name already taken" });
    }
  } else {
    console.log("no input provided.");
    res.status(400).json({ message: "please check user name and passsword." });
  }
};

exports.login = async (req, res) => {
  if (req.body.userName && req.body.userPassword) {
    const { userName, userPassword } = req.body;
    const name = convertUserName(userName);
    const user = await userData.findOne({ userName: name });
    if (user && (await bcrypt.compare(userPassword, user.userPassword))) {
      const token = jwt.sign({ id: user.id }, secret);
      return res.status(200).json({ message: "Login successful", jwtToken: token });
    } else {
      return res.status(400).json({ message: "Incorrect username or password" });
    }
  } else {
    return res.status(401).json({ message: "Username and password are required" });
  }
};
