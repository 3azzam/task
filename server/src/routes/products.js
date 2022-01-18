const router = require("express").Router();
const productsController = require('../controllers/productController');

router.get('/search' , productsController.search);

module.exports = router;

