import React from 'react'
import './NavSection.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavSection() {
    return (
        <>
            <Navbar expand="lg"  fixed="top" className="bg-body-tertiary shadow" style={{ padding: '12px' }}>
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="">
                            <Nav.Link className='m-2' href="#home">Home</Nav.Link>
                            <Nav.Link className='m-2' href="#service">Service</Nav.Link>
                            <Nav.Link className='m-2' href="#about">About</Nav.Link>
                            <Nav.Link className='m-2' href="#client">Client</Nav.Link>
                            <Nav.Link className='m-2' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavSection