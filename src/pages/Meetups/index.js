import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { formatDate } from '~/utils/format';

import Loading from '~/components/Loading';
import { Container, Title, Meetups } from './styles';
import api from '~/services/api';

export default function Meetup({ history }) {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date] = useState(new Date());

  useEffect(() => {
    (async function loadMeetups() {
      setLoading(true);
      try {
        const response = await api.get('meetups', {
          params: { date },
        });

        setMeetups(response.data);
      } catch (err) {
        toast.error(`Something is wrong in loading meetups.`);
      }
      setLoading(false);
    })();
  }, [date]);

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
        {loading && <Loading />}
        {meetups.length > 0 ? (
          meetups.map(meetup => (
            <Link key={meetup.id} to={`/meetups/${meetup.id}`}>
              <div>
                <strong>{meetup.title}</strong>
                <span>{formatDate(new Date(meetup.date))}</span>
              </div>
            </Link>
          ))
        ) : (
          <p>You do not have any meetup yet!</p>
        )}
      </Meetups>
    </Container>
  );
}

Meetup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
