import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title, Meetups } from './styles';

export default function Meetup() {
  return (
    <Container>
      <Title>
        <h1>My Meetups</h1>
        <button type="button">New meetup</button>
      </Title>

      <Meetups>
        <Link to="/meetups/1">
          <div>
            <strong>React NAtive Meetup</strong>
            <span>24th July, 10h</span>
          </div>
        </Link>

        <Link to="/meetups/1">
          <div>
            <strong>React NAtive Meetup</strong>
            <span>24th July, 10h</span>
          </div>
        </Link>

        <Link to="/meetups/1">
          <div>
            <strong>React NAtive Meetup</strong>
            <span>24th July, 10h</span>
          </div>
        </Link>

        <Link to="/meetups/1">
          <div>
            <strong>React NAtive Meetup</strong>
            <span>24th July, 10h</span>
          </div>
        </Link>
      </Meetups>
    </Container>
  );
}
