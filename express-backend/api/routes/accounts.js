const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const AccountsController = require('../controllers/accounts');

router.post('/', checkAuth, AccountsController.post_account);
router.get('/', AccountsController.get_all_account);
router.get('/:accountId', AccountsController.get_by_id);
router.patch('/:accountId', checkAuth, AccountsController.patch_account);
router.delete('/:accountId', checkAuth, AccountsController.delete_account);

module.exports = router;