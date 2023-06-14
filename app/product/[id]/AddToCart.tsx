'use client';

import { useCartStore } from '@/store/store';
import { AddCartType } from '@/types/AddCartType';
import { useState } from 'react';

export default function AddToCart({
  name,
  id,
  image,
  unit_amount,
  quantity
}: AddCartType) {
  const cartStore = useCartStore();
  const [added, setAdded] = useState(false);
  const handleAddToCart = () => {
    cartStore.addProduct({ name, id, image, unit_amount, quantity });
  };
  return (
    <>
      <button
        onClick={() => handleAddToCart()}
        className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700"
      >
        Add to cart
      </button>
    </>
  );
}
