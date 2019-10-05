import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;

  img {
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      border: none;
      background: rgba(0, 0, 0, 0.1);
      font-size: 18px;
      border-radius: 4px;
      padding: 15px;
      margin-bottom: 13px;
      color: #fff;
    }

    button {
      background: #f94d6a;
      color: #fff;

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
