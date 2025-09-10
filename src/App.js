import NavBarComponent from "./components/navbar/NavBarComponent";
//import FormComponent from "./components/form/FormComponent";
import bgimg from "./images/bg_rbg.png";
import styled from "styled-components";
import ModalComponent from "./components/modal/ModalComponent";
//import Button from "./components/common/Button";
//import Loading from "./components/load/Loading";
//import Button from "./components/common/Button";

const MainContainer = styled.div`
  &.main {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background-image: url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
`;

function App() {
  return (
    <>
      <div className="App">
        <NavBarComponent />
        <MainContainer className="main">
          <section className="quiz quiz-small">
            <ModalComponent />
          </section>
        </MainContainer>
      </div>
    </>
  );
}

export default App;
