//import { Link } from 'react-router-dom';
import React, { Component } from 'react'
//import Logout from './Logout';
//import Logout from './Logout';


class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className= "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://google.com" className="navbar-brand">Bank App</a></div>
                    </nav>
                </header>
            </div>
        )
    }

}

export default Navbar
