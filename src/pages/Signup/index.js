import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Signup() {
  return (
    <>
      <Form>
        <Input name="name" type="text" placeholder="Your full name" />
        <Input name="email" type="email" placeholder="Your e-mail address" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">Register</button>
        <Link to="/">Do you have an account? Click here.</Link>
      </Form>
    </>
  );
}
