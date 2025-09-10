import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../../utils/constantes";

const buttonVariants = {
  next: {
    bg: "#6c63ff",
    color: "#fff",
    hover: "#4834d4",
  },
  back: {
    bg: "#f7f7fb",
    color: "#222",
    hover: "#e2e2e2",
  },
  close: {
    bg: "#ff4d4f",
    color: "#fff",
    hover: "#d9363e",
  },
  open: {
    bg: "#43e97b",
    color: "#fff",
    hover: "#2bb673",
  },
  default: {
    bg: "#222",
    color: "#fff",
    hover: "#444",
  },
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.7rem 2.2rem;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(108, 99, 255, 0.08);
  outline: none;
  background: ${({ $variant }) =>
    buttonVariants[$variant]?.bg || buttonVariants.default.bg};
  color: ${({ $variant }) =>
    buttonVariants[$variant]?.color || buttonVariants.default.color};

  &:hover {
    background: ${({ $variant }) =>
      buttonVariants[$variant]?.hover || buttonVariants.default.hover};
    box-shadow: 0 4px 16px rgba(108, 99, 255, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }

  @media only screen and (${devices.tablet}) {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }
  @media only screen and (${devices.mobileG}) {
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
  }
  @media only screen and (${devices.mobileP}) {
    font-size: 0.9rem;
    padding: 0.45rem 0.7rem;
  }
`;

const Button = ({ children, $variant = "default", ...rest }) => {
  return (
    <StyledButton $variant={$variant} {...rest} className="shadow">
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  $variant: PropTypes.oneOf(["next", "back", "close", "open", "default"]),
};

export default Button;
