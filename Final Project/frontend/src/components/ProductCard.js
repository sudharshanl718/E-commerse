import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
            <div className="md">
                 <img src={product.images[0].image} alt="img" className="img"/>
                 <p className="desc">
                    <Link to={"/products/"+product._id}><a href="">{product.name }</a></Link>
                 </p>
                 <p className="stars">
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star"></span>
                 </p>
                 {/* <p>{product.description}</p> */}
                 <p className="rate">${product.price}</p>
                 <Link to={"/products/"+product._id}><a href='#' ><button className="bt3">View Details</button></a></Link>
             </div>
  )
}

export default ProductCard