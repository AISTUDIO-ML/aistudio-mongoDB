const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid Credentials" });
        }
        
        console.log(process.env.JWT_SECRET)
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Login Failed", error: error.message });
    }
};
exports.createUser = async (req, res) => {
    console.log(req.body)
    try {
      const { email, password, username, phone, companyname, address, billing } = req.body;
      const user = new User({ email, password, username, phone, companyname, address, billing });
      await user.save();
      res.status(201).send({ message: "User registered successfully!", userId: user._id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updateUserDetails = async (req, res) => {
    try {
      const { companyname, address, billing } = req.body;
      const user = await User.findByIdAndUpdate(req.params.userId, {
        companyname,
        address,
        billing
      }, { new: true });
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      res.status(200).send({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };