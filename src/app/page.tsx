'use client';
import Navbar from '@/components/Navbar';
import { useShop } from '@/context/ShopContext';

export default function HomePage() {
  const { sellLemonade, buyLemon, profit } = useShop();

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Manage Your Lemonade Stand</h2>
        <button className="bg-green-500 text-white px-4 py-2 mr-4 rounded" onClick={sellLemonade}>
          Sell Lemonade ($5)
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={buyLemon}>
          Buy Lemon (-$2)
        </button>
        <p className="mt-4">Current Profit: ${profit}</p>
      </div>
    </div>
  );
}