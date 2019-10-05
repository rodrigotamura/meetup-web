import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, ContentProfile } from './styles';

import logo from '~/assets/Mh.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="MeetApp Home" />
        </Link>
        <ContentProfile>
          <div>
            <strong>Rodrigo Tamura</strong>
            <Link to="/profile">My profile</Link>
          </div>
          <button type="button">Sign out</button>
        </ContentProfile>
      </Content>
    </Container>
  );
}
