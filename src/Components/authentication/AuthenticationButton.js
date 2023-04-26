import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown } from 'antd';
import LoginButtonDropDown from './LoginButton';
import LogoutButtonDropDown from './LogoutButton';
import OrderButton from '../Navibar/OrderButton';
import TrackTraceButton from '../Navibar/TrackTraceButton';

const items = [
  {
    label: (
      <div>
        <OrderButton />
      </div>
    ),
    key: '0',
  },
  {
    label: (
      <div>
        <TrackTraceButton />
      </div>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div>
        <LogoutButtonDropDown />
      </div>
    ),
    key: '3',
  },
];

export default function AuthenticationButton() {
  const {
    isAuthenticated,
  } = useAuth0();

  if (isAuthenticated) {
    return (
      <Dropdown
        menu={{ items }}
      >
        <img src="/images/userIconWhite.png" alt="" width="50px" data-cy="test-navbar-userIcon" />
      </Dropdown>
    );
  }

  return <LoginButtonDropDown />;
}
