import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  name: string;
  id: string;
  images?: string[];
  description?: string;
  unit_amount: number;
  quantity: number;
  metadata: string;
};

type CartState = {
  isOpen: boolean;
  cart: CartItem[];
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: true
    }),
    { name: 'cart-store' }
  )
);
