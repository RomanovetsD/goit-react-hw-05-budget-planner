import React from 'react';
import styled from 'styled-components';
import T from 'prop-types';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.propTypes = {
  children: T.string.isRequired,
  customStyles: T.string.isRequired,
};

export default Label;
