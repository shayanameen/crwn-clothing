import { useContext } from 'react';
import CheckoutItem from '../components/CheckoutItem';

import { CartContext } from '../contexts/Cart';

import './Checkout.scss';

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      {totalPrice ? <span className='total'>Total: ${totalPrice}</span> : null}
    </div>
  );
};

export default Checkout;
