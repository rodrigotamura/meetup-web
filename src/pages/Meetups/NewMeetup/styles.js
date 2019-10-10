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

    .react-datepicker-wrapper input {
      width: 100%;
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
  }
`;
