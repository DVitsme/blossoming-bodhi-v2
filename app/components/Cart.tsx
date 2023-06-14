'use client';

import Image from 'next/image';
import { useCartStore } from '@/store/store';

const Cart = () => {
  const cartStore = useCartStore();
  console.log(cartStore);
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <p></p>
    </div>
  );
};

export default Cart;
