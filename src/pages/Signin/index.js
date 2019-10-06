import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { signInRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';/

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Your e-mail address"
          autoFocus
        />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">{loading ? 'Loading...' : 'Sign in'}</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
