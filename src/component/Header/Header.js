import React from 'react';
import './Header.css'
const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container-fluid a-hover">
                <a className="navbar-brand" href="/More">Docs</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Docs">All Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/About us">About Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Info">More</a>
                        </li>


                    </ul>
                    <form className="d-flex flex-fill mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );

};

export default Header;