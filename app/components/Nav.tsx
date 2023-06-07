'use client';
import { useCartStore } from '@/store/store';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';

const Nav = ({ user }: Session) => {
  const cartStore = useCartStore();
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1>Blossoming Bodhi</h1>
      </Link>
      <ul className="flex items-center gap-12">
        {user ? (
          <>
            <li className="">
              <Image
                alt={user.name as string}
                src={user?.image as string}
                height={48}
                width={48}
                className="rounded-full"
              />
            </li>

            <li className="">Dashboard</li>
            <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </>
        ) : (
          <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
      </ul>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
};

export default Nav;
