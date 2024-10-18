import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const ProductDetails = ({cartitems,setCartitems}) => {
    const [product,setProduct]=useState(null)
    const [qty,setQty]=useState(1)
    const {id} =useParams()
    // useEffect(()=>{
    //     fetch(process.env.REACT_APP_API_URL+'/products/'+id)
    //     .then(res=>res.json)
    //     .then(res=>setProduct(res.product))`
    // },[])

    useEffect(()=>{
        const fetchData=async()=>{
        const data=await fetch(process.env.REACT_APP_API_URL+'/products/'+id)
        const response=await data.json()
        setProduct(response.product)
        }
        fetchData()
    },[])


    const addToCart =()=>{
        const itemExits =cartitems.find((item)=>(item.product._id===product._id))
        if(!itemExits){
            const newitem={product,qty}
            setCartitems((state)=>[...state,newitem])
            toast.success("cartItem added successfully")
            
        }
    }

    const increaseqty=()=>{
        if(qty===product.stock){
            return;
        }
        setQty((state)=>state+1)
    }

    const decreaseqty =()=>{
        if(qty>1){
            setQty((state)=>state-1)
        }
    }
  return (
    <div className='b3'>
        {product&& <div className="b3d">
        <div className="b3d1">
            <img src={product.images[0].image} alt="img"/>
        </div>
        <div className="b3d2">
            <div>
                <p className="p1">{product.name}</p>
            </div>  
            <p className='p56'>{product._id}</p>
            <hr/>
            <p className='p55'>
                <span className='star1'>&star;</span>
                <span className='star1'>&star;</span>
                <span className='star1'>&star;</span>
                <span className='star1'>&star;</span>
                <span className='star1'>&star;</span>
            </p>
            <hr/>
            <p>${product.price}</p>
                    <button className="bt4" onClick={decreaseqty}>-</button>
                    <button className="bt5">{qty}</button>
                    <button className="bt6" onClick={increaseqty}>+</button>
                    <button className="bt8" onClick={addToCart} disabled={product.stock===0}>Add to cart</button>
            <p>Status: {product.stock>0?"In stock":"Out of stock"}</p>
            <p className="p3"><b>Description:</b></p>
            <p className="p2">{product.description}</p>
            <br/> <br/> <br/>
            <p>Sold by: {product.seller}</p>
            
        </div>
    </div>}
    {
        !product &&<>
        <p>No products</p>
        </>
    }
    </div>
  )
}

export default ProductDetails