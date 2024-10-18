const express=require('express');
const { createOrder } = require('../Controller/OrderController')
const router=express.Router();

router.route('/order').post(createOrder);
// router.route('/orders/:id').post(createorder);

module.exports=router;