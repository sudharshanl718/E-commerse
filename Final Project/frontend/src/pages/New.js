import React, { useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

const New = ({product,setProduct}) => {
    const [searchParams, setSearchParams]=useSearchParams()

    useEffect(()=>{
        const fetchData=async()=>{
        const data=await fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        const response=await data.json()
        setProduct(response.products)
        // console.log(product)
        }
        fetchData()
    },[searchParams])
  return (
    <div className='b1'>
        <h1>Latest Products</h1>
        <main>
                {product.map((product)=>(
                    <ProductCard product={product} />
                ))}
        </main>
    </div>
  )
}

export default New