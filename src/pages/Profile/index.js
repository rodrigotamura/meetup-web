import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
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
          name="confirm_password"
          type="password"
          placeholder="Confirm new password"
        />
        <button type="submit">
          <MdSave size={16} color="#FFF" /> Save profile changes
        </button>
      </Form>
    </Container>
  );
}
