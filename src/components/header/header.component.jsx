import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';

const Header = ({currentUser, cartHidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                Shop
            </Link>
            <Link className="option" to='/shop'>
                Contact
            </Link>
            {
                currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>) : (
                    <Link className="option" to='/signin'>SIGN IN</Link>
                )
            }
            <CartIcon />
        </div>
        {
            cartHidden ? null : (<CartDropdown/>)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps)( Header );