const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UsersController = require('../controllers/users');

router.post("/signup", UsersController.post_new_user); //TODO: - Give this checkAuth after creating (a) master account(s)
router.post("/login", UsersController.post_login);
router.get('/', UsersController.get_all_login); //TODO: - Maybe also give this checkAuth, can only see by master account
router.patch('/:userId', UsersController.edit_login);
router.delete("/:userId", );

module.exports = router;