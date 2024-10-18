import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductCart = ({ cartitems, setCartitems }) => {
  const [complete,setComplete]=useState(false)

  const increaseqty = (items) => {
    if (items.product.stock === items.qty) {
      return;
    }
    const updatedItems = cartitems.map((i) => {
      if (i.product._id === items.product._id) {
        return { ...i, qty: i.qty + 1 };
      }
      return i;
    });
    setCartitems(updatedItems);
  };

  const decreaseqty = (items) => {
    if (items.qty > 1) {
      const updatedItems = cartitems.map((i) => {
        if (i.product._id === items.product._id) {
          return { ...i, qty: i.qty - 1 };
        }
        return i;
      });
      setCartitems(updatedItems);
    }
  };

  const removeItems = (items) => {
    const updatedItems = cartitems.filter((i) => i.product._id !== items.product._id);
    setCartitems(updatedItems);
  };

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const total = cartitems.reduce((sum, item) => sum + item.product.price * item.qty, 0).toFixed(2);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartitems]);

  const placeOrder=async()=>{
    await fetch(process.env.REACT_APP_API_URL_ORDER+'/order',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(cartitems)
    })

    .then(()=>{
      setCartitems([])
      setComplete(true)
      toast.success('Order placed succcessfully!')
    })
  }

  return (
    <div className='b2'>
      {cartitems.length > 0 ? (
        <div>
          <h1>Your Cart: {cartitems.length} items</h1>
          <div className="b2d">
            {cartitems.map((items) => (
              <Fragment key={items.product._id}>
                <div className="b2d1">
                  <img src={items.product.images[0].image} alt={items.product.name} />
                  <Link to={`/products/${items.product._id}`} className='h3'>{items.product.name}</Link>
                  <p className="rate">${items.product.price}</p>
                  <button className="bt4" onClick={() => decreaseqty(items)}>-</button>
                  <button className="bt5">{items.qty}</button>
                  <button className="bt6" onClick={() => increaseqty(items)}>+</button>
                  <button className="bt7" onClick={() => removeItems(items)}><ion-icon name="trash"></ion-icon></button>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="b2d2">
            <h3>Order Summary</h3>
            <hr />
            <p>Subtotal: <span>{cartitems.reduce((acc,item)=>(acc+item.qty),0)} (Units)</span></p>
            <p>Est. total: <span>${totalPrice}</span></p>
            <hr />
            <button className="bt8" onClick={placeOrder}>Place Order</button>
          </div>
        </div>
      ) : (
        <h2 className='h2'>Your cart is empty</h2>
      )}
    </div>
  );
};

export default ProductCart;
