import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import logo from '~/assets/M.svg';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Welcome to MeetApp" />
        {children}
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
