import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  padding: 8px 14px;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  color: #222;
  background: #fff;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({typeinput}) =>
    typeinput === "text" &&
    css`
      width: 100%;
      max-width: 100%;
      margin: 0;

      &:focus,
      &:hover {
        width: 100%;
        border-color: #6c63ff;
        outline: none;
        box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.75);
        transition:
          width 0.3s,
          border-color 0.3s,
          box-shadow 0.3s;
      }
    `}

  ${({typeinput}) =>
    typeinput === "number" &&
    css`
      width: 100%;
      max-width: 100%;
      margin: 0;

      &:focus,
      &:hover {
        width: 100%;
        border-color: #6c63ff;
        outline: none;
        box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.75);
        transition:
          width 0.3s,
          border-color 0.3s,
          box-shadow 0.3s;
      }
    `}

  ${({typeinput}) =>
    typeinput === "submit" &&
    css`
      width: auto;
      min-width: 4rem;
      padding: 0.8rem 2rem;
      background: linear-gradient(90deg, #6c63ff 0%, #4834d4 100%);
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      border: none;
      &:hover {
        background: #fff;
        color: #6c63ff;
        box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.78);
      }
    `}
`;

const InputFormComponent = ({
  typeinput = "text",
  placeholderinput,
  nameInput, 
  idinput,
  valueinput,
  onChangeInput,
}) => {
  return (
    <>
      <StyledInput
        type={typeinput}
        typeinput={typeinput}
        className="input-control"
        id={idinput}
        name={nameInput}
        placeholder={placeholderinput}
        onChangeInput={onChangeInput}
        value={valueinput}
        autoComplete="off"
      />
    </>
  );
};

InputFormComponent.propTypes = {
  typeinput: PropTypes.string.isRequired,
  nameinput: PropTypes.string.isRequired,
  placeholderinput:PropTypes.string.isRequired,
  idinput: PropTypes.string.isRequired,
  valueinput:PropTypes.string.isRequired,
};

export default InputFormComponent;