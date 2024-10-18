// exports.postOrder=(req,res,next)=>{
//     res.json({
//         success:true,
//         message:"Order field working"
//     })
// }

const OrderModel=require('../Models/OrderModel')

exports.createOrder=async(req,res,next)=>{
    // console.log(req.body,'Data');


    const cartItems=req.body;

    // const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2);
    const amount=cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0).toFixed(2);

    const status='pending';

    const order=await OrderModel.create({cartItems,amount,status});

    res.json({
        success:true,
        order
    })

}