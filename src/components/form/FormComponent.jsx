import React from "react";
//import PropTypes from 'prop-types'
import InputFormComponent from "../common/InputFormComponent";
import LabelComponent from "../common/LabelComponent";
import styled, { keyframes } from "styled-components";
import { devices } from "../../utils/constantes";
import DropDownComponent from "../common/dropDown";
import StyledError from "../error/ErrorComponent";

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

const FormSetupComponent = styled.form`
  width: 50vw;
  min-width: 20rem;
  max-width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid rgba(108, 99, 255, 0.68);
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 68%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  color: #fff;
  box-shadow: 0 0.1rem 0.6rem rgba(108, 99, 255, 0.48) !important;
  animation: ${Show} 1.5s ease-out;

  @media only screen and( ${devices.portatilL}) {
    width: 84vw !important;
  }
  @media only screen and (${devices.portatilS}) {
    width: 81vw !important;
  }

  @media only screen and (${devices.tablet}) {
    width: 80vw !important;
    min-width: 5rem !important;
    max-width: 92% !important;
  }

  @media only screen and (${devices.iphone14}) {
    width: 90vw !important;
  }

  @media only screen and (${devices.mobileG}) {
    width: 90vw !important;
  }
  @media only screen and (${devices.mobileM}) {
    width: 99vw;
    padding: 0.5rem;
  }
  @media only screen and (${devices.mobileP}) {
    width: calc(100vw - 10px) !important;
    padding: 0.5rem;
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

const ContaineComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0%.5 auto;
`;

const FormComponent = (props) => {
  return (
    <>
      <FormSetupComponent action="" className="form-control" id="setup-form">
        <h2 className="title-form mt-5">Setup Quiz</h2>
        <ContainerInputs className="container-inputs">
          <LabelComponent labelfor="amount" textlabel="Number of Questions" />
          <InputFormComponent
            typeinput="number"
            nameinput="amount"
            idinput="amount"
            placeholderinput="Enter the number of questions"
            autoComplete="off"
          />
        </ContainerInputs>

        <ContainerInputs className="container-inputs">
          <LabelComponent labelfor="category" textlabel="Choose the Category" />
          <DropDownComponent
            namedropdown="category"
            iddropdown="category"
            optionsdropdown={[
              { value: "sports", name: "Sports" },
              { value: "history", name: "History" },
              { value: "politics", name: "Politics" },
            ]}
          />
        </ContainerInputs>

        <ContainerInputs className="container-inputs">
          <LabelComponent labelfor="difficulty" textlabel="Choose Difficulty" />
          <DropDownComponent
            namedropdown="difficulty"
            iddropdown="difficulty"
            optionsdropdown={[
              { value: "easy", name: "Easy" },
              { value: "medium", name: "Medium" },
              { value: "hard", name: "Hard" },
            ]}
          />
        </ContainerInputs>

        <ContaineComponents className="container-inputs">
          <StyledError errorname="Error: can't generate questions, please trie again!" />
        </ContaineComponents>

        <ContaineComponents className="container-inputs">
          <InputFormComponent typeinput="submit" valueinput="Start Quiz" />
        </ContaineComponents>
      </FormSetupComponent>
    </>
  );
};

FormComponent.propTypes = {};

export default FormComponent;
