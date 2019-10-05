import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

// configuring Yup for this form
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Please, insert a valid e-mail address.')
    .required('E-mail address is required'),
  password: Yup.string()
    .min(6, 'Password must be 6 chars at least')
    .required('Password is required'),
  // now insert into form the schema property
});

export default function Signup() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Your full name" />
        <Input name="email" type="email" placeholder="Your e-mail address" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">Register</button>
        <Link to="/">Do you have an account? Click here.</Link>
      </Form>
    </Container>
  );
}
