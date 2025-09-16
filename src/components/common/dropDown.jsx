import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../../utils/constantes";

const StyledSelect = styled.select`
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  color: #222;
  background: #fff;
  padding: 8px 14px;
  width: 100%;
  max-width: 100%;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:focus,
  &:hover {
    width: 100%;
    border-color: #6c63ff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.75);
    background: #f7f7fb;
    color: #111;
  }

  @media only screen and (${devices.tablet}) {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 0 0.7rem 0 !important;
    text-align: center;
  }
  @media only screen and (${devices.mobileP}) {
    width: 100% !important;
    margin: 0 !important;
    font-size: 0.95rem;
  }
`;

const DropDownComponent = ({
  iddropdown,
  namedropdown,
  valuedropdown,
  onChangedropdown,
  optionsdropdown,
  placeholderdropdown,
  ...rest
}) => {
  return (
    <StyledSelect
      id={iddropdown}
      name={namedropdown}
      value={valuedropdown}
      onChange={onChangedropdown}
      className="dropdown-component"
    >
      {placeholderdropdown && <option value="">{placeholderdropdown}</option>}

      {optionsdropdown.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </StyledSelect>
  );
};

DropDownComponent.propTypes = {
  iddropdown: PropTypes.string.isRequired,
  namedropdown: PropTypes.string.isRequired,
  valuedropdown: PropTypes.string.isRequired,
  onChangedropdown: PropTypes.func.isRequired,
  optionsdropdown: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
};

export default DropDownComponent;
