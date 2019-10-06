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

  div {
    display: flex;
    flex-direction: row;

    button {
      background: #d44059;
      color: #fff;
      width: 120px;

      &:hover {
        background: ${darken(0.15, '#d44059')};
      }
    }

    button.edit {
      margin: 0 20px;
      background: #4dbaf9;

      &:hover {
        background: ${darken(0.15, '#4dbaf9')};
      }
    }
  }
`;
export const Meetup = styled.div`
  margin-top: 48px;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 48px;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  div.about {
    color: #fff;
    font-size: 18px;
  }

  div.extra {
    display: flex;

    span {
      color: #fff;
      font-size: 16px;
      margin: 20px;
    }
  }
`;
