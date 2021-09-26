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
            <h3><i className="fas fa-shopping-cart"></i>
                {selaries.length}
            </h3>
            <h2>{total}</h2>


            <ul>
                {/* {
                    cart.map(TeamMember => <li>{TeamMember.name}</li>)
                } */}
            </ul>
        </div>
    );
};

export default Cart;