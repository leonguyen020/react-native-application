const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const SchedulesController = require('../controllers/schedules');

router.post('/', checkAuth, SchedulesController.post_schedule);
router.get('/', SchedulesController.get_all_schedules);
router.get('/:scheduleId', SchedulesController.get_by_id);
router.get('/clubId/:clubId', SchedulesController.get_by_clubId);
router.patch('/:scheduleId', checkAuth, SchedulesController.patch_schedule);
router.delete('/:scheduleId', checkAuth, SchedulesController.delete_schedule);

module.exports = router;