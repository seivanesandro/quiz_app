import React from "react";
import { useGlobalContext } from "./context/Context";

import bgimg from "./images/bg_rbg.png";
import styled, { keyframes } from "styled-components";
import { devices } from "./utils/constantes";

import NavBarComponent from "./components/navbar/NavBarComponent";
import Button from "./components/common/Button";
import ModalComponent from "./components/modal/ModalComponent";
import FormComponent from "./components/form/FormComponent";
import Loading from "./components/load/Loading";
import ErrorComponent from "./components/error/ErrorComponent";

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
    animation: ${Show} 2.5s linear;
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
    font-size: 1.7rem;
  }
  @media only screen and (${devices.iphone14}) {
    font-size: 17.2px !important;
  }
  @media only screen and (${devices.mobileG}) {
    font-size: 17.2px !important;
  }

  @media only screen and (${devices.mobileP}) {
    font-size: 15.2px !important;
  }
`;

const FormContainer = styled.article`
  animation: ${Show} 2.5s ease-in;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  @media only screen and (${devices.iphone14}) {
    flex-direction: column !important;
    gap: 2rem !important;
  }
  @media only screen and (${devices.mobileG}) {
    flex-direction: column !important;
    gap: 2rem !important;
  }
`;

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;
`;

function App() {
  // obtem valores e funções do contexto global
  const {
    waiting,
    loading,
    error,
    questions,
    index,
    correct,
    isModalOpen,
    nextQuestion,
    checkAnswers,
    closeModal,
  } = useGlobalContext();

  // FIXME: ("Estados do App:", { waiting, loading, error, questionsLength: questions?.length });

  return (
    <>
      <div className="App">
        <NavBarComponent />
        <FirstTitle className="first-title">
          The challenge for your mind starts now
        </FirstTitle>

        {/* mostra form */}
        {waiting && !loading && (
          <MainContainer>
            <FormComponent />
          </MainContainer>
        )}

        {/* mostra loading */}
        {loading && (
          <ContainerLoading>
            <Loading $speedborder="0.7" $fontsize="8" $size="1.5" />
          </ContainerLoading>
        )}

        {/* mostra erro */}
        {error && !loading && (
          <ContainerLoading>
            <ErrorComponent errorname="Ocorreu um erro ao buscar perguntas. Tente novamente." />
          </ContainerLoading>
        )}

        {/* mostra quiz */}
        {!waiting &&
          !loading &&
          !error &&
          questions &&
          questions.length > 0 &&
          questions[index] && (
            <MainContainer className="main">
              {isModalOpen && <ModalComponent onClose={closeModal} />}
              <p className="correct-answers text-end">
                Correct answers: {correct}/{index}
              </p>
              <FormContainer className="container form-container">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: questions[index].question,
                  }}
                ></h2>
                <BtnContainer className="container btn-container">
                  {(() => {
                    const { incorrect_answers, correct_answer } =
                      questions[index];
                    let answers = [...incorrect_answers];
                    const tempIndex = Math.floor(Math.random() * 4);
                    if (tempIndex === 3) {
                      answers.push(correct_answer);
                    } else {
                      answers.push(answers[tempIndex]);
                      answers[tempIndex] = correct_answer;
                    }
                    return answers.map((answer, idx) => (
                      <Button
                        key={idx}
                        className="btn answer-btn"
                        $variant="default"
                        onClick={() => checkAnswers(correct_answer === answer)}
                        dangerouslySetInnerHTML={{ __html: answer }}
                      ></Button>
                    ));
                  })()}
                </BtnContainer>
              </FormContainer>
              <Button
                className="btn next-question"
                $variant="next"
                onClick={nextQuestion}
              >
                Next Question
              </Button>
            </MainContainer>
          )}
      </div>
    </>
  );
}

export default App;
