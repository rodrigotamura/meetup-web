import styled from 'styled-components';

export const Container = styled.label`
  & > span {
    color: red;
  }
`;

export const Label = styled.label`
  height: 250px;
  display: flex;
  background: ${props =>
    props.background
      ? `url(${props.background}) center`
      : 'rgba(255, 255, 255, 0.1)'};
  background-size: cover;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  transition: background 200ms;
  margin-bottom: 15px;

  span {
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;

    * {
      opacity: 0.8;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    display: none;
  }

  * {
    opacity: 0.5;
    transition: opacity 200ms;
  }
`;
