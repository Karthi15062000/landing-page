
import React, { useEffect } from 'react'
import logo from "../../assets/images/logo.png"
import Button from '../../components/button'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {

    // const route= ()
    const path = window.location

    console.log(path)
    
    useEffect(() => {
        if (path?.pathname == "/") {

            path.href = "/home"
        }
    }, [])

    const btnName = "Create free account"

    return (
        <div className='container mt-2 '>

            <Navbar expand="lg" className="">

                <Navbar.Brand href="#home">  <img className='me-5' src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='navbar-mobile'>
                    <Nav className="mx-auto d-flex justify-content-center">
                        <Nav.Link className='mx-1 fw-bold navbar-content' href="#home">Solution</Nav.Link>
                        <Nav.Link className='mx-1 fw-bold navbar-content' href="#link">Industries</Nav.Link>
                        <Nav.Link className='mx-1 fw-bold navbar-content' href="#link">Fees</Nav.Link>
                        <Nav.Link className='mx-1 fw-bold navbar-content' href="#link">About</Nav.Link>


                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link href="#deets">Sign in</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">

                            <Button btnName={btnName} />

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>



        </div>
    )
}

export default Header
