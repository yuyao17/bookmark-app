import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <nav className="navbar is-primary"> 
                <div className="navbar-brand">
                    <div className="navbar-burger burger" data-target="navigation-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navigation-menu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                            Home
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;