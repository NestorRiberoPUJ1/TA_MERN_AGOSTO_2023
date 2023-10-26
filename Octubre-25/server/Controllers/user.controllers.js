

module.exports.createUser = (req, res) => {

    res.json({ message: "created user" });
}

module.exports.getUsers = (req, res) => {

    res.json({ message: "got all users" });
}

module.exports.getUserById = (req, res) => {
    const { id } = req.params
    res.json({ message: `Got user #${id}` });
}

module.exports.updateUser = (req, res) => {

    res.json({ message: "updated user" });
}

module.exports.deleteUser = (req, res) => {

    res.json({ message: "deleted user" });
}


module.exports.returnNewUser = (req, res) => {

    res.json({ use: "nribero", email: "nestor@nestor.com" });
}