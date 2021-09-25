import React from 'react';
import TeamMember from '../component/TeamMember/TeamMember';

const Cart = () => {
    return (
        <div>
            <h3><i class="fas fa-shopping-cart"></i>
                {cart.length}
            </h3>
            <h2>{total}</h2>
            <h3> Name: {name}</h3>

            <ul>
                {
                    cart.map(product => <li>{TeamMember.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;