'use client';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';

const Navbar = () => {
  const { cart, profit } = useShop();

  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-300">
      <h1 className="text-xl font-bold">🍋 Lemonade Stand</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/checkout">Checkout ({cart.length})</Link>
        <span>Profit: ${profit}</span>
      </div>
    </nav>
  );
};

export default Navbar;