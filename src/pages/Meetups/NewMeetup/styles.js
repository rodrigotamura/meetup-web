import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;

    input + span,
    textarea + span {
      color: red;
      margin: -10px 0 10px 10px;
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
