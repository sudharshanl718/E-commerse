// import React, { useEffect, useState } from 'react'

// const Home = ({product,setProduct}) => {
//     useEffect(()=>{
//         const fetchData=async()=>{
//         const data=await fetch(process.env.REACT_APP_API_URL+'/products')
//         const response=await data.json()
//         //setProduct(response.products)
//         console.log(response.products)
//         }
//         //.then(res=>res.json())
//         // .then(res=>console.log(res.products))
//         // .then(res=>setProduct(res.products))
//         // .then(()=>console.log(product))
//         fetchData()
//     },[])
//   return (
//     <div className='b1'>
//         <h1>Latest Products</h1>
//         <main>
//             <div className="md">
//                 <img src="/images/products/oppo.png" alt="OPPO F21s Pro 5G" className="img"/>
//                 <p className="desc">OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128GB Storage) with No cost EMI/Additional Exchange Offers</p>
//                 <p className="stars">
//                     <span className="fa fa-star checked"></span>
//                     <span className="fa fa-star checked"></span>
//                     <span className="fa fa-star checked"></span>
//                     <span className="fa fa-star checked"></span>
//                     <span className="fa fa-star"></span>
//                 </p>
//                 <p className="rate">$245.67</p>
//                 <button className="bt3">View Details</button>
//             </div>
//         </main>
//     </div>
//   )
// }

// export default Home