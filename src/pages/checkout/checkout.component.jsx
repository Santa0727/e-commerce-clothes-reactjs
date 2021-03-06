import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, totalSelectedItemsPrice } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Descritpion</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => item.name)
        }
        <div className="total">
            <span>Total: ${totalPrice}</span>
        </div>
    </div>
);

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: totalSelectedItemsPrice
})

export default connect(mapStateToProps)(CheckoutPage);
