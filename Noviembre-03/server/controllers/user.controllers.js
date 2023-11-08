const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    const user = new User({
        username: username,
        email: email,
        password: password
    });
    try {
        const result = await user.save();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.getUserById = (req, res) => {
    const { id } = req.params;
    try {
        const user = User.findById(id);
        if (!user) {
            res.status(404).json({ error: 'User not found.' });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!user) {
            res.status(404).json({ error: 'User not found.' });
            return;
        }

        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            res.status(404).json({ error: 'User not found.' });
            return;
        }
        res.json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        console.log(user);
        if (!user) {
            res.status(404).json({ error: 'Authentication failed' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(404).json({ error: 'Authentication failed.' });
            return;
        }
        const userResp = await User.findOne({ email: email })
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_TOKEN, { expiresIn: '10 years' });

        res.cookie('userToken', token, { httpOnly: true });
        res.json(userResp);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports.logout = (req, res) => {
    res.clearCookie('userToken');
    res.json({ success: true, message: 'Logout successful.' });
};
