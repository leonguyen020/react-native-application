const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ProductsController = require('../controllers/products');

router.post('/', checkAuth, ProductsController.post_product);
router.get('/', ProductsController.get_all_products);
router.get('/:productId', ProductsController.get_by_id);
router.patch('/:productId', checkAuth, ProductsController.patch_product);
router.delete('/:productId', checkAuth, ProductsController.delete_product);

module.exports = router;