import React from 'react';
import TeamMember from '../TeamMember/TeamMember';

const Cart = (props) => {
    // const { cart } = props || {}


    const selaries = props.cart
    let total = 0
    for (const iterator of selaries) {
        total = total + parseInt(iterator)
    }

    return (
        <div>
            < h3>
                <i className="fas fa-shopping-cart"></i> Team Member: {selaries.length}
            </h3>
            <h2>Salary:{total}</h2>
        </div>
    );
};

export default Cart;