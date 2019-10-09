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
  banner_id: Yup.number().required('Please, inform the banner image'),
  title: Yup.string().required('Please, inform a title'),
  description: Yup.string()
    .max(140, 'Description can not be more than 140 characters')
    .required('Please, inform a description'),
  localization: Yup.string().required('Please, inform a location'),
  date: Yup.date()
    .required('Please, inform a date')
    .min(new Date(), 'Unable to create the meetup on past dates'),
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
        `Something has gone wrong. Server response: ${err.response.data.error}`
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
