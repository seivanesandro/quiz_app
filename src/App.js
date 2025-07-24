import NavBarComponent from "./components/navbar/NavBarComponent";
import FormComponent from "./components/form/FormComponent";
import bgimg from "./images/bg_rbg.png";
import styled from "styled-components";

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
    <div className="App">
      <NavBarComponent />
      <MainContainer className="main">
        <section className="quiz quiz-small">
          <FormComponent />
        </section>
      </MainContainer>
    </div>
  );
}

export default App;
