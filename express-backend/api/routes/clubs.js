const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ClubsController = require('../controllers/clubs');

router.post('/', checkAuth, ClubsController.post_club);
router.get('/', ClubsController.get_all_clubs);
router.get('/:clubId', ClubsController.get_by_id);
router.get('/rank/:currRank', ClubsController.get_by_rank);
router.patch('/:clubId', checkAuth, ClubsController.patch_club);
router.delete('/:clubId', checkAuth, ClubsController.delete_club);

module.exports = router;