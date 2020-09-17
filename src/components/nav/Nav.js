import React from 'react';

const Nav = () => {
    return (
        <nav className="blue">
            <div className="nav-wrapper container">
                <a href="/" className="logo">Logo</a>
                <a href="/" className="brand-logo right"><i className="material-icons">movie_filter</i>Search Movies</a>
            </div>
        </nav>
    )
}

export default Nav;