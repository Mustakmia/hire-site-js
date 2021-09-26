import './MyTeams.css';
import React, { useEffect, useState } from 'react';
import Cart from "../Cart/Cart";
import TeamMember from '../TeamMember/TeamMember';


const MyTeams = () => {
    const [TeamMembers, setTeamMembers] = useState([]);
    const [cart, setCart] = useState([]);

    const addMe = (selaly) => {
        const newCart = [...cart, selaly]
        setCart(newCart)
    }
    useEffect(() => {
        fetch("TeamDb.json")
            .then(res => res.json())
            .then(data => setTeamMembers(data));

    }, []);



    return (
        <div>
            <div className="row">
                <div className="col-md-9">

                    <div className="card-style">

                        {

                            TeamMembers.map(member => <TeamMember
                                member={member}
                                addMe={addMe}
                            ></TeamMember>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart} >
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default MyTeams;