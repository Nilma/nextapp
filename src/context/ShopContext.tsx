'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = { id: string; name: string; price: number; };

type ShopContextType = {
  profit: number;
  cart: Product[];
  sellLemonade: () => void;
  buyLemon: () => void;
  addToCart: (product: Product) => void;
  clearCart: () => void;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [profit, setProfit] = useState(0);
  const [cart, setCart] = useState<Product[]>([]);

  const sellLemonade = () => setProfit((prev) => prev + 5);
  const buyLemon = () => setProfit((prev) => prev - 2);
  const addToCart = (product: Product) => setCart((prev) => [...prev, product]);
  const clearCart = () => setCart([]);

  return (
    <ShopContext.Provider value={{ profit, cart, sellLemonade, buyLemon, addToCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};