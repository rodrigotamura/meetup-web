import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';
import api from '~/services/api';
import Loading from '~/components/Loading';

export default function Profile({ history }) {
  const [profile, setProfile] = useState({});
  const [sendLoading, setSendLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('Please, inform your name'),
    email: Yup.string()
      .email('Please, inform a correct e-mail address')
      .required('Please, inform a correct e-mail address'),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword, value) =>
      oldPassword
        ? value
            .required(`Please, provide your new password`)
            .min(6, `Password must be at least 6 characters`)
        : value
    ),
    confirmPassword: Yup.string().when('password', (password, value) =>
      password
        ? value
            .required('Please, inform the password confirmation')
            .oneOf(
              [Yup.ref('password')],
              'Password confirmation must be equal to the new password'
            )
        : value
    ),
  });

  useEffect(() => {
    (async function loadProfile() {
      setLoading(true);
      try {
        const response = await api.get('/users');

        setProfile(response.data.profile);
      } catch (error) {
        toast.error(
          `Something is wrong in loading meetup. Server response: ${error.response.data.error}`
        );
      }
      setLoading(false);
    })();
  }, []);

  function handleSubmit(data, { resetForm }) {
    setSendLoading(true);
    dispatch(updateProfileRequest(data));
    setSendLoading(false);
    resetForm(profile);
  }
  return (
    <Container>
      {loading && <Loading />}
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your e-mail address" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Current password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
        />
        <button type="submit">
          {sendLoading ? (
            'Saving... '
          ) : (
            <>
              <MdSave size={16} color="#FFF" /> Save profile changes
            </>
          )}
        </button>
      </Form>
    </Container>
  );
}
