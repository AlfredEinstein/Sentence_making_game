const bcrypt = require("bcryptjs");
const userData = require("../model/userData");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

exports.register = async (req, res) => {
  const { userName, userPassword } = req.body;
  const hasedPassword = await bcrypt.hash(userPassword, 10);
  try {
    const user = new userData({ userName, userPassword: hasedPassword });
    await user.save();
    res.status(201).json({ message: "user saved", data: user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "error while saving User." });
  }
};

exports.login = async (req, res) => {
  if (req.body.userName && req.body.userPassword) {
    const { userName, userPassword } = req.body;
    const user = await userData.findOne({ userName: userName });
    if (user && (await bcrypt.compare(userPassword, user.userPassword))) {
      const token = jwt.sign({ id: user.id }, secret);
      res.status(200).json({ message: "login successfull", jwtToken: token });
    } else {
      res.status(400).json({ message: "please check User Name and Password" });
    }
  } else {
    console.log("no input provided.");
    res.status(401).json({ message: "please check user name and passsword." });
  }
};
