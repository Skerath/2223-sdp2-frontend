import { useAuth0 } from '@auth0/auth0-react';
import Nav from 'react-bootstrap/Nav';
import { MdLogout } from 'react-icons/md';
import React from 'react';

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Nav.Link
      type="button"
      className="d-flex align-items-center"
      onClick={logout}
    >
      <MdLogout size={60} className="me-1" />
      Log&nbsp;out
    </Nav.Link>
  );
}
