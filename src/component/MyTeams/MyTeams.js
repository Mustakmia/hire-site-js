import './MyTeams.css';
import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';

const MyTeams = () => {
    const [TeamMember, setTeamMember] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddMember = (MyTeams) => {
        const newMember = [...member, MyTeams]
        setMember(newMember)
    }
    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => console.log(data));

    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    {

                    }

                    <div className="row">
                        {
                            TeamMember.map(TeamMember =>
                                <TeamMember
                                    MyTeam={TeamMember}
                                    handleAddTeamMember={handleAddMember}
                                >

                                </TeamMember>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                    {/* ekhane amra cart calculation korbo */}
                    <member
                        cart={member}
                    >

                    </member>
                </div>
            </div>
        </div>
    );
};

export default MyTeams;