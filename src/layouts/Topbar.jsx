
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"






function Topbar() {
  return (
    <div className='topbarContainer'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='topbarContainer'>
        <Navbar.Brand href="#home">NORDIC ROSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto topbarList">
            <Nav.Link href="#home">BLOG</Nav.Link>
            <Nav.Link href="#home">ABOUT</Nav.Link>
            <Nav.Link href="#home">LINKS</Nav.Link>
            <Nav.Link href="#link">PROJECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
  
}


export default Topbar;