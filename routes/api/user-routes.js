const router = require('express').Router();
const {getAllUsers, getSingleUser, createUser, updateUser, deleteUser} = require( '../../controllers/user-controllers' );

// /aip/users
router.route("/").get(getAllUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;