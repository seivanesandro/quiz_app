import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../images/logo_big1.png';

//TODO: add a refresh page to img

function NavBarComponent() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{marginBottom: "8rem"}}
        >
        <Container>
          <Navbar.Brand
            href="#home"
            className="w-100 d-flex justify-content-center">
            <img
              src={logo}
              width="100"
              height="100"
              className="my-1"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
