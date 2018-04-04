import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <header className="hero is-primary is-medium">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="navbar-menu">
                        <div className="navbar-end">

                            <Link to='/'><button className="button is-primary nav-button">Show Movies</button></Link>
                            <Link to='/favorites'><button className="button is-primary nav-button">Show Favorites</button></Link>
                            <Link to='/tv'><button className="button is-primary nav-button">Show TV</button></Link>
                            <Link to='/people'><button className="button is-primary nav-button">Show People</button></Link>
                    
                        </div>
                    </div>
                </nav>
            </div>
            <div className="hero-body">
            <div className="container">
                <h1 className="title is-1">Movie Search</h1>
            </div>
            </div>
        </header>  

    )
}

export default NavBar;