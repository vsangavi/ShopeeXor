exports.Registerget=(req, res) => {
  User.find().then((users) => res.json(users));
};
exports .Registerpost= (req, res) => {
  const newuser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newuser.save().then((user) => res.json(user));
};