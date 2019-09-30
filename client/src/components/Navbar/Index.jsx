import React from 'react'

const Navbar = () => {
    return (
    <nav>
        <div class="nav-wrapper blue">
            <a href="/" class="brand-logo">Mern Books</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/saved">Saved</a></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar