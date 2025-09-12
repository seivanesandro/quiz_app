import NavBarComponent from "./components/navbar/NavBarComponent";
//import FormComponent from "./components/form/FormComponent";
import bgimg from "./images/bg_rbg.png";
import styled, { keyframes } from "styled-components";
import { devices } from "./utils/constantes";
//import ModalComponent from "./components/modal/ModalComponent";
import Button from "./components/common/Button";
//import Loading from "./components/load/Loading";
//import Button from "./components/common/Button";



const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const TitleAnimation = keyframes`
    0%{
        color: #6c63ff;
        text-shadow: 0 0 1px #fff;
    }
    50%{
        color: #fff ;
        text-shadow: 0 0 3px #6c63ff;
    }

    100%{
        color: #6c63ff;
        text-shadow: 0 0 1px #fff;
    }
`;

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

  &.main section {
    animation: ${Show} 2.5s linear;
  }
`;

const FirstTitle = styled.h1`
  font-size: 2.3rem;
  color: #6c63ff;
  text-align: center;
  margin: 2rem;
  font-weight: 700;
  text-shadow: 0 0 1px #fff;
  text-transform: uppercase;
  animation: ${TitleAnimation} 2s ease-in-out infinite;

  @media only screen and (${devices.tablet}) {
    font-size: 2rem;
  }
  @media only screen and (${devices.iphone14}) {
    font-size: 1.8rem;
  }
  @media only screen and (${devices.mobileG}) {
    font-size: 1.8rem;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 1.5rem;
  }
  @media only screen and (${devices.mobileP}) {
    font-size: 1.1rem;
  }
`;

const FormContainer = styled.article``;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function App() {
  return (
    <>
      <div className="App">
        <NavBarComponent />
        <MainContainer className="main">
          <FirstTitle className="first-title">
            The challenge for your mind starts now
          </FirstTitle>
          <section className="quiz quiz-small">
            <p className="correct-answers text-end">Correct answers: 3</p>  
            <FormContainer className="container form-container">
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde expedita odio explicabo nemo nostrum nobis perspiciatis dolores temporibus, ratione, iusto quis eaque iure, laborum facilis pariatur. Aperiam voluptates temporibus blanditiis!</h2>
            </FormContainer>
            <BtnContainer className="container btn-container">
              <Button $variant="next" children="Next Questions" />
            </BtnContainer>
          </section>
        </MainContainer>
      </div>
    </>
  );
}

export default App;
