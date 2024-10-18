const productModel = require("../Models/productModel")

    exports.getProduct=async(req,res,next)=>{
        const query=req.query.keyword?{ name:{
            $regex:req.query.keyword,
            $options:'i'
        }}:{}
        const products=await productModel.find(query)
        res.json({
            success:true,
           products
        })
    }

    exports.getSingleProduct=async(req,res,next)=>{
        try{
            const product=await productModel.findById(req.params.id)
            res.json({
                success:true,
                product
            })
        }
        catch(error){
            res.status(400).json({
                success:false,
                message: error.msg
            })
        }
        
    }
