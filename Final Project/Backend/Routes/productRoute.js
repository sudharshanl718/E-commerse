const express=require('express')
const { getProduct,getSingleProduct } = require('../Controller/ProductController')
const router=express.Router()

router.route('/products').get(getProduct);
router.route('/products/:id').get(getSingleProduct);

module.exports=router;