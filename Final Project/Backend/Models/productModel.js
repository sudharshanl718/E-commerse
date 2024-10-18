const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    description:{type:String},
    rating:{type:String},
    images:{type:Array},
    category:{type:String},
    seller:{type:String},
    stock:{type:Number},
    createdAt:{
        type:Date,
        default:()=> new Date()
    }
})

const productModel = mongoose.model('products',productSchema)
module.exports= productModel