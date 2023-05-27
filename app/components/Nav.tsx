'use client';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Nav = ({ user }: Session) => {
  return (
    <nav>
      <h1>Sanity Check</h1>
      <ul>
        <li>Products</li>
        {user ? (
          <li>
            <Image
              alt={user.name as string}
              src={user?.image as string}
              height={48}
              width={48}
              className="rounded-full"
            />
          </li>
        ) : (
          <li>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
