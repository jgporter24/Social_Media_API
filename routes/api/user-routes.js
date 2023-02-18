const router = require('express').Router();
const {
    getAllUsers, 
    getSingleUser, 
    createUser, 
    updateUser, 
    deleteUser,
    removeFriend,
} = require( '../../controllers/user-controllers' );

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").put(addFriend).delete(removeFriend);

module.exports = router;