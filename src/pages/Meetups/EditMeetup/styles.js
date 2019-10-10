import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;

    .react-datepicker-wrapper + span {
      color: red;
      margin-top: -10px;
      margin-bottom: 10px;
      margin-left: 10px;
    }

    button:not(.react-datepicker__navigation) {
      background: #f94d6a;
      color: #fff;
      align-self: flex-end;
      width: 180px;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }

    a {
      margin-top: 20px;
      align-self: center;
      color: #fff;
      transition: color 0.3s;

      &:hover {
        color: ${darken(0.3, '#FFF')};
      }
    }

    .react-datepicker-wrapper + span {
      color: red;
      margin-top: -10px;
      margin-bottom: 10px;
      margin-left: 10px;
    }

    .react-datepicker-wrapper input {
      width: 100%;
    }
  }
`;
export const ImageInput = styled.label`
  height: 250px;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  transition: background 200ms;

  span {
    font-weight: bold;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    cursor: pointer;
  }
`;
