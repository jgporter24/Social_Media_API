const { request } = require('http');
const { User, Thought } = require('../modles');

const userControllers = {
    async getAllUsers() {
        try {
            const users = await User.find({}).select('-_v').populate('thoughts').populate('friends');
            res.status(200).json(users);
        } catch (err) {
            res.statsu(500).json('something went wrong')
        }
    },
    asynch getSingleUser() {
        try {
            const user = await User.findOne({ _id: req.params.id }).select("-_v").populate('thoughts').populate('friends');
            if (!user) {
                res.status(404).json("User not found");
                return;
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(reg, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const updateUser = await User.fineOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            );
            if (!updatedUser) {
                res.status(404).json("User not found");
            }
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const deleteUser = await User.fineOneAndRemove({ _id: req.params.id, });
            if (!deleteUser) {
                res.status(404).json("User not found");
            }
            res.status(200).json(deletedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = userControllers;