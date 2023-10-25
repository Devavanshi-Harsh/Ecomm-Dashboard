import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/add">Add Product</Link>
                        <Link to="/update">Update Product</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;