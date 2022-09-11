import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
const AdminNav=()=>{
  const navigate=useNavigate()
  const logoutMethod=()=>{
    localStorage.removeItem('accesstoken')
    navigate('/')
 }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/admindashboard' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>Home</Link>
            <Link to='/addjobs' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>Add Jobs</Link>
            <Link to='/myjobs' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>My Jobs</Link>
            <Link to='/Applicants' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>View Job Applicants</Link>
            <Link to='/profileadmin' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>Edit Profile</Link>
            <i className='fa fa-sign-out 'style={{textDecoration: 'none', color:"white", margin:'0.5rem'}} onClick={logoutMethod} >Logout</i>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;