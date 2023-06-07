'use client';

import Image from 'next/image';
import { useCartStore } from '@/store/store';

const Cart = () => {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);
  return (
    <div>
      <h2>hello ther</h2>
    </div>
  );
};

export default Cart;
