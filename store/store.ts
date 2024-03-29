import { AddCartType } from '@/types/AddCartType';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartState = {
  isOpen: boolean;
  cart: AddCartType[];
  toggleCart: () => void;
  addProduct: (item: AddCartType) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: true,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return {
                  ...cartItem,
                  quantity: (cartItem.quantity as number) + 1
                };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        })
    }),
    { name: 'cart-store' }
  )
);
