import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import "./CSS/navbar.css"

class NavbarComp extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar className="navbar-dark" light expand="lg">
              <NavbarBrand href='#/'>Wayv $age</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href= '#/' onClick={this.toggle}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='#/About'  onClick={this.toggle}>About</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
          </Navbar>
        </div>
      );
  }
}

export default NavbarComp;
