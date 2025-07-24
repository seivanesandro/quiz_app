import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../../utils/constantes";

const StyledError = styled.span`
  display: block;
  font-size: 1rem;
  color: #ff4d4f;
  background: transparent;
  padding: 0 0 0 0.1rem;
  font-weight: 500;
  margin: 0.1rem 0;
  text-transform: capitalize;
  text-align: left;
  letter-spacing: 0.5px;

  @media only screen and (${devices.tablet}) {
    font-size: 0.95rem;
  }
  @media only screen and (${devices.mobileP}) {
    font-size: 0.9rem;
  }
`;

const ErrorComponent = ({ errorname }) => {
  if (!errorname) return null;
  return <StyledError className="error">{errorname}</StyledError>;
};

ErrorComponent.propTypes = {
  errorname: PropTypes.string.isRequired,
};

export default ErrorComponent;
