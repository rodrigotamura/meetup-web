import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, ContentProfile } from './styles';

import logo from '~/assets/Mh.svg';

export default function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="MeetApp Home" />
        </Link>
        <ContentProfile>
          <div>
            <strong>{name}</strong>
            <Link to="/profile">My profile</Link>
          </div>
          <button type="button" onClick={handleSignOut}>
            Sign out
          </button>
        </ContentProfile>
      </Content>
    </Container>
  );
}
