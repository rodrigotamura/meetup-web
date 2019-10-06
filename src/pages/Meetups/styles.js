import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
  }

  button {
    background: #d44059;
    color: #fff;

    &:hover {
      background: ${darken(0.15, '#d44059')};
    }
  }
`;

export const Meetups = styled.div`
  margin-top: 48px;

  p {
    color: #fff;
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    border-radius: 4px;
    margin: 10px auto;
    padding: 20px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 0px 8px 0 rgba(212, 64, 89, 0.5);
    }
  }
`;
