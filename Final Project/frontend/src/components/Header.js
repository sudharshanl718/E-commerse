import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const header = ({cartitems}) => {
  return (
    <div className='b1'>
        <header>
            <div className="hd1">
                <Link to={"/"}><img src="/images/logo.png" alt="Logo"/></Link>
            </div>
            <Search />
            <Link to={"/components/Contact"}><span className='cart'>Contact</span></Link>
            <div className="hd3">
                <button className="bt1"><Link to={"/components/ProductCart"}><span className='cart'>Cart</span></Link></button>
                <button className="bt2">{cartitems.length}</button>
                {/* <button className="bt2">{product.qty}</button> */}
            </div>
        </header>
    </div>
  )
}

export default header