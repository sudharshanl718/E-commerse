const express=require('express')
const app=express()
const path=require('path')
const dotenv=require('dotenv')
dotenv.config({path:path.join(__dirname,'config','config.env')})
const productRoute=require('./Routes/productRoute')
const OrderRoute=require('./Routes/OrderRoute')
const connectdb = require('./config/connectdb')
const cors = require('cors')

connectdb()

app.use(express.json())

app.use(cors())

app.use('/api/v1',productRoute)
app.use('/api/o1',OrderRoute)

app.listen(process.env.PORT,()=>{
    console.log(`app running on ${process.env.PORT} in ${process.env.PROCESS_ENV}`)
})
