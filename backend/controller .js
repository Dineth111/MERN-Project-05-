const User = require('./model'); 

// Get all users
const getUsers = (req, res, next) => {
    User.find()
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.json({ error });
        });
};

// Add user
const addUser = (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        id: req.body.id,
    });
    newUser.save()
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.json({ error });
        });
};

// Update user
const updateUser = (req, res, next) => {
    const { id, name } = req.body;

    User.updateOne({ id: req.params.id }, { $set: { name: name } })
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.json({ error });
        });
};

// Delete user
const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({ id: id })
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.json({ error });
        });
};

// Exporting the functions
module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};