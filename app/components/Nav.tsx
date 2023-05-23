'use client';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';

const Nav = ({ user }: Session) => {
  return (
    <nav>
      <h1>Sanity Check</h1>
    </nav>
  );
};

export default Nav;
