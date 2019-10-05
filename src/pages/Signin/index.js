import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Signin() {
  return (
    <>
      <Form>
        <Input name="email" type="email" placeholder="Your e-mail address" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">Sign in</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
