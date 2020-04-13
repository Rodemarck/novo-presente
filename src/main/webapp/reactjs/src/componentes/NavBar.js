import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img src="icon.jpg" width={25}/>
                </Navbar.Brand>

            </Navbar>
        );
    }
}

export default NavBar;