'use client';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { AiFillShopping } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

import { useCartStore } from '@/store/store';
import Cart from './Cart';

const Nav = ({ user }: Session) => {
  const cartStore = useCartStore();
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">Blossoming Bodhi</Link>
      <ul className="flex items-center gap-12">
        {user ? (
          <>
            <li
              onClick={() => cartStore.toggleCart()}
              className="flex items-center text-3xl relative cursor-pointer"
            >
              <AiFillShopping />
              <span className="bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
                {cartStore.cart.length}
              </span>
            </li>
            <li className="">
              <Image
                alt={user.name as string}
                src={user?.image as string}
                height={36}
                width={36}
                className="rounded-full"
              />
            </li>

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
