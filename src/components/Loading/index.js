import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Loading({ size = 40, color = '#fff' }) {
  return (
    <Container>
      <FaSpinner size={size} color={color} />
    </Container>
  );
}
Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
