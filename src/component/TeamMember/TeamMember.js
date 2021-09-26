import React from 'react';

const TeamMember = (props) => {
    const { name, img, age, selaly, designation, Country } = props.member
    return (

        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name:{name}</h5>
                <h5 className="card-text">Age:{age}</h5>
                <h6>Designation:{designation}</h6>
                <h6>Selary:{selaly}</h6>
                <h6>Country:{Country}</h6>
                <button className="btn btn-warning" onClick={() => props.addMe(selaly)}>Hire Me</button>
            </div>
        </div >

    );
};

export default TeamMember;