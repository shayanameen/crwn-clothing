import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../contexts/Cart';
import Button from './Button';
import CartItem from './CartItem';

import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
