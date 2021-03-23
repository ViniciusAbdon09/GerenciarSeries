import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    const [menu, setMenu] = useState(false)
    
    const toggle = () => {
        setMenu(!menu)
    }

    return (
        <Navbar color="dark" dark expand="md">
            <div className="container">
                <NavbarBrand  tag={Link} to="/">Minhas Séries</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={menu} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/series">Séries</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/generos">Genêros</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}

export default Header