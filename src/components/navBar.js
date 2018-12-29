import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import logo from '../sources/logo.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <Navbar color="white" light expand="md" fixed="top" >
                <NavbarBrand href="/">
                    <img src={logo} alt="IHSPH Logo" height="70" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar left>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Admission</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                About Us
                                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink href="#">Staff Profile</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="#">FAQ section </NavLink>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="#">Parent</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Student Life
                                </DropdownToggle>
                            <DropdownMenu>

                                <DropdownItem>
                                    <NavLink href="/activities">Activities </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/clubs" >Clubs </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink href="/internships">Internships</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>


                        <NavItem>
                            <NavLink href="#">Everything About College</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Guidance</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        )
    }
}

export default NavBar;