import React, { Component } from 'react'
import { Link } from 'gatsby'

import { FaCartArrowDown } from 'react-icons/fa'
import './navbar.css'

export default class Navbar extends Component {
state ={
    navbarOpen: false,
    css:'collapse navbar-collapse',
    links: [
        {
            id: 1,
            path: '/',
            text: 'HOME'
        },
        {
            id: 2,
            path: '/about',
            text: 'ABOUT'
        },
        {
            id: 3,
            path: '/videos',
            text: 'VIDEOS'
        },
        {
            id: 4,
            path: '/shop',
            text: 'SHOP'
        },
    ]
};

navbarHandler = () => {
    this.state.navbarOpen?this.setState({navbarOpen:false,css:"collapse navbar-collapse"})
    :this.setState({
        navbarOpen: true,
        css: "collapse navbar-collapse show"
    })
};


render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
        {/* <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo"/>

        </Link> */}
        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>

            <ul className="navbar-nav ml-auto">
                {this.state.links.map(link => {
                        return (
                            <li key={link.id} className="nav-item">
                                <Link to={link.path} className="nav-link text-capitalize">
                                    {link.text}
                                </Link>
                            </li>
                        );
                    })}
                    <li className="nav-item ml-sm-5">
                        <FaCartArrowDown className="cart-icon snipcart-checkout"/>
                    </li>
            </ul>

        </div>
    </nav>
        );
    }
}