import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { Container } from './styles';
import ImageInput from '~/pages/Meetups/components/ImageInput';
import Datapicker from '~/components/Datepicker';
import api from '~/services/api';

// validation
const schema = Yup.object().shape({
  banner_id: Yup.number().required('Image is required'),
  title: Yup.string().required('Name is required'),
  description: Yup.string()
    .min(10, 'You must type 10 chars at least')
    .required('Description is required'),
  date: Yup.date('Data invalida').required('Provide date and time'),
  localization: Yup.string().required('Provide the place'),
});

export default function NewMeetup({ history }) {
  async function handleSubmit({
    title,
    description,
    localization,
    date,
    banner_id,
  }) {
    try {
      await api.post('meetups', {
        title,
        description,
        localization,
        date,
        banner_id,
      });

      toast.success('Meetup has created successfuly 👍');
      history.push('/');
    } catch (err) {
      toast.error(
        `Something gone wrong. Server response: ${err.response.data.error}`
      );
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <ImageInput name="banner_id" />
        <Input name="title" type="text" placeholder="Title of Meetup" />
        <Textarea name="description" placeholder="Description of Meetup" />
        <Datapicker name="date" placeholder="Date/time of Meetup" />
        <Input name="localization" type="text" placeholder="Where?" />
        <button type="submit">
          <MdSave size={16} color="#FFF" /> Save meetup
        </button>
      </Form>
    </Container>
  );
}

NewMeetup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
