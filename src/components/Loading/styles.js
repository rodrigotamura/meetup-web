import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background: transparent !important;
  display: flex;
  align-items: center !important;
  justify-content: center !important;

  &:hover {
    box-shadow: none !important;
  }

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
