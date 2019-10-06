import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Title, Meetups } from './styles';

export default function Meetup({ history }) {
  return (
    <Container>
      <Title>
        <h1>My Meetups</h1>
        <button
          type="button"
          onClick={() => {
            history.push('/meetups/new');
          }}
        >
          New meetup
        </button>
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

Meetup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
