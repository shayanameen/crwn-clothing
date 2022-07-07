import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../assets/crown.svg';
import CartIcon from '../components/CartIcon';
import CartDropdown from '../components/CartDropdown';

import { UserContext } from '../contexts/User';
import { signOutUser } from '../utils/firebase';
import { CartContext } from '../contexts/Cart';

import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='navigation-links-container'>
          <Link className='navigation-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='navigation-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='navigation-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
