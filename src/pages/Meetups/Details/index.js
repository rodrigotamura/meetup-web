import React, { useEffect, useState } from 'react';
import { MdEdit, MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Container, Title, Meetup } from './styles';

import api from '~/services/api';
import Loading from '~/components/Loading';
import { formatDate } from '~/utils/format';

export default function Details({ match, history }) {
  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState();
  const { id } = match.params;

  useEffect(() => {
    (async function loadMeetup() {
      setLoading(true);
      try {
        const response = await api.get(`meetups/${id}`);

        const data = {
          ...response.data.meetup,
          formatedDate: formatDate(new Date(response.data.meetup.date)),
        };

        setMeetup(data);
      } catch (err) {
        toast.error(
          `Something is wrong in loading meetup. Server response: ${err.response.data.error}`
        );
      }
      setLoading(false);
    })();
  }, [id]);

  return (
    <Container>
      {loading && <Loading />}
      {meetup && (
        <>
          <Title>
            <h1>{meetup.title}</h1>
            <div>
              <button
                type="button"
                className="edit"
                onClick={() => {
                  history.push(`/meetups/edit/${id}`);
                }}
              >
                <MdEdit color="#FFF" size={18} />
                Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  history.push('/meetups');
                }}
              >
                <MdArrowBack color="#FFF" size={18} />
                Back
              </button>
            </div>
          </Title>
          <Meetup>
            <img src={meetup.banner.url} alt={meetup.title} />
            <div className="about">{meetup.description}</div>
            <div className="extra">
              <span>{meetup.formatedDate}</span>
              <span>{meetup.localization}</span>
            </div>
          </Meetup>
        </>
      )}
    </Container>
  );
}

Details.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
