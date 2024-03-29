import { Image, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink, Link} from "react-router-dom";
import Logo from "../assets/Chord_Progress_Mascot.png";

// loggedIn is a boolean and logout is a function
 interface NavbarProps {
    loggedIn: boolean
    logout: () => void
 }


const Navbar: React.FC<NavbarProps> = (props) => {
    const {loggedIn, logout} = props;

    // Based on whether the user is signed in or not we will display the appropriate links in the navbar
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                <Link to="/">
                    <Image src={Logo} height="50rem" width="40rem" rounded />
                </Link>
                    {loggedIn && <>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    <Nav.Link to="/chordprogressions" as={NavLink}>Chord Progressions</Nav.Link>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                    </>
                    }
                    {!loggedIn && <>
                    <Nav.Link to="/register" as={NavLink}>Register</Nav.Link>
                    <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
                    </>}
                </Nav>
            </Container>
        </NavbarBs>
    )
};

export default Navbar;