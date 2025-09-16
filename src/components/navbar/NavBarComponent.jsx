import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo_big1.png";

function NavBarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            className="w-100 d-flex justify-content-center"
          >
            <img
              src={logo}
              width="100"
              height="100"
              className="my-1"
              alt="React Bootstrap logo"
              onClick={() => {
                // Limpar localStorage antes do refresh
                localStorage.clear();
                // Forçar refresh da página
                window.location.reload();
              }}
              style={{ cursor: 'pointer' }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
