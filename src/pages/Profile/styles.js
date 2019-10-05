import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      background: #f94d6a;
      color: #fff;
      align-self: flex-end;
      width: 200px;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }
  }
`;
