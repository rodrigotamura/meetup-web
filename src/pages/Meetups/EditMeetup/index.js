import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdSave, MdImage } from 'react-icons/md';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Container } from './styles';
import api from '~/services/api';
import ImageInput from '~/pages/Meetups/components/ImageInput';

export default function EditMeetup({ match, history }) {
  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState({});
  const { id } = match.params;

  useEffect(() => {
    (async function loadMeetup() {
      setLoading(true);
      try {
        const response = await api.get(`meetups/${id}`);
        response.data.date = () => {
          const dateObj = new Date(response.data.date);
          const isPM = dateObj.getHours() >= 12;
          return `${dateObj.getMonth()}/${dateObj.getDay()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()} ${isPM}`;
        };

        setMeetup(response.data);
      } catch (err) {
        toast.error(
          `Something is wrong in loading meetup. Server response: ${err}`
        );
      }
      setLoading(false);
    })();
  }, [id]);

  return (
    <Container>
      <Form>
        <ImageInput name="image" />
        <Input name="title" type="text" placeholder="Title" />
        <Textarea name="description" placeholder="Description" />
        <Input name="date" type="datetime-local" placeholder="Date/time" />
        <Input name="localization" type="text" placeholder="Where?" />
        <button type="submit">
          <MdSave size={16} color="#FFF" /> Save meetup
        </button>
      </Form>
    </Container>
  );
}

EditMeetup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
