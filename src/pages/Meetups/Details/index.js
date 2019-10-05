import React from 'react';
import { MdEdit, MdArrowBack } from 'react-icons/md';
import history from '~/services/history';

import { Container, Title, Meetup } from './styles';

import Imagem from '~/assets/Bitmap.jpg';

export default function Details() {
  return (
    <Container>
      <Title>
        <h1>React Native Meetup</h1>
        <div>
          <button
            type="button"
            className="edit"
            onClick={() => {
              history.push('/meetups/edit/1');
            }}
          >
            <MdEdit color="#FFF" size={18} />
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              history.push('/meetups');
            }}
          >
            <MdArrowBack color="#FFF" size={18} />
            Back
          </button>
        </div>
      </Title>
      <Meetup>
        <img src={Imagem} alt="React Native Meetup" />
        <div className="about">
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados. Caso queira participar como
          palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </div>
        <div className="extra">
          <span>24th July, at 20h</span>
          <span>Guilherme Gembala Street, 260</span>
        </div>
      </Meetup>
    </Container>
  );
}
