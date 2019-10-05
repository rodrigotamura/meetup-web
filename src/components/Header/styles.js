import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  max-height: 92px;
  align-items: center;
  margin-bottom: 52px;
`;

export const Content = styled.header`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  width: 100%;
  max-width: 940px;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    color: #fff;
    text-align: right;
    margin-right: 25px;
    line-height: 18px;

    strong {
      display: block;
      font-size: 14px;
    }

    a {
      color: #fff;
      transition: color 0.3s;

      &:hover {
        color: ${darken(0.5, '#fff')};
      }
    }
  }

  button {
    background: #d44059;
    color: #fff;

    &:hover {
      background: ${darken(0.15, '#d44059')};
    }
  }
`;
