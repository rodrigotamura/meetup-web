import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdSave, MdImage } from 'react-icons/md';

import { Container, ImageInput } from './styles';

export default function FormMeetup() {
  return (
    <Container>
      <ImageInput>
        <MdImage size={40} /> <span>Select image</span>
      </ImageInput>
      <Form>
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
