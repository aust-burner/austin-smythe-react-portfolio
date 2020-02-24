import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class navigationContainer extends Component {
    constructor() {
        super();
    }

    adminLinks() {

    }

        render() {
            return (
                <div>
                <NavLink exact to="/">
                    Home
                </NavLink>

                <NavLink exact to="/about-me">
                    About
                </NavLink>

                    <button>Home</button>
                    <button>About</button>
                    <button>Contact</button>
                    <button>Blog</button>
                    {false ? <button>Add Blog</button> : null}
                </div>
            )
        }
}