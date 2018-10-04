const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const AccessAuditsController = require('../controllers/accessAudits');

router.post('/', checkAuth, AccessAuditsController.post_audit);
router.get('/', checkAuth, AccessAuditsController.get_all_audit);
router.get('/:accessAuditId', checkAuth, AccessAuditsController.get_by_id);

module.exports = router;