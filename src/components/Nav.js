import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="/" className="logo">Logo</a>
                <a href="/" class="brand-logo right"><i class="material-icons">movie_filter</i>Search Movies</a>
            </div>
        </nav>
    )
}

export default Nav;