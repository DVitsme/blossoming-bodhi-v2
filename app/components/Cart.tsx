'use client';

import Image from 'next/image';
import { useCartStore } from '@/store/store';
import { formatUsdPrice } from '@/util/PriceFormat';

const Cart = () => {
  const cartStore = useCartStore();
  console.log(cartStore);
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700"
      >
        <h1>Here's your shopping list </h1>
        {cartStore.cart.map((item) => (
          <div className="flex items-center my-8" key={item.id}>
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="pr-2"
            />
            <div>
              <h2>{item.name}</h2>
              <h2>Quantity: {item.quantity}</h2>
              <p className="text-sm">
                {item.unit_amount && formatUsdPrice(item.unit_amount)}
              </p>
            </div>
          </div>
        ))}
        <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
