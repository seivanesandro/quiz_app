import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: #f7f7fb;
  padding: 0 0 0 0.1rem;
  font-weight: 500;
  margin: 0.1rem 0;
  text-transform: capitalize;
  text-align: left;

  &:hover {
    color: #6c63ff;
  }
`;

const LabelComponent = ({labelfor, textlabel}) => {
  return (
    <>
      <StyledLabel htmlFor={labelfor} className="label-component">
        {textlabel}
      </StyledLabel>
    </>
  );
};

LabelComponent.propTypes = {
  labelfor: PropTypes.string.isRequired,
  textlabel: PropTypes.string.isRequired,
};

export default LabelComponent