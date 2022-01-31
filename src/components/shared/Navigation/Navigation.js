import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, signoutHandler } = useAuth();

    return (
        <>
            <Navbar bg="white" variant="light">
                <Container>
                    <Link className="navbar-brand" to={`/`}>FASHION STORE</Link>

                    <Nav className="mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/shop`}>
                                EXPLORE
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/megazine`}>
                                MEGAZINE
                            </Link>
                        </li>
                    </Nav>

                    <Nav className="ml-auto">

                        {!user.email && (
                            <li className="nav-item">
                                <Link className="nav-link" to={`/login`}>
                                    <BiUser />
                                </Link>
                            </li>
                        )}

                        {user.email && (
                            <li className="nav-item">
                                <Link className="nav-link" to={`/dashboard`}>
                                    <BiUser />
                                </Link>
                            </li>
                        )}
                            

                        <li className="nav-item">
                            <Link className="nav-link" to={`/checkout`}>
                                <AiOutlineShoppingCart />
                            </Link>
                        </li>

                        {user.email && (
                            <Nav.Link onClick={() => signoutHandler()}>
                                <FiLogOut />
                            </Nav.Link>
                        ) }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
