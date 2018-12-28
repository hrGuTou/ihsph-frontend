import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } from 'mdbreact';

class HamMenu extends Component {
  
   
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }




  render() {

    function makeNavItems(){
      let navItems=[];
      let clubNames = this.props.data;
      console.log(clubNames)
      for (let i = 0; i < clubNames.length; i++){
          navItems.push(
            <NavItem>
            <NavLink to="#!">clubNames[i]</NavLink>
          </NavItem>
          )
      }
      console.log(navItems)
      return navItems;
    }
  



    return (
      <Container>
        <Navbar color="light-blue lighten-4" style={{marginTop: '8em'}} light>
          <Container>
            <NavbarBrand>
              Clubs
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
            <Collapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                
              {makeNavItems}

              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default HamMenu;