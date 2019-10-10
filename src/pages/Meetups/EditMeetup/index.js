import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Container } from './styles';
import api from '~/services/api';
import ImageInput from '~/pages/Meetups/components/ImageInput';
import Loading from '~/components/Loading';
import Datapicker from '~/components/Datepicker';

export default function EditMeetup({ match, history }) {
  const [loading, setLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [meetup, setMeetup] = useState();
  const { id } = match.params;

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

  useEffect(() => {
    (async function loadMeetup() {
      setLoading(true);
      try {
        const response = await api.get(`meetups/${id}`);

        setMeetup({ ...response.data.meetup });
      } catch (err) {
        toast.error(
          `Something is wrong in loading meetup. Server response: ${err}`
        );
      }
      setLoading(false);
    })();
  }, [id]);

  async function handleSubmit({
    banner_id,
    title,
    description,
    date,
    localization,
  }) {
    setSendLoading(true);
    try {
      await api.put(`meetups/${id}`, {
        banner_id,
        title,
        description,
        date,
        localization,
      });

      toast.success(`Meetup updated successfully! 👍`);
    } catch (error) {
      toast.error(
        `Something has gone wrong. Server response: ${error.response.data.error}`
      );
    }
    setSendLoading(false);
  }

  return (
    <Container>
      {loading && <Loading />}
      <Form onSubmit={handleSubmit} schema={schema} initialData={meetup}>
        <ImageInput name="banner_id" />
        <Input name="title" type="text" placeholder="Title" />
        <Input name="description" placeholder="Description" />
        <Datapicker name="date" placeholder="Date/time of Meetup" />
        <Input name="localization" type="text" placeholder="Where?" />
        <button type="submit">
          {sendLoading ? (
            'Saving...'
          ) : (
            <>
              <MdSave size={16} color="#FFF" /> Save meetup
            </>
          )}
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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
