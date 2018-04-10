import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <header className="hero is-primary is-medium">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <div className="navbar-burger" data-target="navBarA">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navBarA" className="navbar-menu">
                        <div className="navbar-end">

                            <Link className="navbar-item" to='/'><button className="button is-primary">Show Movies</button></Link>
                            <Link className="navbar-item" to='/favorites'><button className="button is-primary">Show Favorites</button></Link>
                            <Link className="navbar-item" to='/tv'><button className="button is-primary">Show TV</button></Link>
                            <Link className="navbar-item" to='/people'><button className="button is-primary">Show People</button></Link>
                    
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