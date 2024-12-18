import React from 'react'
import Container from 'react-bootstrap/Container';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <Navbar bg="transparent" className='border border-1 border-info' data-bs-theme="dark">
    <Container>
      <Navbar.Brand>
      <FontAwesomeIcon icon={faVideo} beat className='text-warning' size='lg'/>
        <span className='text-warning ms-2 fs-5'>Media Player</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header