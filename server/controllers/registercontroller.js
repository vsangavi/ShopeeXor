const User = require("../models/userSchema");
exports.Registerget = (req, res) => {
  User.find().then((users) => res.json(users));
};
exports.Registerpost = (req, res) => {
  const newuser = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
  });
  newuser.save().then((user) => res.json(user));
};
